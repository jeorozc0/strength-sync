import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export const jsonFormatExample = {
  muscle: "Chest",
  exercises: [
    {
      1: {
        exercise_name: "Name of exercise",
        sets: "Number of sets",
      },
    },
  ],
};

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
          content: `You are a personal trainer and you are creating a workout routine for a client. You will be given a muscle group, the exact number of sets, and the number of exercises. You need to create a workout routine for the client based exactly on the given information. The workout routine should include the exercises, and the exact requested sets for each exercise, without adding anything else. You will return the workout routine. Do not include any explanations, only provide a  RFC8259 compliant JSON response following this format without deviation. ${jsonFormatExample}. `,
        },
      ],
      model: "gpt-3.5-turbo",
      stream: false,
    });

    const reply = workoutRoutine.choices[0].message.content;

    return new Response(JSON.stringify(reply), {
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
