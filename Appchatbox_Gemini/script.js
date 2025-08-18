// script.js
const API_KEY = "AIzaSyAygnAjWha3jeIA7mj9RIGlljlhOXka8Qg"; // Thay bằng API Key của bạn
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value;
  appendMessage("user", message);
  userInput.value = "";

  const botReply = await callGeminiAPI(message);
  appendMessage("bot", botReply);
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function callGeminiAPI(prompt) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY;

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi.";
    return reply;
  } catch (error) {
    console.error("Lỗi gọi API:", error);
    return "Đã xảy ra lỗi khi gọi API.";
  }
}
