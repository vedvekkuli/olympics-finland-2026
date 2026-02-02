// ============================================
// Supabase Configuration
// ============================================

// SETUP INSTRUCTIONS:
// 1. Go to https://supabase.com and create a free account
// 2. Create a new project
// 3. Go to Settings > API
// 4. Copy your Project URL and anon/public key
// 5. Replace the values below

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
let supabase = null;

// Check if Supabase is configured
const isSupabaseConfigured = () => {
    return SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' &&
           SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';
};

// Initialize Supabase if configured
if (isSupabaseConfigured() && typeof window !== 'undefined' && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Export for use in app.js
window.appConfig = {
    supabase,
    isSupabaseConfigured: isSupabaseConfigured(),
    // Fallback to local data if Supabase is not configured
    useLocalData: !isSupabaseConfigured()
};
