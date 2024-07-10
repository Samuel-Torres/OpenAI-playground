import OpenAI from "openai";

const openai = new OpenAI();

// Use the OpenAI client
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "You are a helpful assistant." }],
  });
  console.log(response.choices[0]);
}

main();