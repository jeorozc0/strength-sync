import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.36.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const WorkoutSchema = z.object({
  muscle: z.string(),
  exercises: z.array(
    z.object({
      exercise_name: z.string(),
      exercise_id: z.string(),
      sets: z.string(),
      reps: z.string(),
    })
  ),
});

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!
);

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    const { data: exercises, error } = await supabase
      .from("exercises")
      .select("*");

    if (error || !exercises || exercises.length === 0) {
      throw new Error(error?.message || "No exercises found in the database.");
    }

    const exerciseList = exercises
      .map(
        (e) =>
          `ID: ${e.exercise_id}, Name: ${e.exercise_name}, Muscle Group: ${e.exercise_name}`
      )
      .join("\n");

    const { choices } = await openai.chat.completions.create({
      messages: [
        { role: "user", content: query },
        {
          role: "system",
          content: `As a personal trainer, create a workout routine using this list of exercies, you may not use any other exercise in this list:

${exerciseList}

Based on the given muscle group, number of sets, and number of exercises, create a workout routine in this JSON format:
{
  "muscle": "Target Muscle Group",
  "exercises": [
    {
      "exercise_name": "Name of Exercise",
      "exercise_id": "ID of exercise",
      "sets": "Number of Sets",
      "reps": "Number of Reps"
    }
  ]
}`,
        },
      ],
      model: "gpt-4-1106-preview",
      response_format: { type: "json_object" },
    });

    if (!choices || choices.length === 0 || !choices[0].message.content) {
      throw new Error("No valid response from OpenAI");
    }

    const validatedWorkout = WorkoutSchema.parse(
      JSON.parse(choices[0].message.content)
    );

    return new Response(JSON.stringify(validatedWorkout), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
