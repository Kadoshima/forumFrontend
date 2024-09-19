import React, { ReactNode } from "react";

import Header from "@/components/Header/Header";
import SideNavigation from "@/components/Header/SideNavigation";
import PopularCommunities from "@/components/communities/PopularCommunities";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <SideNavigation />
      <div className="flex-1">
        <Header />
        <div className="flex">
          <main className="flex-1 p-4">{children}</main>
          <PopularCommunities />
        </div>
      </div>
    </div>
  );
}
