import React from "react";
import Link from "next/link";
import { GroupIcon, EllipsisIcon } from "@/components/common/icon";
import { CommunityType } from "@/types/CommunityTypes";

export default function PopularCommunities(): JSX.Element {
  const communities: CommunityType[] = [
    { name: "r/explainlikeimfive", members: "22,915,815" },
    { name: "r/IAmA", members: "22,551,272" },
    { name: "r/classicwow", members: "606,984" },
    { name: "r/Instagram", members: "938,051" },
    { name: "r/NintendoSwitch", members: "6,948,075" },
  ];

  return (
    <aside className="w-80 p-4 bg-gray-800">
      <h3 className="mb-4 text-lg font-bold">POPULAR COMMUNITIES</h3>
      <ul className="space-y-2">
        {communities.map((community, index) => (
          <li key={index} className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>{community.name}</span>
            </Link>
            <span className="text-sm text-gray-400">
              {community.members} members
            </span>
          </li>
        ))}
        <li className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center space-x-2"
            prefetch={false}>
            <EllipsisIcon className="w-6 h-6" />
            <span>See more</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
