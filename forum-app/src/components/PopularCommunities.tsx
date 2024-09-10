import React from 'react'
import Link from "next/link"
import { GroupIcon, EllipsisIcon } from './Icons'

interface Community {
    name: string;
    members: number;
    href: string;
}

interface PopularCommunitiesProps {
    communities: Community[];
}

const PopularCommunities: React.FC<PopularCommunitiesProps> = ({ communities }) => {
    return (
        <aside className="w-64 p-4 bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-white">POPULAR COMMUNITIES</h3>
            <ul className="space-y-2">
                {communities.map((community, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <Link href={community.href} className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <GroupIcon className="w-6 h-6" />
                            <span>{community.name}</span>
                        </Link>
                        <span className="text-sm text-gray-400">{community.members.toLocaleString()} members</span>
                    </li>
                ))}
                <li className="flex items-center justify-between">
                    <Link href="/more-communities" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <EllipsisIcon className="w-6 h-6" />
                        <span>See more</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default PopularCommunities