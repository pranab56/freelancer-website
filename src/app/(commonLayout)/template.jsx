"use client";

import Providers from "@/components/providers/Providers";
import Navigation from "@/components/navigation/Navigation";

export default function Template({ children }) {
  return (
    <Providers>
      <Navigation>{children}</Navigation>
    </Providers>
  );
}
