"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Image } from "lucide-react";

const ChatInterface = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date (e.g., 7 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // Set to 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Timer expired
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    // Cleanup timer
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "omg, this is amazing",
      sender: "user1",
      timestamp: "2 min ago",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      text: "perfect! ✅",
      sender: "user1",
      timestamp: "2 min ago",
      avatar: "👨‍💼",
    },
    {
      id: 3,
      text: "Wow, this is really epic",
      sender: "user1",
      timestamp: "2 min ago",
      avatar: "👨‍💼",
    },
    {
      id: 4,
      text: "woohooo",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
    {
      id: 5,
      text: "Haha oh man",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
    {
      id: 6,
      text: "Haha that's terrifying 😱",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
    {
      id: 7,
      text: "omg, this is amazing",
      sender: "user1",
      timestamp: "just now",
      avatar: "👨‍💼",
    },
    {
      id: 8,
      text: "perfect! ✅",
      sender: "user1",
      timestamp: "just now",
      avatar: "👨‍💼",
    },
    {
      id: 9,
      text: "Wow, this is really epic",
      sender: "user1",
      timestamp: "just now",
      avatar: "👨‍💼",
    },
    {
      id: 10,
      text: "woohooo",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
    {
      id: 11,
      text: "Haha oh man",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
    {
      id: 12,
      text: "Haha that's terrifying 😱",
      sender: "user2",
      timestamp: "just now",
      avatar: "👤",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const currentUser = "user2"; // Current user identifier

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: currentUser,
      timestamp: "just now",
      avatar: "👤",
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate typing indicator and auto-reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const autoReply = {
        id: messages.length + 2,
        text: getRandomReply(),
        sender: "user1",
        timestamp: "just now",
        avatar: "👨‍💼",
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 1500);
  };

  const getRandomReply = () => {
    const replies = [
      "That's awesome! 🎉",
      "I totally agree!",
      "Wow, really?",
      "That's so cool!",
      "Amazing stuff! ✨",
      "Perfect! ✅",
      "This is epic indeed!",
      "So true! 💯",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const groupMessages = () => {
    const groups = [];
    let currentGroup = null;

    messages.forEach((message) => {
      if (!currentGroup || currentGroup.sender !== message.sender) {
        currentGroup = {
          sender: message.sender,
          avatar: message.avatar,
          messages: [message],
          timestamp: message.timestamp,
        };
        groups.push(currentGroup);
      } else {
        currentGroup.messages.push(message);
        currentGroup.timestamp = message.timestamp;
      }
    });

    return groups;
  };

  return (
    <div className="flex flex-col w-full  bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-6 shadow-sm flex justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-content-center text-white font-semibold">
            👥
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Group Chat</h2>
            <p className="text-sm text-gray-500">2 members</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-6/12">
          {/* Left Side - Countdown Timer */}
          <div className="flex flex-col items-center py-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Delivery Date
            </h3>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">Days</div>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">Hours</div>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">Mins</div>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">Secs</div>
              </div>
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
              View Client Profile
            </button>
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupMessages().map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex ${
              group.sender === currentUser ? "justify-end" : "justify-start"
            }`}
          >
            {group.sender !== currentUser && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm mr-3 mt-auto">
                {group.avatar}
              </div>
            )}

            <div
              className={`flex flex-col space-y-1 max-w-xs lg:max-w-md ${
                group.sender === currentUser ? "items-end" : "items-start"
              }`}
            >
              {group.messages.map((message, messageIndex) => (
                <div
                  key={message.id}
                  className={`px-4 py-2 rounded-2xl break-words ${
                    group.sender === currentUser
                      ? "bg-gradient-to-r from-[#002282] to-[#0170DA] text-white rounded-br-sm"
                      : "bg-white text-gray-900 border border-gray-200 rounded-bl-sm"
                  } ${
                    messageIndex === group.messages.length - 1 ? "mb-1" : ""
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}
              <div
                className={`flex items-center space-x-2 text-xs text-gray-500 ${
                  group.sender === currentUser
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <span>{group.timestamp}</span>
                {group.sender === currentUser && (
                  <div className="flex space-x-1">
                    <div className="w-4 h-3 flex items-center">
                      <svg
                        viewBox="0 0 16 11"
                        className="w-4 h-3 text-blue-600"
                      >
                        <path
                          fill="currentColor"
                          d="M11.071.653a.5.5 0 0 1 .708 0L15.414 4.3a.5.5 0 0 1 0 .707L12.12 8.654a.5.5 0 0 1-.707-.707L14.293 5 11.071 1.778a.5.5 0 0 1 0-.707zM7.071.653a.5.5 0 0 1 .708 0L11.414 4.3a.5.5 0 0 1 0 .707L8.12 8.654a.5.5 0 0 1-.707-.707L10.293 5 7.071 1.778a.5.5 0 0 1 0-.707z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {group.sender === currentUser && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm ml-3 mt-auto">
                {group.avatar}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm mr-3">
              👨‍💼
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Paperclip size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Image size={20} />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ""}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
