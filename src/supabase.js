import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpcxsfhjdgsrhizlvcbk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwY3hzZmhqZGdzcmhpemx2Y2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2ODM3NDIsImV4cCI6MTk5MDI1OTc0Mn0.I-yqxLZU_gpcR6WgVfEDhFYE1HOnl7IxVUIJwvn3gfM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
