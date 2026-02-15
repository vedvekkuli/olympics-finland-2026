// ============================================
// Milano Cortina 2026 - OFFICIAL DATA
// Updated from Yle and Olympiakomitea sources
// ============================================

// ============================================
// FINNISH ATHLETES - 102 total
// ============================================
const finnishAthletes = {
    'maastohiihto': {
        name_fi: 'Maastohiihto',
        emoji: '⛷️',
        athlete_count: 16,
        medal_hope: true,
        men: ['Niko Anttola', 'Ristomatti Hakola', 'Emil Liekari', 'Niilo Moilanen', 'Joni Mäki', 'Iivo Niskanen', 'Arsi Ruuskanen', 'Lauri Vuorinen'],
        women: ['Jasmi Joensuu', 'Jasmin Kähärä', 'Johanna Matintalo', 'Kerttu Niskanen', 'Vilma Nissinen', 'Krista Pärmäkoski', 'Vilma Ryytty', 'Amanda Saari'],
        events: ['Yhdistelmäkilpailu 20 km', 'Sprintti (p)', '10/15 km (v)', 'Viesti 4x7,5 km', 'Parisprintti (v)', '50 km (p)'],
        stars: ['Iivo Niskanen', 'Jasmi Joensuu', 'Kerttu Niskanen', 'Krista Pärmäkoski']
    },
    'ampumahiihto': {
        name_fi: 'Ampumahiihto',
        emoji: '🎿',
        athlete_count: 10,
        medal_hope: true,
        men: ['Tuomas Harjula', 'Olli Hiidensalo', 'Otto Invenius', 'Jimi Klemettinen', 'Tero Seppälä'],
        women: ['Inka Hämäläinen', 'Noora Kaisa Keränen', 'Venla Lehtonen', 'Sonja Leinamo', 'Suvi Minkkinen'],
        events: ['Sekajoukkueviesti', 'Normaalimatka 20/15 km', 'Pikamatka 10/7,5 km', 'Takaa-ajo 12,5/10 km', 'Viesti 4x7,5/6 km', 'Yhteislähtö 15/12,5 km'],
        stars: ['Suvi Minkkinen', 'Tero Seppälä']
    },
    'makihyppy': {
        name_fi: 'Mäkihyppy',
        emoji: '🎿',
        athlete_count: 7,
        medal_hope: false,
        men: ['Antti Aalto', 'Niko Kytösaho', 'Vilho Palosaari'],
        women: ['Heta Hirvonen', 'Minja Korhonen', 'Sofia Mattila', 'Jenny Rautionaho'],
        events: ['Normaalimäki', 'Suurmäki', 'Sekajoukkuekilpailu', 'Joukkuekilpailu'],
        stars: ['Jenny Rautionaho']
    },
    'yhdistetty': {
        name_fi: 'Yhdistetty',
        emoji: '🎿',
        athlete_count: 3,
        medal_hope: true,
        men: ['Ilkka Herola', 'Eero Hirvonen', 'Wille Karhumaa'],
        women: [],
        events: ['Normaalimäki/10 km', 'Suurmäki/10 km', 'Joukkuekilpailu'],
        stars: ['Ilkka Herola']
    },
    'alppihiihto': {
        name_fi: 'Alppihiihto',
        emoji: '⛷️',
        athlete_count: 5,
        medal_hope: true,
        men: ['Eduard Hallberg', 'Elian Lehto', 'Jesper Pohjolainen'],
        women: ['Silja Koskinen', 'Rosa Pohjolainen'],
        events: ['Syöksylasku', 'Super-G', 'Suurpujottelu', 'Pujottelu', 'Joukkuekilpailu'],
        stars: ['Eduard Hallberg']
    },
    'freestylehiihto': {
        name_fi: 'Freestylehiihto',
        emoji: '🎿',
        athlete_count: 4,
        medal_hope: true,
        men: ['Kuura Koivisto', 'Elias Lajunen', 'Elias Syrjä'],
        women: ['Anni Kärävä'],
        events: ['Slopestyle', 'Big Air', 'Kumparelasku', 'Hypyt', 'Halfpipe', 'Skicross'],
        stars: ['Anni Kärävä']
    },
    'kumparelasku': {
        name_fi: 'Kumparelasku',
        emoji: '🎿',
        athlete_count: 4,
        medal_hope: false,
        men: ['Akseli Ahvenainen', 'Olli Penttala', 'Severi Vierelä', 'Rasmus Karjalainen'],
        women: [],
        events: ['Kumparelasku', 'Parikumpareet'],
        stars: []
    },
    'lumilautailu': {
        name_fi: 'Lumilautailu',
        emoji: '🏂',
        athlete_count: 2,
        medal_hope: true,
        men: ['Rene Rinnekangas'],
        women: ['Eveliina Taka'],
        events: ['Big Air', 'Halfpipe', 'Slopestyle', 'Lumilautakrossi', 'Parisuurpujottelu'],
        stars: ['Rene Rinnekangas']
    },
    'taitoluistelu': {
        name_fi: 'Taitoluistelu',
        emoji: '⛸️',
        athlete_count: 3,
        medal_hope: false,
        ice_dance: ['Juulia Turkkila & Matthias Versluis'],
        women: ['Iida Karhunen'],
        events: ['Jäätanssi (9.2. & 11.2.)', 'Naisten yksinluistelu (17.2. & 19.2.)'],
        stars: ['Juulia Turkkila & Matthias Versluis'],
        note: 'Suomi ei ole mukana joukkuekilpailussa'
    },
    'jaakiekko-miehet': {
        name_fi: 'Jääkiekko - Miehet',
        emoji: '🏒',
        athlete_count: 25,
        medal_hope: true,
        is_team: true,
        previous_result: 'Olympiavoittaja 2022 🥇',
        goalies: ['Ukko-Pekka Luukkonen', 'Kevin Lankinen', 'Juuse Saros'],
        defense: ['Miro Heiskanen', 'Rasmus Ristolainen', 'Olli Määttä', 'Esa Lindell', 'Henri Jokiharju', 'Mikko Lehtonen', 'Niko Mikkola', 'Nikolas Matinpalo'],
        forwards: ['Sebastian Aho', 'Mikael Granlund', 'Roope Hintz', 'Anton Lundell', 'Eetu Luostarinen', 'Kaapo Kakko', 'Artturi Lehkonen', 'Teuvo Teräväinen', 'Eeli Tolvanen', 'Joel Armia', 'Joel Kiviranta', 'Oliver Kapanen', 'Erik Haula', 'Mikko Rantanen'],
        matches: [
            { date: 'Ke 11.2.', time: '17:40', opponent: '🇸🇰 Slovakia', group: 'B', result: '1-4' },
            { date: 'Pe 13.2.', time: '13:10', opponent: '🇸🇪 Ruotsi', group: 'B', highlight: true, result: '4-1' },
            { date: 'La 14.2.', time: '17:40', opponent: '🇮🇹 Italia', group: 'B', result: '11-0' }
        ],
        stars: ['Mikko Rantanen', 'Sebastian Aho', 'Miro Heiskanen']
    },
    'jaakiekko-naiset': {
        name_fi: 'Jääkiekko - Naiset',
        emoji: '🏒',
        athlete_count: 23,
        medal_hope: true,
        is_team: true,
        previous_result: 'Pronssimitali 2022 🥉',
        goalies: ['Sanni Ahola', 'Anni Keisala', 'Emilia Kyrkkö'],
        defense: ['Jenni Hiirikoski', 'Sini Karjalainen', 'Nelli Laitinen', 'Sanni Rantala', 'Ronja Savolainen', 'Elli Suoranta', 'Siiri Yrjölä'],
        forwards: ['Elisa Holopainen', 'Michelle Karvinen', 'Ida Kuoppala', 'Julia Liikala', 'Petra Nieminen', 'Emma Nuutinen', 'Jenniina Nylund', 'Julia Schalin', 'Susanna Tapani', 'Noora Tulus', 'Viivi Vainikka', 'Sanni Vanhanen', 'Emilia Vesa'],
        matches: [
            { date: 'La 7.2.', time: '17:40', opponent: '🇺🇸 USA', group: 'A' },
            { date: 'Su 8.2.', time: '22:10', opponent: '🇨🇿 Tshekki', group: 'A' },
            { date: 'Ti 10.2.', time: '22:10', opponent: '🇨🇭 Sveitsi', group: 'A' },
            { date: 'To 12.2.', time: '14:30', opponent: '🇨🇦 Kanada', group: 'A', note: 'Siirretty noroviruksen vuoksi' },
            { date: 'La 14.2.', time: '22:10', opponent: '🇨🇭 Sveitsi', group: 'Puolivälierä', result: '0-1', note: 'Pudottu' }
        ],
        stars: ['Jenni Hiirikoski', 'Michelle Karvinen', 'Susanna Tapani']
    }
};

