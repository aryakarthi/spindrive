import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [role, setRole] = useState("user"); // "user" or "admin"

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: role, text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 h-[500px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 flex justify-between items-center">
            <div className="font-semibold text-sm">Live Chat Support</div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex flex-col gap-2 bg-white">
            {/* Role Switch (for demo only) */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>You are: <strong>{role}</strong></span>
              <button
                className="underline"
                onClick={() => setRole(role === "user" ? "admin" : "user")}
              >
                Switch to {role === "user" ? "admin" : "user"}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 p-2 rounded-xl border text-sm focus:outline-none"
                placeholder={`Send as ${role}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
