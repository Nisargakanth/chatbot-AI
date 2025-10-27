import { GoogleGenerativeAI } from "@google/generative-ai";
import { ApiResponse } from "../utils/ApiResponse.js";

const askQuestion = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res
      .status(200)
      .send(new ApiResponse(200, response, "Response generated successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Error generating response."));
  }
};

export { askQuestion };
