"use client";

import React, { ReactNode, useEffect } from "react";

import Header from "@/components/Header/Header";
import SideNavigation from "@/components/Header/SideNavigation";
import PopularCommunities from "@/components/community/PopularCommunities";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const router = useRouter();

  // loginをせずに直接内部のURLを叩いた場合
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
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
