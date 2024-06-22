import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";
import { corsHeaders } from '../_shared/cors.ts'


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
      messages: [{ role: "user", content: query }],
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
