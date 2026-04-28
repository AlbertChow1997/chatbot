import { useState } from "react";

import "./App.css";
import { ChatInput } from "./component/ChatInput";
import { ChatMessages } from "./component/ChatMessages";

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
