// ============================================
// Milano Cortina 2026 - Finland Olympic App
// With Supabase Integration
// ============================================

// ============================================
// STATE
// ============================================
let state = {
    schedule: [],
    athletes: {},
    broadcasts: {},
    isLoading: true
};

// ============================================
// DATA LOADING
// ============================================
async function loadData() {
    try {
        if (window.appConfig && window.appConfig.isSupabaseConfigured && window.appConfig.supabase) {
            // Load from Supabase (future implementation)
            console.log('Supabase configured - would load from database');
            // For now, fall back to local data
        }

        // Use data from data.js
        state.schedule = typeof olympicSchedule !== 'undefined' ? olympicSchedule : [];
        state.athletes = typeof finnishAthletes !== 'undefined' ? finnishAthletes : {};
        state.broadcasts = typeof broadcastChannels !== 'undefined' ? broadcastChannels : {};

        console.log('Data loaded:', {
            scheduleDays: state.schedule.length,
            athleteSports: Object.keys(state.athletes).length,
            broadcasts: Object.keys(state.broadcasts).length
        });
    } catch (error) {
        console.error('Error loading data:', error);
    }

    state.isLoading = false;

    // Update UI
    populateSportFilter();
    populateDateFilter();
    populateDateRail();
    populateSportOptions();
    renderSchedule();
    renderAthletes();
}

// ============================================
// UI RENDERING
// ============================================

function populateSportFilter() {
    const sportFilter = document.getElementById('sportFilter');
    if (!sportFilter) return;

    // Extract unique sports from schedule
    const sportSet = new Set();
    state.schedule.forEach(day => {
        day.events.forEach(event => {
            if (event.sport && event.sport !== 'seremonia') {
                sportSet.add(event.sport);
            }
        });
    });

    // Sport names mapping
    const sportNames = {
        'maastohiihto': { name: '⛷️ Maastohiihto', finnish: true },
        'ampumahiihto': { name: '🎿 Ampumahiihto', finnish: true },
        'alppihiihto': { name: '⛷️ Alppihiihto', finnish: true },
        'makihyppy': { name: '🎿 Mäkihyppy', finnish: true },
        'yhdistetty': { name: '🎿 Yhdistetty', finnish: true },
        'freestylehiihto': { name: '🎿 Freestylehiihto', finnish: true },
        'kumparelasku': { name: '🎿 Kumparelasku', finnish: true },
        'lumilautailu': { name: '🏂 Lumilautailu', finnish: true },
        'taitoluistelu': { name: '⛸️ Taitoluistelu', finnish: true },
        'jaakiekko-miehet': { name: '🏒 Jääkiekko M', finnish: true },
        'jaakiekko-naiset': { name: '🏒 Jääkiekko N', finnish: true },
        'curling': { name: '🥌 Curling', finnish: false },
        'pikaluistelu': { name: '⛸️ Pikaluistelu', finnish: false },
        'short-track': { name: '⛸️ Short track', finnish: false },
        'kelkkailu': { name: '🛷 Kelkkailu', finnish: false },
        'rattikelkkailu': { name: '🛷 Rattikelkkailu', finnish: false },
        'skeleton': { name: '💀 Skeleton', finnish: false },
        'vuorihiihto': { name: '🎿 Vuorihiihto', finnish: false }
    };

    // Sort: Finnish sports first
    const sortedSports = Array.from(sportSet).sort((a, b) => {
        const aFinnish = sportNames[a]?.finnish ? 1 : 0;
        const bFinnish = sportNames[b]?.finnish ? 1 : 0;
        if (bFinnish !== aFinnish) return bFinnish - aFinnish;
        const aName = sportNames[a]?.name || a;
        const bName = sportNames[b]?.name || b;
        return aName.localeCompare(bName, 'fi');
    });

    sortedSports.forEach(sport => {
        const option = document.createElement('option');
        option.value = sport;
        const info = sportNames[sport];
        const finnishFlag = info?.finnish ? ' 🇫🇮' : '';
        option.textContent = (info?.name || sport) + finnishFlag;
        sportFilter.appendChild(option);
    });
}

