import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://trteoflqzrzmgdnnrpfr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydGVvZmxxenJ6bWdkbm5ycGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MTg5ODUsImV4cCI6MjAxODQ5NDk4NX0.7V-HIFDbJ_V-oQgJ_eDC3zeao4KgBGwfVsyuXgPdqVA"
);

export default supabase;
