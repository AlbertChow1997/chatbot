import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./App.css";
import { ChatInput } from "./component/ChatInput";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";

function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    { message: "Can you get me todays date?", sender: "user", id: "id3" },
    { message: "Today is 23 April", sender: "robot", id: "id4" },
    { message: "How about flip a coin?", sender: "user", id: "id5" },
    { message: "Sure! You got tails", sender: "robot", id: "id6" },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
