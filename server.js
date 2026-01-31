import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Put your Gemini API Key here
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// CRM API
app.post("/crm-ai", async (req, res) => {
  try {
    const { emailText, awbStatus } = req.body;

    const prompt = `
You are an AI assistant for a CRM system of an e-commerce company.

Customer Email:
"${emailText}"

Shipment (AWB) Status:
"${awbStatus}"

Your tasks:
1. Identify the issue.
2. Decide ticket category.
3. Decide priority.
4. Write a professional customer reply.

Return ONLY this JSON format:
{
  "ticket_category": "",
  "priority": "",
  "reply_email": ""
}
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    res.json({
      success: true,
      aiResponse: text
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Gemini CRM API running on http://localhost:3000");
});
