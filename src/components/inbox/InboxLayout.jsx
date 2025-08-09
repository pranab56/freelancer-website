import React from "react";
import ChatListSidebar from "./ChatListSidebar";

import ChatInterface from "./ChatBoxLayout";

function InboxLayout() {
  return (
    <div className="flex h-screen w-full border-2 border-red-500">
      <ChatListSidebar />
      <ChatInterface />
    </div>
  );
}

export default InboxLayout;
