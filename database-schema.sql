-- ============================================
-- Milano Cortina 2026 - Supabase Database Schema
-- ============================================

-- Enable RLS (Row Level Security)
-- You'll configure policies in Supabase dashboard

-- ============================================
-- SPORTS TABLE
-- ============================================
CREATE TABLE sports (
    id TEXT PRIMARY KEY,
    name_fi TEXT NOT NULL,
    name_en TEXT NOT NULL,
    emoji TEXT,
    has_finnish_athletes BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sports
INSERT INTO sports (id, name_fi, name_en, emoji, has_finnish_athletes) VALUES
('alpine', 'Alppihiihto', 'Alpine Skiing', '⛷️', true),
('biathlon', 'Ampumahiihto', 'Biathlon', '🎿', true),
('bobsled', 'Kelkkailu', 'Bobsled', '🛷', false),
('cross-country', 'Maastohiihto', 'Cross-Country Skiing', '⛷️', true),
('curling', 'Curling', 'Curling', '🥌', false),
('figure-skating', 'Taitoluistelu', 'Figure Skating', '⛸️', false),
('freestyle', 'Freestylehiihto', 'Freestyle Skiing', '🎿', false),
('ice-hockey', 'Jääkiekko', 'Ice Hockey', '🏒', true),
('luge', 'Reki', 'Luge', '🛷', false),
('nordic-combined', 'Yhdistetty', 'Nordic Combined', '🎿', false),
('short-track', 'Pikaluistelu lyhytrata', 'Short Track', '⛸️', false),
('skeleton', 'Skeleton', 'Skeleton', '💀', false),
('ski-jumping', 'Mäkihyppy', 'Ski Jumping', '🎿', false),
('ski-mountaineering', 'Vuorihiihto', 'Ski Mountaineering', '🏔️', false),
('snowboard', 'Lumilautailu', 'Snowboard', '🏂', false),
('speed-skating', 'Pikaluistelu', 'Speed Skating', '⛸️', false),
('ceremony', 'Seremonia', 'Ceremony', '🎭', true);

-- ============================================
-- BROADCAST CHANNELS TABLE
-- ============================================
CREATE TABLE broadcast_channels (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('free_tv', 'free_stream', 'paid_stream', 'paid_tv')),
    url TEXT,
    logo_url TEXT,
    description_fi TEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert Finnish broadcast channels
INSERT INTO broadcast_channels (id, name, type, url, description_fi, is_primary) VALUES
('yle-tv1', 'Yle TV1', 'free_tv', 'https://areena.yle.fi/tv/suorat/yle-tv1', 'Pääkanava, suomalaisurheilijoihin keskittyvät lähetykset', true),
('yle-tv2', 'Yle TV2', 'free_tv', 'https://areena.yle.fi/tv/suorat/yle-tv2', 'Toinen kanava rinnakkaislähetyksille', true),
('yle-areena', 'Yle Areena', 'free_stream', 'https://areena.yle.fi', 'Ilmainen streaming, kaikki Ylen lähetykset', true),
('hbo-max', 'HBO Max', 'paid_stream', 'https://www.hbomax.com/fi/fi', 'Kaikki 116 tapahtumaa suorana', false),
('eurosport1', 'Eurosport 1', 'paid_tv', 'https://www.eurosport.fi', 'Premium TV-kanava', false),
('eurosport2', 'Eurosport 2', 'paid_tv', 'https://www.eurosport.fi', 'Lisäkanava', false),
('discovery-plus', 'Discovery+', 'paid_stream', 'https://www.discoveryplus.com/fi', 'Maksullinen streaming', false),
('tv5', 'TV5', 'free_tv', 'https://www.tv5.fi', 'Valikoidut tapahtumat', false);

-- ============================================
-- VENUES TABLE
-- ============================================
CREATE TABLE venues (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    region TEXT,
    sports TEXT[], -- Array of sport IDs
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO venues (id, name, city, region, sports) VALUES
('milano-ice-arena', 'Milano Ice Skating Arena', 'Milano', 'Lombardia', ARRAY['figure-skating', 'short-track']),
('milano-speed-skating', 'Milano Speed Skating Stadium', 'Milano', 'Lombardia', ARRAY['speed-skating']),
('milano-santagiulia', 'Milano Santagiulia Ice Hockey Arena', 'Milano', 'Lombardia', ARRAY['ice-hockey']),
('milano-rho', 'Milano Rho Ice Hockey Arena', 'Milano', 'Lombardia', ARRAY['ice-hockey']),
('san-siro', 'San Siro Olympic Stadium', 'Milano', 'Lombardia', ARRAY['ceremony']),
('cortina-sliding', 'Cortina Sliding Centre', 'Cortina d''Ampezzo', 'Veneto', ARRAY['bobsled', 'luge', 'skeleton']),
('cortina-curling', 'Cortina Curling Olympic Stadium', 'Cortina d''Ampezzo', 'Veneto', ARRAY['curling']),
('tofane', 'Tofane Alpine Skiing Centre', 'Cortina d''Ampezzo', 'Veneto', ARRAY['alpine']),
('anterselva', 'Anterselva Biathlon Arena', 'Anterselva', 'Trentino-Alto Adige', ARRAY['biathlon']),
('stelvio', 'Stelvio Ski Centre', 'Bormio', 'Lombardia', ARRAY['alpine']),
('livigno-snow', 'Livigno Snow Park', 'Livigno', 'Lombardia', ARRAY['freestyle', 'snowboard']),
('livigno-aerials', 'Livigno Aerials & Moguls Park', 'Livigno', 'Lombardia', ARRAY['freestyle']),
('tesero', 'Tesero Cross-Country Skiing Stadium', 'Tesero', 'Trentino-Alto Adige', ARRAY['cross-country']),
('predazzo', 'Predazzo Ski Jumping Stadium', 'Predazzo', 'Trentino-Alto Adige', ARRAY['ski-jumping', 'nordic-combined']),
('verona', 'Verona Olympic Arena', 'Verona', 'Veneto', ARRAY['ceremony']);

-- ============================================
-- EVENTS TABLE
-- ============================================
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    sport_id TEXT REFERENCES sports(id),
    name_fi TEXT NOT NULL,
    name_en TEXT,
    venue_id TEXT REFERENCES venues(id),
    is_medal_event BOOLEAN DEFAULT FALSE,
    has_finnish_athletes BOOLEAN DEFAULT FALSE,
    finnish_matchup TEXT, -- e.g., "Suomi vs Ruotsi"
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'finished', 'postponed', 'cancelled')),
    result_fi TEXT, -- Finnish result if applicable
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for common queries
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_events_sport ON events(sport_id);
CREATE INDEX idx_events_finnish ON events(has_finnish_athletes);

