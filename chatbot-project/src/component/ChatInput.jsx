import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        value={inputText}
        placeholder="Please send a message to the chatbot"
        size="30"
        onChange={saveInputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
