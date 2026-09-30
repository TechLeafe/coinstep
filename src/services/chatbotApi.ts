export interface ChatResponse {
  success: boolean;
  answer: string;
  source: string;
}

const API_URL =
  "http://127.0.0.1:5000/api/chat";


export const sendChatMessage = async (
  message: string
): Promise<ChatResponse> => {

  const response =
    await fetch(
      API_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      }
    );


  const data =
    await response.json();


  if (!response.ok) {

    throw new Error(
      data.detail ||
      "Unable to get chatbot response"
    );
  }


  return data;
};