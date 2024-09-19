import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('APIKey');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "qual o melhor candidato para prefeito de são paulo";

const result = await model.generateContent(prompt);
console.log(result.response.text());