-- ============================================
-- EVENT BROADCASTS TABLE (many-to-many)
-- ============================================
CREATE TABLE event_broadcasts (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    channel_id TEXT REFERENCES broadcast_channels(id),
    is_live BOOLEAN DEFAULT TRUE,
    notes TEXT, -- e.g., "Kooste", "Highlights"
    UNIQUE(event_id, channel_id)
);

-- ============================================
-- ATHLETES TABLE
-- ============================================
CREATE TABLE athletes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    sport_id TEXT REFERENCES sports(id),
    team TEXT, -- Current club/team
    position TEXT, -- e.g., "Maalivahti", "Puolustaja"
    jersey_number TEXT,
    is_captain BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE, -- Star player
    bio_fi TEXT,
    olympic_experience TEXT, -- e.g., "5. olympialaiset"
    achievements TEXT[], -- Array of achievements
    photo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TEAMS TABLE (for team sports)
-- ============================================
CREATE TABLE teams (
    id TEXT PRIMARY KEY,
    name_fi TEXT NOT NULL,
    sport_id TEXT REFERENCES sports(id),
    gender TEXT CHECK (gender IN ('men', 'women', 'mixed')),
    group_name TEXT, -- e.g., "Lohko B"
    previous_result TEXT, -- e.g., "Olympiavoittaja 2022"
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO teams (id, name_fi, sport_id, gender, group_name, previous_result) VALUES
('finland-hockey-men', 'Jääkiekko - Miehet', 'ice-hockey', 'men', 'Lohko B', 'Olympiavoittaja 2022 🥇'),
('finland-hockey-women', 'Jääkiekko - Naiset', 'ice-hockey', 'women', NULL, 'Pronssimitali 2022 🥉');

-- ============================================
-- TEAM ATHLETES (many-to-many)
-- ============================================
CREATE TABLE team_athletes (
    team_id TEXT REFERENCES teams(id),
    athlete_id INTEGER REFERENCES athletes(id),
    PRIMARY KEY (team_id, athlete_id)
);

-- ============================================
-- SAMPLE DATA: Finnish Ice Hockey Men's Team
-- ============================================

-- Goalkeepers
INSERT INTO athletes (name, sport_id, team, position, jersey_number, is_featured) VALUES
('Juuse Saros', 'ice-hockey', 'Nashville Predators', 'Maalivahti', '74', true),
('Ukko-Pekka Luukkonen', 'ice-hockey', 'Buffalo Sabres', 'Maalivahti', '1', false),
('Kevin Lankinen', 'ice-hockey', 'Vancouver Canucks', 'Maalivahti', '32', false);

-- Defensemen
INSERT INTO athletes (name, sport_id, team, position, jersey_number, is_featured) VALUES
('Miro Heiskanen', 'ice-hockey', 'Dallas Stars', 'Puolustaja', '4', true),
('Esa Lindell', 'ice-hockey', 'Dallas Stars', 'Puolustaja', '23', false),
('Rasmus Ristolainen', 'ice-hockey', 'Philadelphia Flyers', 'Puolustaja', '55', false),
('Olli Määttä', 'ice-hockey', 'Utah Mammoth', 'Puolustaja', '3', false),
('Henri Jokiharju', 'ice-hockey', 'Boston Bruins', 'Puolustaja', '5', false),
('Niko Mikkola', 'ice-hockey', 'Florida Panthers', 'Puolustaja', '77', false),
('Mikko Lehtonen', 'ice-hockey', 'ZSC Lions', 'Puolustaja', '44', false),
('Nikolas Matinpalo', 'ice-hockey', 'Ottawa Senators', 'Puolustaja', '28', false);

-- Forwards
INSERT INTO athletes (name, sport_id, team, position, jersey_number, is_captain, is_featured) VALUES
('Sebastian Aho', 'ice-hockey', 'Carolina Hurricanes', 'Hyökkääjä', '20', true, true),
('Mikael Granlund', 'ice-hockey', 'Anaheim Ducks', 'Hyökkääjä', '64', false, false),
('Roope Hintz', 'ice-hockey', 'Dallas Stars', 'Hyökkääjä', '24', false, true),
('Erik Haula', 'ice-hockey', 'Nashville Predators', 'Hyökkääjä', '56', false, false),
('Joel Armia', 'ice-hockey', 'Los Angeles Kings', 'Hyökkääjä', '40', false, false),
('Eeli Tolvanen', 'ice-hockey', 'Seattle Kraken', 'Hyökkääjä', '28', false, false),
('Oliver Kapanen', 'ice-hockey', 'Montreal Canadiens', 'Hyökkääjä', '91', false, false),
('Joel Kiviranta', 'ice-hockey', 'Colorado Avalanche', 'Hyökkääjä', '25', false, false);

-- ============================================
-- SAMPLE DATA: Finnish Ice Hockey Women's Team
-- ============================================

-- Goalkeepers
INSERT INTO athletes (name, sport_id, team, position, jersey_number) VALUES
('Anni Keisala', 'ice-hockey', 'HPK', 'Maalivahti', '35'),
('Sanni Ahola', 'ice-hockey', 'Ottawa Charge (PWHL)', 'Maalivahti', '30'),
('Emilia Kyrkkö', 'ice-hockey', 'St. Cloud State (NCAA)', 'Maalivahti', '1');

-- Defensemen
INSERT INTO athletes (name, sport_id, team, position, jersey_number, is_featured, olympic_experience) VALUES
('Jenni Hiirikoski', 'ice-hockey', 'Luleå HF (SDHL)', 'Puolustaja', '6', true, '5. olympialaiset'),
('Ronja Savolainen', 'ice-hockey', 'PWHL', 'Puolustaja', '8', false, NULL),
('Nelli Laitinen', 'ice-hockey', 'NCAA', 'Puolustaja', '4', false, NULL),
('Sanni Rantala', 'ice-hockey', 'Suomi', 'Puolustaja', '15', false, NULL);

-- Forwards
INSERT INTO athletes (name, sport_id, team, position, jersey_number, is_featured) VALUES
('Michelle Karvinen', 'ice-hockey', 'Vancouver (PWHL)', 'Hyökkääjä', '9', true),
('Susanna Tapani', 'ice-hockey', 'Boston Fleet (PWHL)', 'Hyökkääjä', '71', false),
('Petra Nieminen', 'ice-hockey', 'SDHL', 'Hyökkääjä', '10', true),
('Noora Tulus', 'ice-hockey', 'Brynäs IF', 'Hyökkääjä', '12', false),
('Viivi Vainikka', 'ice-hockey', 'Brynäs IF', 'Hyökkääjä', '18', false),
('Elisa Holopainen', 'ice-hockey', 'Frölunda HC', 'Hyökkääjä', '23', false),
('Emma Nuutinen', 'ice-hockey', 'Kiekko-Espoo', 'Hyökkääjä', '27', false);

-- ============================================
-- SAMPLE EVENTS DATA
-- ============================================

-- Opening day events
INSERT INTO events (date, time, sport_id, name_fi, venue_id, is_medal_event, has_finnish_athletes) VALUES
('2026-02-06', '21:00', 'ceremony', 'Avajaisseremonia', 'san-siro', false, true);

-- Hockey matches
INSERT INTO events (date, time, sport_id, name_fi, venue_id, is_medal_event, has_finnish_athletes, finnish_matchup) VALUES
('2026-02-11', '13:10', 'ice-hockey', 'Miehet: Suomi vs Slovakia', 'milano-santagiulia', false, true, '🇫🇮 Suomi vs Slovakia 🇸🇰'),
('2026-02-13', '13:10', 'ice-hockey', 'Miehet: Suomi vs Ruotsi', 'milano-santagiulia', false, true, '🇫🇮 Suomi vs Ruotsi 🇸🇪'),
('2026-02-14', '21:10', 'ice-hockey', 'Miehet: Suomi vs Italia', 'milano-santagiulia', false, true, '🇫🇮 Suomi vs Italia 🇮🇹'),
('2026-02-22', '20:10', 'ice-hockey', 'Miehet: Kultaottelu', 'milano-santagiulia', true, true, NULL);

-- Biathlon events
INSERT INTO events (date, time, sport_id, name_fi, venue_id, is_medal_event, has_finnish_athletes) VALUES
('2026-02-07', '10:30', 'biathlon', 'Sekanelinviesti', 'anterselva', true, true),
('2026-02-08', '10:00', 'biathlon', 'Naisten 15 km henkilökohtainen', 'anterselva', true, true),
('2026-02-10', '10:00', 'biathlon', 'Naisten 7,5 km sprintti', 'anterselva', true, true),
('2026-02-11', '10:00', 'biathlon', 'Miesten 10 km sprintti', 'anterselva', true, true);

-- Cross-country events
INSERT INTO events (date, time, sport_id, name_fi, venue_id, is_medal_event, has_finnish_athletes) VALUES
('2026-02-07', '11:00', 'cross-country', 'Naisten skiathlon 7,5+7,5 km', 'tesero', true, true),
('2026-02-08', '14:00', 'cross-country', 'Miesten skiathlon 15+15 km', 'tesero', true, true);

-- ============================================
-- SAMPLE BROADCAST ASSIGNMENTS
-- ============================================

-- Hockey games on all channels
INSERT INTO event_broadcasts (event_id, channel_id, is_live, notes)
SELECT e.id, 'yle-tv2', true, 'Suora lähetys'
FROM events e WHERE e.sport_id = 'ice-hockey';

INSERT INTO event_broadcasts (event_id, channel_id, is_live)
SELECT e.id, 'yle-areena', true
FROM events e WHERE e.sport_id = 'ice-hockey';

INSERT INTO event_broadcasts (event_id, channel_id, is_live)
SELECT e.id, 'hbo-max', true
FROM events e WHERE e.sport_id = 'ice-hockey';

-- Biathlon on Yle TV1
INSERT INTO event_broadcasts (event_id, channel_id, is_live, notes)
SELECT e.id, 'yle-tv1', true, 'Suora lähetys'
FROM events e WHERE e.sport_id = 'biathlon';

INSERT INTO event_broadcasts (event_id, channel_id, is_live)
SELECT e.id, 'yle-areena', true
FROM events e WHERE e.sport_id = 'biathlon';

-- ============================================
-- VIEWS FOR EASY QUERYING
-- ============================================

-- Events with all details view
CREATE VIEW events_detailed AS
SELECT
    e.id,
    e.date,
    e.time,
    e.name_fi,
    e.is_medal_event,
    e.has_finnish_athletes,
    e.finnish_matchup,
    e.status,
    e.result_fi,
    s.id as sport_id,
    s.name_fi as sport_name,
    s.emoji as sport_emoji,
    v.name as venue_name,
    v.city as venue_city,
    COALESCE(
        json_agg(
            json_build_object(
                'channel_id', bc.id,
                'channel_name', bc.name,
                'channel_type', bc.type,
                'channel_url', bc.url,
                'is_live', eb.is_live,
                'notes', eb.notes
            )
        ) FILTER (WHERE bc.id IS NOT NULL),
        '[]'
    ) as broadcasts
FROM events e
LEFT JOIN sports s ON e.sport_id = s.id
LEFT JOIN venues v ON e.venue_id = v.id
LEFT JOIN event_broadcasts eb ON e.id = eb.event_id
LEFT JOIN broadcast_channels bc ON eb.channel_id = bc.id
GROUP BY e.id, s.id, s.name_fi, s.emoji, v.name, v.city
ORDER BY e.date, e.time;

-- Athletes by team view
CREATE VIEW athletes_by_team AS
SELECT
    t.id as team_id,
    t.name_fi as team_name,
    t.gender,
    t.previous_result,
    a.id as athlete_id,
    a.name,
    a.position,
    a.team,
    a.jersey_number,
    a.is_captain,
    a.is_featured,
    a.olympic_experience
FROM teams t
LEFT JOIN team_athletes ta ON t.id = ta.team_id
LEFT JOIN athletes a ON ta.athlete_id = a.id
ORDER BY t.id, a.position, a.name;

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to get today's events
CREATE OR REPLACE FUNCTION get_todays_events()
RETURNS SETOF events_detailed AS $$
BEGIN
    RETURN QUERY
    SELECT * FROM events_detailed
    WHERE date = CURRENT_DATE
    ORDER BY time;
END;
$$ LANGUAGE plpgsql;

-- Function to get events by date range
CREATE OR REPLACE FUNCTION get_events_by_date_range(start_date DATE, end_date DATE)
RETURNS SETOF events_detailed AS $$
BEGIN
    RETURN QUERY
    SELECT * FROM events_detailed
    WHERE date BETWEEN start_date AND end_date
    ORDER BY date, time;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- Enable in Supabase dashboard
-- ============================================

-- Public read access for all tables
-- ALTER TABLE sports ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Public read access" ON sports FOR SELECT USING (true);

-- ALTER TABLE events ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Public read access" ON events FOR SELECT USING (true);

-- etc...
