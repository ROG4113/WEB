
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rosfvqgujusexraeyodl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvc2Z2cWd1anVzZXhyYWV5b2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMjMxMzgsImV4cCI6MjA0NTc5OTEzOH0.TpgyeyoqomT0WcZOrp1iRLfAPBouMYP9_gI59eI9jMk';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;