import React from "react";
import ChatListSidebar from "./ChatListSidebar";

import ChatInterface from "./ChatBoxLayout";

function InboxLayout() {
  return (
    <div className="flex flex-col lg:flex-row  md:h-screen  ">
      <ChatListSidebar />
      <ChatInterface />
    </div>
  );
}

export default InboxLayout;
