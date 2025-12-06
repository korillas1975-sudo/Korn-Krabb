import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I apologize, but I am currently offline (API Key missing). Please contact our store directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are "Anna", a sophisticated AI Pearl Consultant for "Anna Paris Jewelry". 
        
        Brand Context:
        - We are a 20-year-old brand located in Platinum Fashion Mall, Bangkok.
        - We design our own jewelry, focusing on high-quality pearls.
        - Target audience: Professional working women who value elegance and modernity.
        - Tone: Elegant, warm, professional, encouraging, and concise.
        
        Task:
        - Advise customers on pearl jewelry selection based on their outfit, occasion, or skin tone.
        - Do NOT give specific prices.
        - Mention that pieces are "Designed in-house" and "Timeless".
        - If asked about location, mention Platinum Fashion Mall, Bangkok.
        
        Keep responses under 60 words unless detailed advice is requested.`,
      }
    });

    return response.text || "I'm having trouble connecting to my design inspiration right now. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I am currently assisting other clients. Please try again in a moment.";
  }
};