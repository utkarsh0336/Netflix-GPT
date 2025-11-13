// gemini.js
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const genAI = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default genAI;