// ============================================
// BROADCASTING CHANNELS
// ============================================
const broadcastChannels = {
    'yle-tv1': {
        name: 'Yle TV1',
        type: 'free_tv',
        url: 'https://areena.yle.fi/tv/suorat/yle-tv1',
        description: 'Ylen pääkanava - jääkiekko ym.',
        sports: ['jaakiekko']
    },
    'yle-tv2': {
        name: 'Yle TV2',
        type: 'free_tv',
        url: 'https://areena.yle.fi/tv/suorat/yle-tv2',
        description: 'Ylen olympiakanava - kaikki Ylen TV-lähetykset',
        sports: ['maastohiihto', 'ampumahiihto', 'alppihiihto', 'makihyppy', 'taitoluistelu', 'jaakiekko', 'yhdistetty', 'freestylehiihto', 'lumilautailu', 'avajaiset']
    },
    'yle-areena': {
        name: 'Yle Areena',
        type: 'free_stream',
        url: 'https://areena.yle.fi',
        description: 'Kaikki Ylen lähetykset + monikamerastriimit',
        sports: ['kaikki']
    },
    'hbo-max': {
        name: 'HBO Max',
        type: 'paid_stream',
        url: 'https://www.hbomax.com/fi/fi/olympics',
        description: 'Kaikki olympiasignaalit ml. harjoitukset',
        sports: ['kaikki']
    },
    'eurosport1': {
        name: 'Eurosport 1',
        type: 'paid_tv',
        url: 'https://www.eurosport.fi',
        description: 'Premium TV-kanava',
        sports: ['alppihiihto', 'maastohiihto', 'taitoluistelu']
    },
    'eurosport2': {
        name: 'Eurosport 2',
        type: 'paid_tv',
        url: 'https://www.eurosport.fi',
        description: 'Lisäkanava',
        sports: ['curling', 'kelkkailu', 'pikaluistelu']
    },
    'discovery-plus': {
        name: 'Discovery+',
        type: 'paid_stream',
        url: 'https://www.discoveryplus.com/fi',
        description: 'Eurosportin streaming',
        sports: ['kaikki']
    },
    };

