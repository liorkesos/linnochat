
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

// Use the API key directly from the environment variable process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBotResponse = async (
  history: ChatMessage[],
  currentMessage: string
): Promise<string> => {
  try {
    // Using gemini-3-flash-preview for chat tasks as per task type guidelines.
    const modelId = 'gemini-3-flash-preview';

    // Format conversation history for context within the prompt.
    const conversationHistory = history.map(msg => 
      `${msg.role === 'user' ? 'User' : 'LinnoAgent'}: ${msg.text}`
    ).join('\n');

    // System instruction is now placed in the config object as recommended by the SDK guidelines.
    const systemInstruction = `You are "Linno", the AI Agent for LinnoChat.
LinnoChat is a premium enterprise platform that automates intake, support, and qualitative discovery.

Your Goals:
1. Demonstrate empathy and enterprise intelligence.
2. Explain how LinnoChat replaces static, boring forms with dynamic, human-like conversations.
3. Mention "Structured Data Extraction" (JSON) and "WhatsApp/Web Omnichannel" if relevant.

Tone: Professional, innovative, helpful, and very concise.
Constraint: Keep responses under 40 words. Use bullet points only if absolutely necessary.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: `Context:
${conversationHistory}

User's latest message: ${currentMessage}
LinnoAgent:`,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    // Directly accessing the .text property of the response object.
    return response.text || "I'm here to help you automate your business processes. What can I do for you?";
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "I'm experiencing a high volume of requests. LinnoChat agents are designed for reliability—please try again in a moment.";
  }
};
