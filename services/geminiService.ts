import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

// Initialize Gemini API Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateBotResponse = async (
  history: ChatMessage[],
  currentMessage: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "I am simulating the Linno AI Agent (Demo Mode). In the live version, I would be connected to your knowledge base to handle support, intake, or research tasks.";
    }

    const modelId = 'gemini-2.5-flash';

    const conversationHistory = history.map(msg => 
      `${msg.role === 'user' ? 'User' : 'Agent'}: ${msg.text}`
    ).join('\n');

    const prompt = `
      System Instruction: You are the "LinnoChat AI Assistant".
      Your goal is to demonstrate the versatility of the platform. You can act as a Support Agent, an Intake Specialist, or a Researcher.
      
      Context: The user is visiting the LinnoChat website. You want to demonstrate how the platform can automate various conversations.
      
      Strategy:
      1. Identification: Figure out if they have a need for Support (handling tickets), Intake (forms/applications), or Research (feedback).
      2. Demonstration: Briefly roleplay that capability.
      3. Features: Mention capabilities like "Structured Data Extraction" (turning chat into JSON) or "Sentiment Analysis".

      Keep responses concise (under 40 words). Be professional, helpful, and intelligent.

      Conversation History:
      ${conversationHistory}
      
      User: ${currentMessage}
      Agent:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "I can help you automate that workflow. Could you tell me more about your requirements?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, my connection to the neural engine was briefly interrupted. Could you repeat that?";
  }
};