import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// Create a single supabase client for interacting with your database

const supabase = createClient(
  "https://trteoflqzrzmgdnnrpfr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydGVvZmxxenJ6bWdkbm5ycGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MTg5ODUsImV4cCI6MjAxODQ5NDk4NX0.7V-HIFDbJ_V-oQgJ_eDC3zeao4KgBGwfVsyuXgPdqVA"
);
export function useWorkoutList() {
  const [workout, setWorkout] = useState<any>([]);
  useEffect(() => {
    getExcercises();
  }, []);

  async function getExcercises() {
    let { data: workouts, error } = await supabase.from("workouts").select("*");

    setWorkout(workouts);
    console.log("data: ", workouts);
  }
  return workout;
}
