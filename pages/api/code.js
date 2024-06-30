
const { NextResponse } = require("next/server");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code format. Use code comments for explanations.",
};

export default async function handle(req, res) {
  const { method } = req;
  
  if (method === "POST") {
    try {  
      
      const { messages } = req.body;

  
      if (!openai) {
        return new NextResponse("Open AI is not configured", { status: 500 });
      }
  
      if (!messages) {
        return new NextResponse("No messages provided", { status: 400 });
      }
  
      // const freeTrial = await checkApiLimit();
      // const isPro = await checkSubscription();
  
      // if (!freeTrial && !isPro) {
      //   return new NextResponse("Free trial has expired", { status: 403 });
      // }
  
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [instructionMessage, ...messages],
      });
  
      // if (!isPro) {
      //   await increaseApiLimit();
      // }
  
      return new NextResponse.json(response.choices[0].message);
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        body: {
          error: "Something went wrong",
        },
      };
    }
  }
}

