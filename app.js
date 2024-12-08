const API_URL = "https://api.gemini-platform.com/endpoint"; // Ganti dengan endpoint API Gemini
const API_KEY = "AIzaSyBPxoOy5TTu72cVbPV2sh8TB68xaghtENo"; // API key Anda

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage("user", userMessage);
    userInput.value = "";
    addMessage("bot", "Sedang memproses...");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({ query: userMessage })
        });

        const data = await response.json();
        updateLastMessage("bot", data.response || "Tidak ada jawaban dari AI.");
    } catch (error) {
        console.error("Error:", error);
        updateLastMessage("bot", "Terjadi kesalahan.");
    }
}

function addMessage(sender, text) {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function updateLastMessage(sender, text) {
    const messages = chatBox.getElementsByClassName(`message ${sender}`);
    if (messages.length > 0) {
        messages[messages.length - 1].textContent = text;
    }
}

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
