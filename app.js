const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage('User', userMessage);
        userInput.value = '';
        respond(userMessage);
    }
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(userMessage) {
    // Simulasi respon AI (update ini dengan integrasi API Gemini)
    const aiResponse = "Gemini AI belum diatur untuk merespons.";
    appendMessage('Gemini', aiResponse);
}
