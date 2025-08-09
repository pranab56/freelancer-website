"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

function ChatListSidebar() {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200">
        <TotalMessageCount />
        <SearchBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>
    </div>
  );
}

export default ChatListSidebar;

function TotalMessageCount() {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      <span className="ml-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
        6+
      </span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      <input
        type="text"
        placeholder="Search Client"
        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}

function ChatList() {
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    {
      id: 1,
      name: "Larry",
      status: "Woof! Woof!",
      timestamp: "24m",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
      isActive: true,
      hasNewMessage: true,
    },
    {
      id: 2,
      name: "Max",
      status: "Hello",
      timestamp: "40m",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
      isActive: false,
      hasNewMessage: false,
    },
    {
      id: 3,
      name: "Lemon",
      status: "Where are You?",
      timestamp: "1 hr",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      isOnline: false,
      isActive: false,
      hasNewMessage: false,
    },
    {
      id: 4,
      name: "Katy",
      status: "",
      timestamp: "3 hr",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c7?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
      isActive: false,
      hasNewMessage: false,
    },
    {
      id: 5,
      name: "Chedder",
      status: "Yes",
      timestamp: "1 day",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      isOnline: false,
      isActive: false,
      hasNewMessage: false,
    },
    {
      id: 6,
      name: "Daisy",
      status: "Sure",
      timestamp: "2 day",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
      isActive: false,
      hasNewMessage: false,
    },
  ];

  return (
    <div className="p-2">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setSelectedChat(chat.id)}
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 mb-1 ${
            chat.isActive ? "bg-blue-500 text-white" : "hover:bg-gray-50"
          }`}
        >
          {/* Avatar with online status */}
          <div className="relative mr-3">
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {chat.isOnline && (
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>

          {/* Chat info */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <h3
                className={`font-semibold text-sm truncate ${
                  chat.isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {chat.name}
              </h3>
              <span
                className={`text-xs ml-2 ${
                  chat.isActive ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {chat.timestamp}
              </span>
            </div>

            <p
              className={`text-sm truncate ${
                chat.isActive ? "text-blue-100" : "text-gray-600"
              }`}
            >
              {chat.status || "No recent message"}
            </p>
          </div>

          {/* New message indicator */}
          {chat.hasNewMessage && !chat.isActive && (
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
