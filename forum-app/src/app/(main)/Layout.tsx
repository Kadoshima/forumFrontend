import React, { ReactNode, useEffect } from "react";

import Header from "@/components/Header/Header";
import SideNavigation from "@/components/Header/SideNavigation";
import PopularCommunities from "@/components/community/PopularCommunities";
import AuthCheck from "./AuthCheck";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <AuthCheck />
      <SideNavigation />
      <div className="flex-1">
        <Header />
        <div className="flex">
          <main className="flex-1 p-4">{children}</main>
          {/* <PopularCommunities /> */}
        </div>
      </div>
    </div>
  );
}
