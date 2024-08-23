import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ExerciseSchema = z.object({
  exercise_name: z.string(),
  sets: z.string(),
});

const WorkoutSchema = z.object({
  muscle: z.string(),
  exercises: z.array(ExerciseSchema),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const workoutRoutine = await openai.chat.completions.create({
      messages: [
        { role: "user", content: query },
        {
          role: "system",
          content: `You are a personal trainer creating a workout routine for a client. You will be given a muscle group, the exact number of sets, and the number of exercises. Create a workout routine for the client based exactly on the given information. The workout routine should include the exercises, and the exact requested sets and reps for each exercise, without adding anything else. Return the workout routine in the following JSON format:
          {
            "muscle": "Target Muscle Group",
            "exercises": [
              {
                "exercise_name": "Name of Exercise",
                "sets": "Number of Sets",
                "reps": "Number of Reps"
              },
              ...
            ]
          }`,
        },
      ],
      model: "gpt-4o-2024-08-06",
      response_format: { type: "json_object" },
    });

    console.log("Full API Response:", JSON.stringify(workoutRoutine, null, 2));

    if (!workoutRoutine.choices || workoutRoutine.choices.length === 0) {
      throw new Error("No choices returned from the API");
    }

    const rawContent = workoutRoutine.choices[0].message.content;
    console.log("Raw Content:", rawContent);

    if (!rawContent) {
      throw new Error("No content in the API response");
    }

    // Parse the raw content as JSON
    const parsedContent = JSON.parse(rawContent);

    // Validate the parsed content against our schema
    const validatedWorkout = WorkoutSchema.parse(parsedContent);

    return new Response(JSON.stringify(validatedWorkout), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message, stack: error.stack }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
