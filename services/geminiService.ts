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
      return "I am simulating the Virtual Interviewer (Demo Mode). In the live version, I would be using our Emotional AI Agent to analyze your sentiment.";
    }

    const modelId = 'gemini-2.5-flash';

    const conversationHistory = history.map(msg => 
      `${msg.role === 'user' ? 'Respondent' : 'Interviewer'}: ${msg.text}`
    ).join('\n');

    const prompt = `
      System Instruction: You are the "LinnoChat Virtual Interviewer". 
      Your goal is not to answer support questions, but to conduct a qualitative interview.
      
      Context: The user is visiting the LinnoChat website. You want to demonstrate how the platform works by interviewing them about their current customer feedback methods.
      
      Techniques to use:
      1. Active Listening: Validate what they say ("It sounds like accurate data is a challenge for you...").
      2. Probing: Ask follow-up questions to dig deeper ("Tell me more about how that impacts your decision making...").
      3. Emotional Intelligence: Detect if they are frustrated or happy.

      Keep responses concise (under 40 words). Be professional yet empathetic.

      Conversation History:
      ${conversationHistory}
      
      Respondent: ${currentMessage}
      Interviewer:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "I'd love to hear more about that. Could you elaborate?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, my connection to the analysis engine was briefly interrupted. Could you repeat that?";
  }
};