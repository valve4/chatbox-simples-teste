const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const responses = {
  oi: "Olá, tudo bem com você?",
  ajuda: "Claro, como posso te ajudar?",
  tchau: "Tchau! Até a próxima!",
  default: "Não entendi, pode repetir?",
};

// add nova mensagem
function addMessage(content, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = content;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// input do usuario
function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user");
  userInput.value = "";

  const botResponse = responses[userMessage.toLowerCase()] || responses.default;
  setTimeout(() => addMessage(botResponse, "bot"), 500);
}

// eventos
sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});