function populateDateFilter() {
    const dateFilter = document.getElementById('dateFilter');
    if (!dateFilter) return;

    const dayNames = { 'Ma': 'Ma', 'Ti': 'Ti', 'Ke': 'Ke', 'To': 'To', 'Pe': 'Pe', 'La': 'La', 'Su': 'Su' };

    state.schedule.forEach(day => {
        const option = document.createElement('option');
        option.value = day.date;
        const dateObj = new Date(day.date + 'T12:00:00');
        const dayNum = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const label = day.label ? ` - ${day.label}` : '';
        option.textContent = `${day.day} ${dayNum}.${month}.${label}`;
        if (day.special) {
            option.textContent = '⭐ ' + option.textContent;
        }
        dateFilter.appendChild(option);
    });
}

function getBroadcastBadge(broadcastId) {
    const broadcast = state.broadcasts[broadcastId];
    if (!broadcast) return '';

    const typeClasses = {
        'free_tv': 'free-tv',
        'free_stream': 'free-stream',
        'paid_tv': 'paid-tv',
        'paid_stream': 'paid-stream'
    };

    return `<span class="broadcast-badge ${typeClasses[broadcast.type]}" title="${broadcast.name}">${broadcast.name}</span>`;
}

function renderSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    if (!scheduleList) return;

    const finnishOnly = document.getElementById('finnishOnly')?.checked || false;
    const medalsOnly = document.getElementById('medalsOnly')?.checked || false;

    // Use the new multi-select filters
    const sportFilterActive = selectedSports.size > 0;
    const channelFilterActive = selectedChannels.size < 5; // Not all selected

    let html = '';
    let hasResults = false;

    state.schedule.forEach(day => {

        // Filter events
        const filteredEvents = day.events.filter(event => {
            // Sport filter (multi-select)
            if (sportFilterActive && !selectedSports.has(event.sport)) return false;

            // Finnish only filter
            if (finnishOnly && !event.finnish) return false;

            // Medal only filter
            if (medalsOnly && !event.medal) return false;

            // Channel filter (multi-select)
            if (channelFilterActive) {
                const eventBroadcasts = event.broadcasts || [];
                const hasSelectedChannel = eventBroadcasts.some(bId => selectedChannels.has(bId));
                if (!hasSelectedChannel) return false;
            }

            return true;
        });

        if (filteredEvents.length === 0) return;

        hasResults = true;

        // Count medals for the day
        const medalCount = filteredEvents.filter(e => e.medal).length;

        // Format date
        const dateObj = new Date(day.date + 'T12:00:00');
        const dayNum = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const displayDate = `${day.day} ${dayNum}.${month}.`;

        html += `
            <div class="schedule-day" data-day-date="${day.date}">
                <div class="schedule-day-header ${day.special ? 'special' : ''}">
                    <div class="day-info">
                        <span class="day-date">${displayDate}</span>
                        ${day.label ? `<span class="day-label">${day.label}</span>` : ''}
                    </div>
                    ${medalCount > 0 ? `
                        <div class="day-medals">
                            <span>🏅</span>
                            <span>${medalCount} loppukilpailu${medalCount > 1 ? 'a' : ''}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="schedule-events">
                    ${filteredEvents.map(event => {
                        const sportEmojis = {
                            'maastohiihto': '⛷️',
                            'ampumahiihto': '🎿',
                            'alppihiihto': '⛷️',
                            'makihyppy': '🎿',
                            'yhdistetty': '🎿',
                            'freestylehiihto': '🎿',
                            'kumparelasku': '🎿',
                            'lumilautailu': '🏂',
                            'taitoluistelu': '⛸️',
                            'jaakiekko-miehet': '🏒',
                            'jaakiekko-naiset': '🏒',
                            'curling': '🥌',
                            'pikaluistelu': '⛸️',
                            'short-track': '⛸️',
                            'kelkkailu': '🛷',
                            'rattikelkkailu': '🛷',
                            'skeleton': '💀',
                            'seremonia': '🎭',
                            'vuorihiihto': '🎿'
                        };
                        const sportNames = {
                            'maastohiihto': 'Maastohiihto',
                            'ampumahiihto': 'Ampumahiihto',
                            'alppihiihto': 'Alppihiihto',
                            'makihyppy': 'Mäkihyppy',
                            'yhdistetty': 'Yhdistetty',
                            'freestylehiihto': 'Freestylehiihto',
                            'kumparelasku': 'Kumparelasku',
                            'lumilautailu': 'Lumilautailu',
                            'taitoluistelu': 'Taitoluistelu',
                            'jaakiekko-miehet': 'Jääkiekko M',
                            'jaakiekko-naiset': 'Jääkiekko N',
                            'curling': 'Curling',
                            'pikaluistelu': 'Pikaluistelu',
                            'short-track': 'Short track',
                            'kelkkailu': 'Kelkkailu',
                            'rattikelkkailu': 'Rattikelkkailu',
                            'skeleton': 'Skeleton',
                            'seremonia': 'Seremonia',
                            'vuorihiihto': 'Vuorihiihto'
                        };

                        // Build cleaner event HTML
                        const sportLabel = sportNames[event.sport] || event.sport;
                        const sportIcon = sportEmojis[event.sport] || '';

                        // Show actual broadcast channels
                        const broadcasts = event.broadcasts || [];
                        const channelNames = {
                            'yle-tv1': 'Yle TV1',
                            'yle-tv2': 'Yle TV2',
                            'yle-areena': 'Yle Areena',
                            'hbo-max': 'HBO Max',
                            'eurosport1': 'Eurosport'
                        };
                        const channelTypes = {
                            'yle-tv1': 'free',
                            'yle-tv2': 'free',
                            'yle-areena': 'free',
                            'hbo-max': 'paid',
                            'eurosport1': 'paid'
                        };

                        // Show up to 3 channels
                        const broadcastTags = broadcasts.slice(0, 3).map(bId => {
                            const name = channelNames[bId] || bId;
                            const type = channelTypes[bId] || 'paid';
                            return `<span class="bc-tag ${type}">${name}</span>`;
                        }).join('');

                        const detailText = event.detail || '';

                        // Build indicator badges for top-right corner
                        const indicators = [];
                        if (event.finnish) indicators.push('🇫🇮');
                        if (event.medal) indicators.push('🏅');
                        const indicatorHtml = indicators.length > 0
                            ? `<div class="event-indicators">${indicators.join('')}</div>`
                            : '';

                        return `
                            <div class="event-item ${event.finnish ? 'finnish' : ''} ${event.medal ? 'medal' : ''}">
                                ${indicatorHtml}
                                <div class="event-time">${event.time}</div>
                                <div class="event-details">
                                    <div class="event-header">
                                        <span class="event-sport">${sportIcon} ${sportLabel}</span>
                                    </div>
                                    <div class="event-main">
                                        <span class="event-name">${event.name}</span>
                                        ${detailText ? `<span class="event-detail">${detailText}</span>` : ''}
                                    </div>
                                    <div class="event-bc">${broadcastTags}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    if (!hasResults) {
        html = '<p class="no-results">Ei tapahtumia valituilla suodattimilla.</p>';
    }

    scheduleList.innerHTML = html;
}

function renderAthletes() {
    const athletesList = document.getElementById('athletesList');
    if (!athletesList) return;

    let html = '';

    // Sort sports: medal hopes first, then by athlete count
    const sortedSports = Object.entries(state.athletes).sort((a, b) => {
        // Medal hopes first
        if (b[1].medal_hope !== a[1].medal_hope) {
            return b[1].medal_hope ? 1 : -1;
        }
        // Then by athlete count
        return (b[1].athlete_count || 0) - (a[1].athlete_count || 0);
    });

    sortedSports.forEach(([sportId, sport]) => {
        const isTeam = sport.is_team;

        html += `
            <div class="sport-block ${sport.medal_hope ? 'medal-hope' : ''}" data-sport="${sportId}">
                <div class="sport-header">
                    <div class="sport-icon">${sport.emoji}</div>
                    <div class="sport-info">
                        <h3 class="sport-name">${sport.name_fi}</h3>
                        <p class="sport-meta">
                            ${sport.athlete_count} urheilijaa
                            ${sport.medal_hope ? '<span class="hope-badge">Mitalitoivo</span>' : ''}
                        </p>
                        ${sport.previous_result ? `<p class="sport-achievement">${sport.previous_result}</p>` : ''}
                    </div>
                </div>
        `;

        // Stars section
        if (sport.stars && sport.stars.length > 0) {
            html += `
                <div class="stars-section">
                    <h4 class="roster-title">⭐ Tähtipelaajat</h4>
                    <div class="stars-list">
                        ${sport.stars.map(star => `<span class="star-badge">${star}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        // Team sports (hockey)
        if (isTeam) {
            // Goalies
            if (sport.goalies && sport.goalies.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Maalivahdit</h4>
                        <div class="player-list">
                            ${sport.goalies.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Defense
            if (sport.defense && sport.defense.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Puolustajat</h4>
                        <div class="player-list">
                            ${sport.defense.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Forwards
            if (sport.forwards && sport.forwards.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Hyökkääjät</h4>
                        <div class="player-list">
                            ${sport.forwards.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Matches
            if (sport.matches && sport.matches.length > 0) {
                html += `
                    <div class="matches-section">
                        <h4 class="roster-title">Alkulohkon ottelut</h4>
                        <div class="match-list">
                            ${sport.matches.map(m => `
                                <div class="match-item ${m.highlight ? 'highlight' : ''}">
                                    <span class="match-date">${m.date}</span>
                                    <span class="match-opponent">${m.group ? `[${m.group}] ` : ''}vs ${m.opponent}</span>
                                    <span class="match-time">${m.time}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        } else {
            // Individual sports
            // Men
            if (sport.men && sport.men.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Miehet</h4>
                        <div class="player-list">
                            ${sport.men.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Women
            if (sport.women && sport.women.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Naiset</h4>
                        <div class="player-list">
                            ${sport.women.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Ice dance (figure skating)
            if (sport.ice_dance && sport.ice_dance.length > 0) {
                html += `
                    <div class="roster-section">
                        <h4 class="roster-title">Jäätanssi</h4>
                        <div class="player-list">
                            ${sport.ice_dance.map(p => `<span class="player-name">${p}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
        }

        // Events
        if (sport.events && sport.events.length > 0) {
            html += `
                <div class="events-section">
                    <h4 class="roster-title">Kilpailut</h4>
                    <div class="events-list">
                        ${sport.events.map(e => `<span class="event-tag">${e}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        // Note (e.g., "not in team event")
        if (sport.note) {
            html += `
                <div class="roster-section">
                    <p class="sport-note">ℹ️ ${sport.note}</p>
                </div>
            `;
        }

        html += '</div>';
    });

    athletesList.innerHTML = html;
}

// ============================================
// FILTER INITIALIZATION
// ============================================
let selectedSports = new Set();
let selectedChannels = new Set(['yle-tv1', 'yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1']);

function initFilters() {
    const finnishOnly = document.getElementById('finnishOnly');
    const medalsOnly = document.getElementById('medalsOnly');

    // Toggle filter handlers
    [finnishOnly, medalsOnly].forEach(checkbox => {
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                renderSchedule();
            });
        }
    });

    // Panel triggers
    const sportTrigger = document.getElementById('sportTrigger');
    const channelTrigger = document.getElementById('channelTrigger');
    const backdrop = document.getElementById('panelBackdrop');

    sportTrigger?.addEventListener('click', () => {
        sportTrigger.classList.toggle('active');
        openPanel('sportPanel');
    });
    channelTrigger?.addEventListener('click', () => {
        channelTrigger.classList.toggle('active');
        openPanel('channelPanel');
    });

    // Close buttons
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeAllPanels());
    });

    backdrop?.addEventListener('click', closeAllPanels);

    // Panel action buttons
    document.querySelector('[data-action="clear-sport"]')?.addEventListener('click', () => {
        document.querySelectorAll('#sportOptions input').forEach(cb => cb.checked = false);
        const allCb = document.querySelector('#sportAll');
        if (allCb) allCb.checked = true;
    });
    document.querySelector('[data-action="apply-sport"]')?.addEventListener('click', () => {
        applySportFilter();
        closeAllPanels();
    });
    document.querySelector('[data-action="clear-channel"]')?.addEventListener('click', () => {
        document.querySelectorAll('#channelOptions input').forEach(cb => cb.checked = false);
    });
    document.querySelector('[data-action="apply-channel"]')?.addEventListener('click', () => {
        applyChannelFilter();
        closeAllPanels();
    });

    // Date rail clicks - scroll to day (all days remain visible)
    document.getElementById('dateRail')?.addEventListener('click', (e) => {
        const pill = e.target.closest('.date-pill');
        if (pill) {
            document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Scroll to the selected day, or to top if "all"
            if (pill.dataset.date !== 'all') {
                scrollToDay(pill.dataset.date);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });
}

function openPanel(panelId) {
    const panel = document.getElementById(panelId);
    const backdrop = document.getElementById('panelBackdrop');
    if (panel) panel.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeAllPanels() {
    document.querySelectorAll('.filter-panel').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.filter-dropdown').forEach(d => d.classList.remove('active'));
    document.getElementById('panelBackdrop')?.classList.remove('visible');
    document.body.style.overflow = '';
}

function applySportFilter() {
    selectedSports.clear();
    const allChecked = document.querySelector('#sportAll')?.checked;

    if (!allChecked) {
        document.querySelectorAll('#sportOptions input:checked:not(#sportAll)').forEach(cb => {
            selectedSports.add(cb.value);
        });
    }
    // If "Kaikki" is checked or nothing selected, selectedSports stays empty (means all)

    updateSportCount();
    renderSchedule();
}

function applyChannelFilter() {
    selectedChannels.clear();
    document.querySelectorAll('#channelOptions input:checked').forEach(cb => {
        selectedChannels.add(cb.value);
    });
    updateChannelCount();
    renderSchedule();
}

function updateSportCount() {
    const trigger = document.getElementById('sportTrigger');
    const textEl = document.getElementById('sportText');

    trigger?.classList.toggle('active', selectedSports.size > 0);

    // Update button text
    if (textEl) {
        if (selectedSports.size === 0) {
            textEl.textContent = 'Kaikki lajit';
        } else if (selectedSports.size === 1) {
            const sportNames = {
                'maastohiihto': 'Maastohiihto',
                'ampumahiihto': 'Ampumahiihto',
                'alppihiihto': 'Alppihiihto',
                'makihyppy': 'Mäkihyppy',
                'yhdistetty': 'Yhdistetty',
                'freestylehiihto': 'Freestyle',
                'lumilautailu': 'Lumilautailu',
                'taitoluistelu': 'Taitoluistelu',
                'jaakiekko-miehet': 'Jääkiekko M',
                'jaakiekko-naiset': 'Jääkiekko N',
                'curling': 'Curling',
                'pikaluistelu': 'Pikaluistelu',
                'short-track': 'Short track'
            };
            const sport = Array.from(selectedSports)[0];
            textEl.textContent = sportNames[sport] || sport;
        } else {
            textEl.textContent = `${selectedSports.size} lajia valittu`;
        }
    }
}

function updateChannelCount() {
    const trigger = document.getElementById('channelTrigger');
    const textEl = document.getElementById('channelText');
    const allChannels = 5;

    trigger?.classList.toggle('active', selectedChannels.size < allChannels);

    // Update button text
    if (textEl) {
        if (selectedChannels.size >= allChannels) {
            textEl.textContent = 'Kaikki kanavat';
        } else if (selectedChannels.size === 1) {
            const channelNames = {
                'yle-tv1': 'Yle TV1',
                'yle-tv2': 'Yle TV2',
                'yle-areena': 'Yle Areena',
                'hbo-max': 'HBO Max',
                'eurosport1': 'Eurosport'
            };
            const channel = Array.from(selectedChannels)[0];
            textEl.textContent = channelNames[channel] || channel;
        } else {
            textEl.textContent = `${selectedChannels.size} kanavaa valittu`;
        }
    }
}

function scrollToDay(dateValue) {
    const dayElement = document.querySelector(`[data-day-date="${dateValue}"]`);
    if (dayElement) {
        const filterBar = document.getElementById('filterBar');
        const offset = filterBar ? filterBar.offsetHeight + 16 : 80;
        const top = dayElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

function populateDateRail() {
    const dateRail = document.getElementById('dateRail');
    if (!dateRail) return;

    const dayAbbr = { 'Ma': 'ma', 'Ti': 'ti', 'Ke': 'ke', 'To': 'to', 'Pe': 'pe', 'La': 'la', 'Su': 'su' };

    state.schedule.forEach(day => {
        const btn = document.createElement('button');
        btn.className = 'date-pill';
        btn.dataset.date = day.date;

        const dateObj = new Date(day.date + 'T12:00:00');
        const dayNum = dateObj.getDate();
        const abbr = dayAbbr[day.day] || day.day.toLowerCase();

        btn.innerHTML = `<span class="date-num">${dayNum}</span><span class="date-day">${abbr}</span>`;

        // Mark days with Finnish athletes (blue dot)
        const hasFinnish = day.events.some(e => e.finnish);
        if (hasFinnish) btn.classList.add('has-finnish');

        // Mark days with medal/final events (orange dot)
        const hasMedals = day.events.some(e => e.medal);
        if (hasMedals) btn.classList.add('has-medals');

        dateRail.appendChild(btn);
    });
}

function populateSportOptions() {
    const optionsContainer = document.getElementById('sportOptions');
    if (!optionsContainer) return;

    const sportSet = new Set();
    state.schedule.forEach(day => {
        day.events.forEach(event => {
            if (event.sport && event.sport !== 'seremonia') {
                sportSet.add(event.sport);
            }
        });
    });

    const sportNames = {
        'maastohiihto': '⛷️ Maastohiihto',
        'ampumahiihto': '🎿 Ampumahiihto',
        'alppihiihto': '⛷️ Alppihiihto',
        'makihyppy': '🎿 Mäkihyppy',
        'yhdistetty': '🎿 Yhdistetty',
        'freestylehiihto': '🎿 Freestylehiihto',
        'lumilautailu': '🏂 Lumilautailu',
        'taitoluistelu': '⛸️ Taitoluistelu',
        'jaakiekko-miehet': '🏒 Jääkiekko M',
        'jaakiekko-naiset': '🏒 Jääkiekko N',
        'curling': '🥌 Curling',
        'pikaluistelu': '⛸️ Pikaluistelu',
        'short-track': '⛸️ Short track',
        'kelkkailu': '🛷 Kelkkailu',
        'rattikelkkailu': '🛷 Rattikelkkailu',
        'skeleton': '💀 Skeleton',
        'vuorihiihto': '🎿 Vuorihiihto'
    };

    optionsContainer.innerHTML = '';

    // Add "Kaikki" option first
    const allLabel = document.createElement('label');
    allLabel.className = 'panel-option';
    allLabel.innerHTML = `
        <input type="checkbox" value="all" id="sportAll" checked>
        <span class="option-badge all-option">✓ Kaikki lajit</span>
    `;
    optionsContainer.appendChild(allLabel);

    // Add individual sports
    Array.from(sportSet).sort().forEach(sport => {
        const label = document.createElement('label');
        label.className = 'panel-option';
        label.innerHTML = `
            <input type="checkbox" value="${sport}">
            <span class="option-badge">${sportNames[sport] || sport}</span>
        `;
        optionsContainer.appendChild(label);
    });

    // Handle "Kaikki" toggle logic
    const allCheckbox = optionsContainer.querySelector('#sportAll');
    allCheckbox?.addEventListener('change', (e) => {
        const otherCheckboxes = optionsContainer.querySelectorAll('input[type="checkbox"]:not(#sportAll)');
        if (e.target.checked) {
            otherCheckboxes.forEach(cb => cb.checked = false);
        }
    });

    // Uncheck "Kaikki" when individual sport is selected
    optionsContainer.querySelectorAll('input[type="checkbox"]:not(#sportAll)').forEach(cb => {
        cb.addEventListener('change', () => {
            const allCb = optionsContainer.querySelector('#sportAll');
            if (allCb) allCb.checked = false;
        });
    });
}

// ============================================
// STICKY FILTER
// ============================================
function initStickyFilter() {
    const filterBar = document.getElementById('filterBar');

    if (!filterBar) return;

    // Create a placeholder to maintain layout when filter becomes fixed
    const placeholder = document.createElement('div');
    placeholder.className = 'filter-bar-placeholder';
    placeholder.style.display = 'none';
    filterBar.parentNode.insertBefore(placeholder, filterBar.nextSibling);

    let filterBarTop = 0;
    let filterBarHeight = 0;
    let isFixed = false;
    let initialized = false;

    function recalculatePosition() {
        // Only recalculate when not fixed
        if (!isFixed) {
            const rect = filterBar.getBoundingClientRect();
            filterBarTop = rect.top + window.scrollY;
            filterBarHeight = filterBar.offsetHeight;
        }
    }

    function updateStickyState() {
        // Don't run until properly initialized
        if (!initialized) return;

        const scrollY = window.scrollY;

        // Become sticky when scrolled past the filter bar's original position
        // filterBarTop must be > 100 to ensure hero has been measured
        if (filterBarTop > 100 && scrollY >= filterBarTop && !isFixed) {
            isFixed = true;
            filterBar.classList.add('is-fixed');
            placeholder.style.display = 'block';
            placeholder.style.height = filterBarHeight + 'px';
        } else if (scrollY < filterBarTop && isFixed) {
            isFixed = false;
            filterBar.classList.remove('is-fixed');
            placeholder.style.display = 'none';
        }
    }

    // Wait for page to fully load before calculating position
    window.addEventListener('load', () => {
        // Delay to ensure all rendering is complete
        setTimeout(() => {
            recalculatePosition();
            initialized = true;
            updateStickyState();
        }, 200);
    });

    // Listen to scroll
    window.addEventListener('scroll', updateStickyState, { passive: true });

    // Recalculate on resize
    window.addEventListener('resize', () => {
        if (!isFixed) {
            recalculatePosition();
        }
    });
}

// ============================================
// AUTO-SELECT CURRENT DATE DURING OLYMPICS
// ============================================
function autoSelectCurrentDate() {
    const today = new Date();
    today.setHours(12, 0, 0, 0); // Normalize to noon to avoid timezone issues
    const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format

    // Find the best date to select:
    // 1. If today matches a schedule day, use it
    // 2. Otherwise, find the closest future day (or the last day if Olympics are over)
    let targetDate = null;

    const scheduleDates = state.schedule.map(day => day.date);

    if (scheduleDates.includes(todayStr)) {
        // Today is in the schedule
        targetDate = todayStr;
    } else {
        // Find the first future date in the schedule
        const futureDate = scheduleDates.find(date => date > todayStr);
        if (futureDate) {
            targetDate = futureDate;
        } else if (scheduleDates.length > 0) {
            // Olympics are over, select the last day
            targetDate = scheduleDates[scheduleDates.length - 1];
        }
    }

    if (targetDate) {
        const datePill = document.querySelector(`.date-pill[data-date="${targetDate}"]`);
        if (datePill) {
            document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
            datePill.classList.add('active');

            // Scroll the date rail to show the active date
            datePill.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });

            // Scroll to the day in the schedule after a short delay (to let the page render)
            setTimeout(() => {
                scrollToDay(targetDate);
            }, 100);
        }
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    initStickyFilter();
    loadData().then(() => {
        // Auto-select current date (or closest future date)
        autoSelectCurrentDate();
    });
});
