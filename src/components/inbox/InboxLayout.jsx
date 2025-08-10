import React from "react";
import ChatListSidebar from "./ChatListSidebar";

import ChatInterface from "./ChatBoxLayout";

function InboxLayout() {
  return (
    <div className="flex flex-col md:flex-row  md:h-screen overflow-hidden bg-white">
      <ChatListSidebar />
      <ChatInterface />
    </div>
  );
}

export default InboxLayout;
