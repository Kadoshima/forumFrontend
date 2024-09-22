import React from "react";
import { SearchIcon, FlipVerticalIcon } from "@/components/common/icon";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";

export default function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Search ChubuForum"
          className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-md"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="text-white">
          Get app
        </Button>
        <Button variant="secondary" className="text-white">
          Log In
        </Button>
        <Button variant="ghost" className="rounded-full">
          <FlipVerticalIcon className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}
