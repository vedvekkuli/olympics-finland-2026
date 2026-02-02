# Milano Cortina 2026 - Suomen Olympiajoukkue

A mobile-first website for tracking the 2026 Winter Olympics schedule, Finnish athletes, and where to watch in Finland.

## Features

- **Event Schedule** - Full day-by-day schedule with Finnish times
- **Finnish Athletes** - Complete roster for ice hockey (men & women), biathlon, cross-country, alpine
- **Where to Watch** - Per-event broadcasting info (Yle TV, Yle Areena, HBO Max, Eurosport)
- **Smart Filtering** - Filter by sport, date, broadcast type (free/paid), Finnish athletes, medal events
- **Mobile-First Design** - Responsive, clean Finnish-inspired design
- **Countdown Timer** - Days until Opening Ceremony

## Quick Start (Static Version)

The site works immediately without any backend setup - just open `index.html` in a browser.

```bash
cd olympics-finland-2026
open index.html
# or use a local server:
npx serve .
```

## Supabase Setup (Optional - for dynamic updates)

To enable database-backed data that you can update:

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the project to initialize

### 2. Set Up Database

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `database-schema.sql`
3. Paste and run the SQL to create all tables and initial data

### 3. Configure the App

1. Go to **Settings > API** in Supabase
2. Copy your **Project URL** and **anon/public key**
3. Edit `config.js` and replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

### 4. Enable Row Level Security (Optional)

For public read access, run these in SQL Editor:

```sql
ALTER TABLE sports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON sports FOR SELECT USING (true);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON events FOR SELECT USING (true);

-- Repeat for other tables...
```

## Updating Data

### With Supabase

Use the Supabase dashboard Table Editor to:
- Add/edit events
- Update broadcast assignments
- Add new athletes
- Change event statuses

### Without Supabase

Edit the `localEvents`, `localAthletes`, and `localBroadcasts` arrays in `app.js`.

## Broadcasting in Finland

| Channel | Type | Cost | Coverage |
|---------|------|------|----------|
| Yle TV1 | TV | Free | Main events, Finnish focus |
| Yle TV2 | TV | Free | Secondary events |
| Yle Areena | Streaming | Free | All Yle broadcasts |
| HBO Max | Streaming | Paid | All 116 events |
| Eurosport 1/2 | TV | Paid | Premium coverage |
| Discovery+ | Streaming | Paid | Additional coverage |
| TV5 | TV | Free | Selected events |

## File Structure

```
olympics-finland-2026/
├── index.html          # Main HTML
├── styles.css          # All styles (mobile-first)
├── app.js              # Application logic + fallback data
├── config.js           # Supabase configuration
├── database-schema.sql # Full database schema for Supabase
└── README.md           # This file
```

## Data Sources

- [Olympics.com](https://www.olympics.com/en/milano-cortina-2026)
- [NHL.com](https://www.nhl.com) - Finnish hockey rosters
- [Yle](https://yle.fi) - Broadcasting info
- [Finnish Olympic Committee](https://www.olympiakomitea.fi)

## License

MIT - Free to use and modify.

---

Made for Finland 🇫🇮