// ============================================
// SCHEDULE - Full program from Yle
// All times in Finnish time (CET+1)
// ============================================
const olympicSchedule = [
    // ========== KESKIVIIKKO 4.2. ==========
    {
        date: '2026-02-04',
        day: 'Ke',
        label: 'Kilpailut alkavat',
        events: [
            { time: '20:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇸🇪–🇰🇷, 🇬🇧–🇳🇴, 🇨🇦–🇨🇿, 🇪🇪–🇨🇭', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'] }
        ]
    },
    // ========== TORSTAI 5.2. ==========
    {
        date: '2026-02-05',
        day: 'To',
        label: 'Kilpailut alkavat',
        events: [
            { time: '11:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇸🇪–🇨🇿, 🇳🇴–🇺🇸, 🇰🇷–🇮🇹', medal: false, finnish: false, broadcasts: ['hbo-max'] },
            { time: '13:10', sport: 'jaakiekko-naiset', name: '🇸🇪–🇩🇪', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76773885' },
            { time: '15:35', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇺🇸–🇨🇭, 🇳🇴–🇨🇦', medal: false, finnish: false, broadcasts: ['hbo-max'] },
            { time: '15:40', sport: 'jaakiekko-naiset', name: '🇮🇹–🇫🇷', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76773889' },
            { time: '17:40', sport: 'jaakiekko-naiset', name: '🇺🇸–🇨🇿', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76773892' },
            { time: '20:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76773895', yletv2Url: 'https://areena.yle.fi/1-76727642', matchBroadcasts: [
                { match: '🇨🇦–🇮🇹', broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
                { match: '🇨🇭–🇰🇷, 🇪🇪–🇸🇪, 🇨🇿–🇩🇪', broadcasts: ['hbo-max'] }
            ] },
            { time: '20:30', sport: 'lumilautailu', name: 'M Big Air, karsinta', detail: 'Rene Rinnekangas', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76773898' }
        ]
    },
    // ========== PERJANTAI 6.2. - AVAJAISET ==========
    {
        date: '2026-02-06',
        day: 'Pe',
        label: 'Avajaiset',
        special: true,
        events: [
            { time: '10:55', sport: 'taitoluistelu', name: 'Joukkuekilpailu, jäätanssi', detail: 'Rytmitanssi sekä parien ja naisten lyhytohjelmat', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76763095' },
            { time: '11:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891274', matchBroadcasts: [
                { match: '🇸🇪–🇬🇧', broadcasts: ['yle-areena', 'hbo-max'] },
                { match: '🇮🇹–🇨🇭, 🇺🇸–🇨🇦', broadcasts: ['hbo-max'] }
            ] },
            { time: '12:35', sport: 'taitoluistelu', name: 'Joukkuekilpailu, pariluistelu', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '13:10', sport: 'jaakiekko-naiset', name: '🇫🇷–🇯🇵', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891265' },
            { time: '14:35', sport: 'taitoluistelu', name: 'Joukkuekilpailu, N yksinluistelu', detail: 'Lyhytohjelma', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '15:35', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇨🇿–🇺🇸, 🇪🇪–🇮🇹, 🇰🇷–🇬🇧, 🇸🇪–🇳🇴', medal: false, finnish: false, broadcasts: ['hbo-max'] },
            { time: '15:40', sport: 'jaakiekko-naiset', name: '🇨🇿–🇨🇭', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891279' },
            { time: '20:30', sport: 'seremonia', name: '🎭 Avajaisseremonia', detail: 'San Siro, Milano', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yletv2Url: 'https://areena.yle.fi/1-76727513' }
        ]
    },
    // ========== LAUANTAI 7.2. - ENSIMMÄISET LOPPUKILPAILUT ==========
    {
        date: '2026-02-07',
        day: 'La',
        label: 'Ensimmäiset loppukilpailut',
        special: true,
        events: [
            { time: '11:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891282', matchBroadcasts: [
                { match: '🇬🇧–🇨🇦', broadcasts: ['yle-areena', 'hbo-max'] },
                { match: '🇨🇭–🇸🇪', broadcasts: ['hbo-max'] }
            ] },
            { time: '11:30', sport: 'freestylehiihto', name: 'N Slopestyle, karsinta', detail: 'Anni Kärävä', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891286' },
            { time: '12:30', sport: 'alppihiihto', name: 'M Syöksylasku', detail: 'Elian Lehto', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-76891289' },
            { time: '13:10', sport: 'jaakiekko-naiset', name: '🇩🇪–🇯🇵', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891292' },
            { time: '14:00', sport: 'maastohiihto', name: 'N Yhdistelmäkilpailu 20 km', detail: 'Kerttu Niskanen, Krista Pärmäkoski, Vilma Ryytty, Vilma Nissinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768176' },
            { time: '15:00', sport: 'freestylehiihto', name: 'M Slopestyle, karsinta', detail: 'Kuura Koivisto, Elias Lajunen, Elias Syrjä', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891295' },
            { time: '15:35', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891301', matchBroadcasts: [
                { match: '🇸🇪–🇮🇹', broadcasts: ['yle-areena', 'hbo-max'] },
                { match: '🇪🇪–🇳🇴, 🇨🇿–🇰🇷, 🇬🇧–🇺🇸', broadcasts: ['hbo-max'] }
            ] },
            { time: '15:40', sport: 'jaakiekko-naiset', name: '🇸🇪–🇮🇹', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891298' },
            { time: '17:00', sport: 'pikaluistelu', name: 'N 3000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891304' },
            { time: '17:00', sport: 'kelkkailu', name: 'M Yksikkö, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:40', sport: 'jaakiekko-naiset', name: '🇺🇸–🇫🇮', detail: 'A-lohko', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891307' },
            { time: '19:45', sport: 'makihyppy', name: 'N Normaalimäki', detail: 'Sofia Mattila, Minja Korhonen, Heta Hirvonen, Jenny Rautionaho', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891310' },
            { time: '20:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇰🇷–🇺🇸, 🇨🇦–🇪🇪, 🇨🇿–🇨🇭, 🇳🇴–🇮🇹', medal: false, finnish: false, broadcasts: ['hbo-max'] },
            { time: '20:30', sport: 'lumilautailu', name: 'M Big Air, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891313' },
            { time: '20:45', sport: 'taitoluistelu', name: 'Joukkuekilpailu, M yksinluistelu', detail: 'Miesten lyhytohjelma ja jäätanssin vapaatanssi', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891316' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: '🇨🇭–🇨🇦', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76891321' },
            { time: '23:05', sport: 'taitoluistelu', name: 'Joukkuekilpailu, jäätanssi', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== SUNNUNTAI 8.2. ==========
    {
        date: '2026-02-08',
        day: 'Su',
        label: '',
        events: [
            { time: '10:00', sport: 'lumilautailu', name: 'Parisuurpujottelu, karsinnat', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892651', matchBroadcasts: [
                { match: '🇳🇴–🇨🇿', broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
                { match: '🇰🇷–🇪🇪', broadcasts: ['hbo-max'] }
            ] },
            { time: '12:30', sport: 'alppihiihto', name: 'N Syöksylasku', detail: 'Rosa Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-76892654' },
            { time: '13:30', sport: 'maastohiihto', name: 'M Yhdistelmäkilpailu 20 km', detail: 'Ristomatti Hakola, Niko Anttola, Arsi Ruuskanen, Iivo Niskanen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768177' },
            { time: '14:00', sport: 'lumilautailu', name: 'Parisuurpujottelu, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892657' },
            { time: '15:05', sport: 'ampumahiihto', name: 'Sekajoukkueviesti 4x6 km', detail: 'Olli Hiidensalo, Tero Seppälä, Inka Hämäläinen, Suvi Minkkinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768441' },
            { time: '15:29', sport: 'lumilautailu', name: 'Parisuurpujottelu, N finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '15:35', sport: 'curling', name: 'Sekajoukkue, alkusarja', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892660', matchBroadcasts: [
                { match: '🇨🇦–🇸🇪', broadcasts: ['yle-areena', 'hbo-max'] },
                { match: '🇬🇧–🇨🇭, 🇺🇸–🇪🇪, 🇮🇹–🇨🇿', broadcasts: ['hbo-max'] }
            ] },
            { time: '15:39', sport: 'lumilautailu', name: 'Parisuurpujottelu, M finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '17:00', sport: 'pikaluistelu', name: 'M 5000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892665' },
            { time: '17:40', sport: 'jaakiekko-naiset', name: '🇫🇷–🇸🇪', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892671' },
            { time: '18:00', sport: 'kelkkailu', name: 'M Yksikkö, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892943' },
            { time: '20:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇮🇹–🇬🇧, 🇺🇸–🇸🇪, 🇨🇭–🇳🇴, 🇨🇦–🇰🇷', medal: false, finnish: false, broadcasts: ['hbo-max'] },
            { time: '20:30', sport: 'lumilautailu', name: 'N Big Air, karsinta', detail: 'Eveliina Taka', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892946' },
            { time: '20:30', sport: 'taitoluistelu', name: 'Joukkuekilpailu, pariluistelu', detail: 'Parien, naisten ja miesten vapaaohjelmat', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892949' },
            { time: '21:45', sport: 'taitoluistelu', name: 'Joukkuekilpailu, N yksinluistelu', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '22:10', sport: 'jaakiekko-naiset', name: '🇨🇿–🇫🇮', detail: 'A-lohko', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76892952' },
            { time: '22:55', sport: 'taitoluistelu', name: 'Joukkuekilpailu, M yksinluistelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== MAANANTAI 9.2. ==========
    {
        date: '2026-02-09',
        day: 'Ma',
        label: '',
        events: [
            { time: '11:05', sport: 'curling', name: 'Sekajoukkue, alkusarja', detail: '🇨🇭–🇨🇦, 🇮🇹–🇺🇸, 🇳🇴–🇰🇷, 🇨🇿–🇪🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008969' },
            { time: '11:30', sport: 'alppihiihto', name: 'M Joukkuekilpailu, syöksylasku', detail: 'Elian Lehto', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008972' },
            { time: '13:10', sport: 'jaakiekko-naiset', name: '🇯🇵–🇮🇹', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008975' },
            { time: '13:30', sport: 'freestylehiihto', name: 'N Slopestyle, finaali', detail: 'Anni Kärävä', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008978' },
            { time: '15:00', sport: 'alppihiihto', name: 'M Joukkuekilpailu, pujottelu', detail: 'Eduard Hallberg', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008981' },
            { time: '16:30', sport: 'curling', name: 'Sekajoukkue, välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76727655' },
            { time: '17:40', sport: 'jaakiekko-naiset', name: '🇩🇪–🇫🇷', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008986' },
            { time: '18:00', sport: 'kelkkailu', name: 'N Yksikkö, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '18:30', sport: 'pikaluistelu', name: 'N 1000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008989', yletv2Url: 'https://areena.yle.fi/1-76771055' },
            { time: '19:05', sport: 'curling', name: 'Sekajoukkue, semifinaali', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008995' },
            { time: '20:00', sport: 'makihyppy', name: 'M Normaalimäki', detail: 'Antti Aalto, Niko Kytösaho, Vilho Palosaari', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768502' },
            { time: '20:20', sport: 'taitoluistelu', name: 'Jäätanssi, rytmitanssi', detail: 'Turkkila/Versluis', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77008998' },
            { time: '20:30', sport: 'lumilautailu', name: 'N Big Air, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77009001' },
            { time: '21:40', sport: 'jaakiekko-naiset', name: '🇨🇭–🇺🇸', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77009004' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: '🇨🇦–🇨🇿', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77009007' }
        ]
    },
    // ========== TIISTAI 10.2. ==========
    {
        date: '2026-02-10',
        day: 'Ti',
        label: 'Sprinttipäivä',
        events: [
            { time: '10:15', sport: 'maastohiihto', name: 'N Sprintti (p), karsinta', detail: 'Johanna Matintalo, Jasmi Joensuu, Jasmin Kähärä, Amanda Saari', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768175' },
            { time: '10:55', sport: 'maastohiihto', name: 'M Sprintti (p), karsinta', detail: 'Lauri Vuorinen, Joni Mäki, Emil Liekari, Niilo Moilanen', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '11:30', sport: 'alppihiihto', name: 'N Joukkuekilpailu, syöksylasku', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062119' },
            { time: '11:30', sport: 'short-track', name: 'N 500 m, alkuerät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '12:08', sport: 'short-track', name: 'M 1000 m, alkuerät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '12:15', sport: 'freestylehiihto', name: 'M Kumparelasku, karsinta 1', detail: 'Akseli Ahvenainen, Olli Penttala, Rasmus Karjalainen, Severi Vierelä', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062124' },
            { time: '12:45', sport: 'maastohiihto', name: 'N Sprintti (p), erävaihe', detail: 'Jasmi Joensuu, Johanna Matintalo, Jasmin Kähärä, Amanda Saari', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768170' },
            { time: '13:15', sport: 'maastohiihto', name: 'M Sprintti (p), erävaihe', detail: 'Emil Liekari, Joni Mäki, Lauri Vuorinen', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '12:53', sport: 'short-track', name: 'Sekajoukkueviesti', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '13:10', sport: 'jaakiekko-naiset', name: '🇯🇵–🇸🇪', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062127' },
            { time: '13:30', sport: 'freestylehiihto', name: 'M Slopestyle, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062132' },
            { time: '14:09', sport: 'maastohiihto', name: 'N Sprintti (p), finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '14:21', sport: 'maastohiihto', name: 'M Sprintti (p), finaali', detail: 'Lauri Vuorinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '14:30', sport: 'ampumahiihto', name: 'M Normaalimatka 20 km', detail: 'Tero Seppälä, Olli Hiidensalo, Otto Invenius, Tuomas Harjula', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768445' },
            { time: '15:00', sport: 'alppihiihto', name: 'N Joukkuekilpailu, pujottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062135' },
            { time: '15:05', sport: 'curling', name: 'Sekajoukkue, pronssiottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062145' },
            { time: '15:15', sport: 'freestylehiihto', name: 'N Kumparelasku, karsinta 1', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:40', sport: 'jaakiekko-naiset', name: '🇮🇹–🇩🇪', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062154' },
            { time: '18:00', sport: 'kelkkailu', name: 'N Yksikkö, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062163' },
            { time: '19:05', sport: 'curling', name: 'Sekajoukkue, loppuottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062169' },
            { time: '19:30', sport: 'taitoluistelu', name: 'M Lyhytohjelma', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062178' },
            { time: '19:45', sport: 'makihyppy', name: 'Sekajoukkuekilpailu', detail: 'Suomen joukkue (Aalto, Kytösaho, Rautionaho ym.)', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768501' },
            { time: '21:10', sport: 'jaakiekko-naiset', name: '🇨🇦–🇺🇸', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062190' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: '🇫🇮–🇨🇭', detail: 'A-lohko', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062193' }
        ]
    },
    // ========== KESKIVIIKKO 11.2. - LEIJONAT ALOITTAA ==========
    {
        date: '2026-02-11',
        day: 'Ke',
        label: 'Leijonat aloittaa',
        special: true,
        events: [
            { time: '09:45', sport: 'taitoluistelu', name: 'M Lyhytohjelma (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76763071' },
            { time: '11:00', sport: 'yhdistetty', name: 'M Mäkiosuus, normaalimäki', detail: 'Ilkka Herola, Eero Hirvonen, Wille Karhumaa', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771602' },
            { time: '11:30', sport: 'lumilautailu', name: 'N Halfpipe, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '12:00', sport: 'freestylehiihto', name: 'N Kumparelasku, karsinta 2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062590' },
            { time: '12:30', sport: 'alppihiihto', name: 'M Super-G', detail: 'Elian Lehto', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77062596', yletv2Url: 'https://areena.yle.fi/1-76767812' },
            { time: '14:00', sport: 'freestylehiihto', name: 'N Kumparelasku, karsinta 2 (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771642' },
            { time: '14:45', sport: 'yhdistetty', name: 'M Normaalimäki/10 km', detail: 'Ilkka Herola, Eero Hirvonen, Wille Karhumaa', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771593' },
            { time: '15:15', sport: 'freestylehiihto', name: 'N Kumparelasku, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062602' },
            { time: '15:15', sport: 'ampumahiihto', name: 'N Normaalimatka 15 km', detail: 'Suvi Minkkinen, Venla Lehtonen, Inka Hämäläinen, Sonja Leinamo', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768440' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: '🇸🇰–🇫🇮', detail: 'B-lohko', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77062606' },
            { time: '18:00', sport: 'kelkkailu', name: 'N/M Kaksikko, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77063227' },
            { time: '19:30', sport: 'pikaluistelu', name: 'M 1000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77063269' },
            { time: '20:05', sport: 'curling', name: 'M Alkusarja', detail: '🇸🇪–🇮🇹, 🇨🇦–🇩🇪, 🇨🇿–🇺🇸, 🇨🇳–🇬🇧', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77063301' },
            { time: '20:30', sport: 'lumilautailu', name: 'M Halfpipe, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:30', sport: 'taitoluistelu', name: 'Jäätanssi, vapaatanssi', detail: 'Turkkila/Versluis', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76763089' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: '🇸🇪–🇮🇹', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77063342' }
        ]
    },
    // ========== TORSTAI 12.2. ==========
    {
        date: '2026-02-12',
        day: 'To',
        label: '',
        events: [
            { time: '10:05', sport: 'curling', name: 'N Alkusarja', detail: '🇰🇷–🇺🇸, 🇯🇵–🇸🇪, 🇮🇹–🇨🇭, 🇨🇦–🇩🇰', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067579' },
            { time: '10:30', sport: 'skeleton', name: 'M Laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:00', sport: 'freestylehiihto', name: 'M Kumparelasku, karsinta 2', detail: 'Akseli Ahvenainen, Rasmus Karjalainen, Olli Penttala, Severi Vierelä', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067582' },
            { time: '11:30', sport: 'curling', name: 'N Alkusarja (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76727658' },
            { time: '12:30', sport: 'alppihiihto', name: 'N Super-G', detail: 'Rosa Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77067585', yletv2Url: 'https://areena.yle.fi/1-76767823' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇨🇭–🇫🇷', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067588' },
            { time: '13:15', sport: 'freestylehiihto', name: 'M Kumparelasku, finaali', detail: 'Akseli Ahvenainen, Olli Penttala', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067593' },
            { time: '14:00', sport: 'maastohiihto', name: 'N 10 km (v)', detail: 'Kerttu Niskanen, Krista Pärmäkoski, Vilma Ryytty, Vilma Nissinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067596', yletv2Url: 'https://areena.yle.fi/1-76768165' },
            { time: '14:45', sport: 'lumilautailu', name: 'M Lumilautakrossi, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067601' },
            { time: '15:05', sport: 'curling', name: 'M Alkusarja', detail: '🇳🇴–🇩🇪, 🇺🇸–🇨🇭, 🇬🇧–🇸🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '15:30', sport: 'jaakiekko-naiset', name: '🇫🇮–🇨🇦', detail: 'A-lohko (siirretty 5.2. noroviruksen vuoksi)', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '16:01', sport: 'lumilautailu', name: 'M Lumilautakrossi, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:30', sport: 'pikaluistelu', name: 'N 5000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067604' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: '🇨🇿–🇨🇦', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067607' },
            { time: '19:30', sport: 'kelkkailu', name: 'Joukkuekilpailu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067752' },
            { time: '20:05', sport: 'curling', name: 'N Alkusarja', detail: '🇨🇳–🇬🇧, 🇮🇹–🇰🇷, 🇩🇰–🇯🇵, 🇸🇪–🇺🇸', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:30', sport: 'lumilautailu', name: 'N Halfpipe, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067611' },
            { time: '21:15', sport: 'short-track', name: 'N 500 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067614' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: '🇱🇻–🇺🇸', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77067617' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: '🇩🇪–🇩🇰', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '22:43', sport: 'short-track', name: 'M 1000 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== PERJANTAI 13.2. - SUOMI vs RUOTSI ==========
    {
        date: '2026-02-13',
        day: 'Pe',
        label: '🇫🇮 vs 🇸🇪',
        special: true,
        events: [
            { time: '10:05', sport: 'curling', name: 'M Alkusarja', detail: '🇨🇦–🇺🇸, 🇬🇧–🇮🇹, 🇨🇳–🇳🇴, 🇨🇭–🇨🇿', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76727646' },
            { time: '11:00', sport: 'lumilautailu', name: 'N Lumilautakrossi, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '12:45', sport: 'maastohiihto', name: 'M 10 km (v)', detail: 'Niko Anttola, Emil Liekari, Joni Mäki, Arsi Ruuskanen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768166' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇮🇹–🇸🇰', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070054' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇫🇮–🇸🇪', detail: 'B-lohko', medal: false, finnish: true, broadcasts: ['yle-tv1', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070049', yletv1Url: 'https://areena.yle.fi/1-76771695' },
            { time: '14:30', sport: 'lumilautailu', name: 'N Lumilautakrossi, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070179' },
            { time: '15:00', sport: 'ampumahiihto', name: 'M Pikamatka 10 km', detail: 'Tero Seppälä, Olli Hiidensalo, Otto Invenius, Tuomas Harjula', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768452' },
            { time: '15:05', sport: 'curling', name: 'N Alkusarja', detail: '🇩🇰–🇸🇪, 🇨🇳–🇨🇭, 🇺🇸–🇨🇦, 🇬🇧–🇰🇷', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '15:46', sport: 'lumilautailu', name: 'N Lumilautakrossi, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:00', sport: 'pikaluistelu', name: 'M 10000 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070260' },
            { time: '17:00', sport: 'skeleton', name: 'N Laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:40', sport: 'jaakiekko-miehet', name: '🇫🇷–🇨🇿', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070266' },
            { time: '17:40', sport: 'jaakiekko-naiset', name: 'Puolivälierä 1', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070513', yletv2Url: 'https://areena.yle.fi/1-76760266' },
            { time: '20:15', sport: 'taitoluistelu', name: 'M Vapaaohjelma', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-77070594' },
            { time: '20:05', sport: 'curling', name: 'M Alkusarja', detail: '🇨🇭–🇨🇳, 🇨🇿–🇳🇴, 🇩🇪–🇮🇹, 🇨🇦–🇸🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:30', sport: 'lumilautailu', name: 'M Halfpipe, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070698' },
            { time: '20:30', sport: 'skeleton', name: 'M Laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77070892' },
            { time: '21:45', sport: 'jaakiekko-miehet', name: '🇨🇦–🇨🇭', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-tv1', 'yle-areena', 'hbo-max'], yletv1Url: 'https://areena.yle.fi/1-77071287' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: 'Puolivälierä 2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77071606' }
        ]
    },
    // ========== LAUANTAI 14.2. ==========
    {
        date: '2026-02-14',
        day: 'La',
        label: '',
        events: [
            { time: '10:05', sport: 'curling', name: 'N Alkusarja', detail: '🇮🇹–🇨🇳, 🇬🇧–🇨🇦, 🇨🇭–🇯🇵', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073073', yletv2Url: 'https://areena.yle.fi/1-76727656' },
            { time: '11:00', sport: 'alppihiihto', name: 'M Suurpujottelu', detail: 'Eduard Hallberg, Jesper Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77073086', yletv2Url: 'https://areena.yle.fi/1-76767824' },
            { time: '11:30', sport: 'freestylehiihto', name: 'N Parikumpareet, pudotusvaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073097' },
            { time: '12:46', sport: 'freestylehiihto', name: 'N Parikumpareet, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '13:00', sport: 'maastohiihto', name: 'N Viesti 4x7,5 km', detail: 'Johanna Matintalo, Kerttu Niskanen, Vilma Ryytty, Jasmi Joensuu', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768178' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇸🇪–🇸🇰', detail: 'B-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073124' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇩🇪–🇱🇻', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073130' },
            { time: '14:30', sport: 'alppihiihto', name: 'M Suurpujottelu, 2. kierros', detail: 'Eduard Hallberg, Jesper Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073168', yletv2Url: 'https://areena.yle.fi/1-76767822' },
            { time: '15:05', sport: 'curling', name: 'M Alkusarja', detail: '🇨🇿–🇬🇧, 🇸🇪–🇨🇳, 🇨🇭–🇨🇦, 🇩🇪–🇺🇸', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073191' },
            { time: '15:45', sport: 'ampumahiihto', name: 'N Pikamatka 7,5 km', detail: 'Inka Hämäläinen, Venla Lehtonen, Sonja Leinamo, Suvi Minkkinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768447' },
            { time: '16:00', sport: 'pikaluistelu', name: 'N Joukkuetakaa-ajo, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073220' },
            { time: '16:40', sport: 'jaakiekko-naiset', name: 'Puolivälierä: 🇨🇦–🇩🇪', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073249' },
            { time: '17:00', sport: 'pikaluistelu', name: 'M 500 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '17:40', sport: 'jaakiekko-miehet', name: '🇫🇮–🇮🇹', detail: 'B-lohko', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073233' },
            { time: '18:00', sport: 'skeleton', name: 'N Laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073271' },
            { time: '19:45', sport: 'makihyppy', name: 'M Suurmäki', detail: 'Antti Aalto, Niko Kytösaho, Vilho Palosaari', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-77073329' },
            { time: '20:05', sport: 'curling', name: 'N Alkusarja', detail: '🇨🇦–🇨🇭, 🇯🇵–🇺🇸, 🇰🇷–🇩🇰, 🇮🇹–🇸🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:15', sport: 'short-track', name: 'M 1500 m, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073339' },
            { time: '20:30', sport: 'freestylehiihto', name: 'N Big Air, karsinta', detail: 'Anni Kärävä', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073335' },
            { time: '21:10', sport: 'jaakiekko-miehet', name: '🇺🇸–🇩🇰', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073344' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: 'Puolivälierä: 🇫🇮–🇨🇭', detail: '', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77073347' },
            { time: '22:34', sport: 'short-track', name: 'M 1500 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== SUNNUNTAI 15.2. ==========
    {
        date: '2026-02-15',
        day: 'Su',
        label: '',
        events: [
            { time: '10:05', sport: 'curling', name: 'M Alkusarja', detail: '🇺🇸–🇸🇪, 🇩🇪–🇬🇧, 🇳🇴–🇮🇹', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074290' },
            { time: '11:00', sport: 'alppihiihto', name: 'N Suurpujottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77074293', yletv2Url: 'https://areena.yle.fi/1-76767821' },
            { time: '11:00', sport: 'rattikelkkailu', name: 'N Yksikkö, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:15', sport: 'lumilautailu', name: 'M Slopestyle, karsinta', detail: 'Rene Rinnekangas', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:30', sport: 'freestylehiihto', name: 'M Parikumpareet, pudotusvaihe', detail: 'Akseli Ahvenainen, Olli Penttala, Rasmus Karjalainen, Severi Vierelä', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074296' },
            { time: '12:15', sport: 'ampumahiihto', name: 'M Takaa-ajo 12,5 km', detail: 'Olli Hiidensalo, Tero Seppälä, Tuomas Harjula, Otto Invenius', medal: true, finnish: true, broadcasts: ['yle-tv1', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-76768443' },
            { time: '12:47', sport: 'freestylehiihto', name: 'M Parikumpareet, finaali', detail: 'Akseli Ahvenainen, Olli Penttala, Rasmus Karjalainen, Severi Vierelä', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '13:00', sport: 'maastohiihto', name: 'M Viesti 4x7,5 km', detail: 'Lauri Vuorinen, Iivo Niskanen, Arsi Ruuskanen, Niko Anttola', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768169' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: '🇨🇭–🇨🇿', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074299' },
            { time: '14:30', sport: 'alppihiihto', name: 'N Suurpujottelu, 2. kierros', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074302', yletv2Url: 'https://areena.yle.fi/1-76767833' },
            { time: '14:45', sport: 'lumilautailu', name: 'Lumilautakrossi, sekajoukkue', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074305' },
            { time: '15:15', sport: 'lumilautailu', name: 'N Slopestyle, karsinta', detail: 'Eveliina Taka', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '15:05', sport: 'curling', name: 'N Alkusarja', detail: '🇯🇵–🇰🇷, 🇩🇰–🇮🇹, 🇬🇧–🇸🇪, 🇺🇸–🇨🇳', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074310' },
            { time: '15:45', sport: 'ampumahiihto', name: 'N Takaa-ajo 10 km', detail: 'Suvi Minkkinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768438' },
            { time: '17:00', sport: 'pikaluistelu', name: 'M Joukkuetakaa-ajo, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074313' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: '🇨🇦–🇫🇷', detail: 'A-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074316', yletv2Url: 'https://areena.yle.fi/1-76771697' },
            { time: '18:03', sport: 'pikaluistelu', name: 'N 500 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '19:00', sport: 'skeleton', name: 'Sekajoukkuekilpailu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074321' },
            { time: '19:45', sport: 'makihyppy', name: 'N Suurmäki', detail: 'Heta Hirvonen, Minja Korhonen, Sofia Mattila, Jenny Rautionaho', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074324' },
            { time: '20:05', sport: 'curling', name: 'M Alkusarja', detail: '🇨🇳–🇨🇦, 🇳🇴–🇺🇸, 🇮🇹–🇨🇿, 🇬🇧–🇨🇭', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:10', sport: 'jaakiekko-miehet', name: '🇩🇰–🇱🇻', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074327' },
            { time: '20:30', sport: 'freestylehiihto', name: 'M Big Air, karsinta', detail: 'Kuura Koivisto, Elias Lajunen, Elias Syrjä', medal: false, finnish: true, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074330' },
            { time: '20:45', sport: 'taitoluistelu', name: 'Pariluistelu, lyhytohjelma', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074333' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: '🇺🇸–🇩🇪', detail: 'C-lohko', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074336' }
        ]
    },
    // ========== MAANANTAI 16.2. - PUJOTTELU ==========
    {
        date: '2026-02-16',
        day: 'Ma',
        label: 'Hallbergin päivä',
        special: true,
        events: [
            { time: '10:05', sport: 'curling', name: 'N Alkusarja', detail: '🇸🇪–🇨🇭, 🇨🇳–🇨🇦, 🇩🇰–🇬🇧', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074744' },
            { time: '11:00', sport: 'alppihiihto', name: 'M Pujottelu', detail: 'Eduard Hallberg, Jesper Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77074747', yletv2Url: 'https://areena.yle.fi/1-76767827' },
            { time: '11:00', sport: 'rattikelkkailu', name: 'M Kaksikko, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:30', sport: 'lumilautailu', name: 'N Slopestyle, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074750' },
            { time: '12:00', sport: 'short-track', name: 'N 1000 m, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074753' },
            { time: '13:04', sport: 'short-track', name: 'M 5000 m viesti, välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771054' },
            { time: '13:42', sport: 'short-track', name: 'N 1000 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '14:30', sport: 'alppihiihto', name: 'M Pujottelu, 2. kierros', detail: 'Eduard Hallberg, Jesper Pohjolainen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074781', yletv2Url: 'https://areena.yle.fi/1-76767814' },
            { time: '15:00', sport: 'lumilautailu', name: 'M Slopestyle, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074784' },
            { time: '15:05', sport: 'curling', name: 'M Alkusarja', detail: '🇬🇧–🇳🇴, 🇨🇿–🇨🇦, 🇸🇪–🇩🇪, 🇮🇹–🇨🇳', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074787' },
            { time: '17:40', sport: 'jaakiekko-naiset', name: 'Välierä: 🇺🇸–🇸🇪', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074790' },
            { time: '20:00', sport: 'makihyppy', name: 'M Superjoukkue', detail: 'Antti Aalto, Niko Kytösaho', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074793' },
            { time: '20:00', sport: 'rattikelkkailu', name: 'N Yksikkö, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074801' },
            { time: '20:05', sport: 'curling', name: 'N Alkusarja', detail: '🇺🇸–🇮🇹, 🇰🇷–🇨🇳, 🇨🇭–🇬🇧, 🇯🇵–🇨🇦', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:30', sport: 'freestylehiihto', name: 'N Big Air, finaali', detail: 'Anni Kärävä', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074808', yletv2Url: 'https://areena.yle.fi/1-76767729' },
            { time: '21:00', sport: 'taitoluistelu', name: 'Pariluistelu, vapaaohjelma', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074814' },
            { time: '22:10', sport: 'jaakiekko-naiset', name: 'Välierä: 🇨🇦–🇨🇭', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77074818' }
        ]
    },
    // ========== TIISTAI 17.2. ==========
    {
        date: '2026-02-17',
        day: 'Ti',
        label: '',
        events: [
            { time: '09:55', sport: 'taitoluistelu', name: 'Pariluistelu, vapaaohjelma (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76763070' },
            { time: '10:05', sport: 'curling', name: 'M Alkusarja', detail: '🇨🇭–🇸🇪, 🇺🇸–🇨🇳, 🇨🇿–🇩🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075216' },
            { time: '11:00', sport: 'yhdistetty', name: 'M Mäkiosuus, suurmäki', detail: 'Ilkka Herola, Eero Hirvonen, Wille Karhumaa', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771603' },
            { time: '11:45', sport: 'freestylehiihto', name: 'N Hypyt, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '13:10', sport: 'jaakiekko-miehet', name: 'Pudotuspeli 1', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075224' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: 'Pudotuspeli 2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075227' },
            { time: '14:00', sport: 'lumilautailu', name: 'N Slopestyle, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76762050' },
            { time: '14:30', sport: 'freestylehiihto', name: 'M Hypyt, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '14:45', sport: 'yhdistetty', name: 'M Suurmäki/10 km', detail: 'Ilkka Herola, Eero Hirvonen, Wille Karhumaa', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771595' },
            { time: '15:05', sport: 'curling', name: 'N Alkusarja', detail: '🇸🇪–🇨🇦, 🇮🇹–🇯🇵, 🇩🇰–🇺🇸, 🇰🇷–🇨🇭', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075233' },
            { time: '15:30', sport: 'pikaluistelu', name: 'M/N Joukkuetakaa-ajo, finaalit', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075236' },
            { time: '15:30', sport: 'ampumahiihto', name: 'M Viesti 4x7,5 km', detail: 'Tero Seppälä, Olli Hiidensalo, Otto Invenius, Tuomas Harjula', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768439' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: 'Pudotuspeli 3', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075241' },
            { time: '19:45', sport: 'taitoluistelu', name: 'N Lyhytohjelma', detail: 'Iida Karhunen', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075245', yletv2Url: 'https://areena.yle.fi/1-76763075' },
            { time: '20:00', sport: 'rattikelkkailu', name: 'M Kaksikko, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075249' },
            { time: '20:05', sport: 'curling', name: 'M Alkusarja', detail: '🇩🇪–🇨🇭, 🇺🇸–🇮🇹, 🇨🇦–🇬🇧, 🇸🇪–🇳🇴', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:30', sport: 'freestylehiihto', name: 'M Big Air, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075254' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: 'Pudotuspeli 4', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075259' }
        ]
    },
    // ========== KESKIVIIKKO 18.2. - PUOLIVÄLIERÄT ==========
    {
        date: '2026-02-18',
        day: 'Ke',
        label: 'Leijonien kohtalonpäivä',
        special: true,
        events: [
            { time: '10:05', sport: 'curling', name: 'N Alkusarja', detail: '🇨🇳–🇩🇰, 🇺🇸–🇬🇧, 🇸🇪–🇰🇷', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '10:45', sport: 'maastohiihto', name: 'N Parisprintti (v), karsinta', detail: 'Suomen naiset', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768181' },
            { time: '11:00', sport: 'alppihiihto', name: 'N Pujottelu', detail: 'Rosa Pohjolainen, Silja Koskinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max', 'eurosport1'], yleareenanUrl: 'https://areena.yle.fi/1-77075262', yletv2Url: 'https://areena.yle.fi/1-76767835' },
            { time: '11:15', sport: 'maastohiihto', name: 'M Parisprintti (v), karsinta', detail: 'Suomen miehet', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '12:30', sport: 'freestylehiihto', name: 'N Hypyt, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075265' },
            { time: '12:45', sport: 'maastohiihto', name: 'N Parisprintti (v), finaali', detail: 'Suomen naiset?', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768179' },
            { time: '13:10', sport: 'jaakiekko-miehet', name: 'Puolivälierä 1', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075268' },
            { time: '13:15', sport: 'maastohiihto', name: 'M Parisprintti (v), finaali', detail: 'Suomen miehet?', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] },
            { time: '13:30', sport: 'lumilautailu', name: 'M Slopestyle, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075271', yletv2Url: 'https://areena.yle.fi/1-76762069' },
            { time: '14:30', sport: 'alppihiihto', name: 'N Pujottelu, 2. kierros', detail: 'Rosa Pohjolainen, Silja Koskinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075274', yletv2Url: 'https://areena.yle.fi/1-76767829' },
            { time: '15:05', sport: 'curling', name: 'M Alkusarja', detail: '🇮🇹–🇨🇦, 🇨🇳–🇨🇿, 🇳🇴–🇨🇭, 🇺🇸–🇬🇧', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075278' },
            { time: '15:45', sport: 'ampumahiihto', name: 'N Viesti 4x6 km', detail: 'Inka Hämäläinen, Venla Lehtonen, Sonja Leinamo, Suvi Minkkinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768444' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: 'Puolivälierä 2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075285' },
            { time: '19:10', sport: 'jaakiekko-miehet', name: 'Puolivälierä 3', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075288' },
            { time: '20:05', sport: 'curling', name: 'N Alkusarja', detail: '🇬🇧–🇯🇵, 🇨🇭–🇩🇰, 🇨🇦–🇮🇹, 🇨🇳–🇸🇪', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075292' },
            { time: '21:15', sport: 'short-track', name: 'M 500 m, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075295' },
            { time: '21:59', sport: 'short-track', name: 'N 3000 m viesti, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '22:10', sport: 'jaakiekko-miehet', name: 'Puolivälierä 4', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075298' },
            { time: '22:29', sport: 'short-track', name: 'M 500 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== TORSTAI 19.2. - NAISTEN LOPPUKILPAILUT ==========
    {
        date: '2026-02-19',
        day: 'To',
        label: 'Naisten loppukilpailut',
        special: true,
        events: [
            { time: '10:05', sport: 'curling', name: 'M Alkusarja', detail: '🇸🇪–🇨🇿, 🇮🇹–🇨🇭, 🇨🇳–🇩🇪, 🇳🇴–🇨🇦', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '10:50', sport: 'vuorihiihto', name: 'N/M Sprintti, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:00', sport: 'yhdistetty', name: 'M Joukkuekilpailu, mäkiosuus', detail: '', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771601' },
            { time: '11:30', sport: 'freestylehiihto', name: 'M Halfpipe, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075331', yletv2Url: 'https://areena.yle.fi/1-76767739' },
            { time: '12:30', sport: 'freestylehiihto', name: 'M Hypyt, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075334' },
            { time: '13:55', sport: 'vuorihiihto', name: 'N/M Sprintti, välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075337' },
            { time: '14:55', sport: 'vuorihiihto', name: 'N/M Sprintti, finaalit', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '15:00', sport: 'yhdistetty', name: 'M Joukkuekilpailu, hiihto', detail: '', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771598' },
            { time: '15:05', sport: 'curling', name: 'N Alkusarja', detail: '🇨🇭–🇺🇸, 🇨🇦–🇰🇷, 🇯🇵–🇨🇳, 🇬🇧–🇮🇹', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '15:40', sport: 'jaakiekko-naiset', name: 'Pronssiottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075344' },
            { time: '17:30', sport: 'pikaluistelu', name: 'M 1500 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075348' },
            { time: '19:00', sport: 'vuorihiihto', name: 'N/M Sprintti (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771718' },
            { time: '20:00', sport: 'taitoluistelu', name: 'N Vapaaohjelma', detail: 'Iida Karhunen', medal: true, finnish: true, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075351' },
            { time: '20:05', sport: 'curling', name: 'M Välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075381' },
            { time: '20:10', sport: 'jaakiekko-naiset', name: 'Loppuottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075384' },
            { time: '20:30', sport: 'freestylehiihto', name: 'N Halfpipe, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== PERJANTAI 20.2. ==========
    {
        date: '2026-02-20',
        day: 'Pe',
        label: '',
        events: [
            { time: '11:00', sport: 'freestylehiihto', name: 'N Skicross, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '13:00', sport: 'freestylehiihto', name: 'N Skicross, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '14:15', sport: 'freestylehiihto', name: 'N Skicross, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771651' },
            { time: '15:05', sport: 'curling', name: 'N Välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075509' },
            { time: '15:15', sport: 'ampumahiihto', name: 'M Yhteislähtö 15 km', detail: 'Suomen miehet', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768437' },
            { time: '17:30', sport: 'pikaluistelu', name: 'N 1500 m', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075514' },
            { time: '17:40', sport: 'jaakiekko-miehet', name: 'Välierä 1', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075519' },
            { time: '19:00', sport: 'rattikelkkailu', name: 'N Kaksikko, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '20:05', sport: 'curling', name: 'M Pronssiottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075522' },
            { time: '20:30', sport: 'freestylehiihto', name: 'M Halfpipe, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075531', yletv2Url: 'https://areena.yle.fi/1-76767730' },
            { time: '21:15', sport: 'short-track', name: 'N 1500 m, puolivälierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075534' },
            { time: '22:10', sport: 'jaakiekko-miehet', name: 'Välierä 2', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075537', yletv2Url: 'https://areena.yle.fi/1-76771696' },
            { time: '22:29', sport: 'short-track', name: 'M 5000 m viesti, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '23:03', sport: 'short-track', name: 'N 1500 m, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] }
        ]
    },
    // ========== LAUANTAI 21.2. ==========
    {
        date: '2026-02-21',
        day: 'La',
        label: 'Iivo Niskasen päivä',
        special: true,
        events: [
            { time: '11:00', sport: 'freestylehiihto', name: 'M Skicross, karsinta', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:00', sport: 'rattikelkkailu', name: 'M Nelikko, laskut 1-2', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '11:45', sport: 'freestylehiihto', name: 'Hypyt, sekajoukkue, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075580' },
            { time: '12:00', sport: 'maastohiihto', name: 'M 50 km (p)', detail: 'Iivo Niskanen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768171' },
            { time: '13:00', sport: 'freestylehiihto', name: 'M Skicross, erävaihe', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075588' },
            { time: '14:15', sport: 'freestylehiihto', name: 'M Skicross, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '14:30', sport: 'vuorihiihto', name: 'Sekaviesti', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075591' },
            { time: '15:05', sport: 'curling', name: 'N Pronssiottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075594' },
            { time: '15:15', sport: 'ampumahiihto', name: 'N Yhteislähtö 12,5 km', detail: 'Suvi Minkkinen', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768446' },
            { time: '16:00', sport: 'pikaluistelu', name: 'M/N Yhteislähtö, välierät', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075598' },
            { time: '17:40', sport: 'pikaluistelu', name: 'M Yhteislähtö, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '18:15', sport: 'pikaluistelu', name: 'N Yhteislähtö, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'] },
            { time: '19:00', sport: 'pikaluistelu', name: 'N/M Yhteislähtö (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76771045' },
            { time: '20:00', sport: 'rattikelkkailu', name: 'N Kaksikko, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075605' },
            { time: '20:05', sport: 'curling', name: 'M Loppuottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075608' },
            { time: '20:30', sport: 'freestylehiihto', name: 'N Halfpipe, finaali', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075611' },
            { time: '21:00', sport: 'taitoluistelu', name: 'Gaala', detail: '', medal: false, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075620' },
            { time: '21:40', sport: 'jaakiekko-miehet', name: 'Pronssiottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075625' }
        ]
    },
    // ========== SUNNUNTAI 22.2. - PÄÄTTÄJÄISET ==========
    {
        date: '2026-02-22',
        day: 'Su',
        label: 'Päättäjäiset',
        special: true,
        events: [
            { time: '11:00', sport: 'maastohiihto', name: 'N 50 km (p)', detail: 'Suomen naiset', medal: true, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76768167' },
            { time: '11:00', sport: 'rattikelkkailu', name: 'M Nelikko, laskut 3-4', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075635' },
            { time: '12:05', sport: 'curling', name: 'N Loppuottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075638' },
            { time: '15:10', sport: 'jaakiekko-miehet', name: 'Loppuottelu', detail: '', medal: true, finnish: false, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'], yleareenanUrl: 'https://areena.yle.fi/1-77075684', yletv2Url: 'https://areena.yle.fi/1-76771709' },
            { time: '19:00', sport: 'curling', name: 'N Loppuottelu (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76727652' },
            { time: '20:00', sport: 'taitoluistelu', name: 'Gaala (kooste)', detail: '', medal: false, finnish: false, broadcasts: ['yle-tv2', 'hbo-max'], yletv2Url: 'https://areena.yle.fi/1-76763083' },
            { time: '21:00', sport: 'seremonia', name: 'Päättäjäisseremonia', detail: 'Verona Arena', medal: false, finnish: true, broadcasts: ['yle-tv2', 'yle-areena', 'hbo-max'] }
        ]
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { finnishAthletes, broadcastChannels, olympicSchedule };
}
