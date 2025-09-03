import Together from "together-ai";

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

export async function POST(request) {
  try {
    const { messages } = await request.json();

    const res = await together.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      messages,
      stream: true,
    });

    return new Response(res.toReadableStream());
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}