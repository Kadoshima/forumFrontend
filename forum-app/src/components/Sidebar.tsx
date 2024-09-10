'use client'

import React from 'react'
import Link from "next/link"
import * as Icons from './Icons'



const Sidebar = () => {
    return (
        <aside className="w-64 p-4 bg-gray-800">
            <div className="flex items-center mb-8">
                <Icons.RssIcon className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold">ChubuForum</span>
            </div>
            <nav className="space-y-2">
                <Link href="/my-page" className="flex items-center p-2 space-x-2 rounded-md bg-gray-700">
                    <Icons.HomeIcon className="w-6 h-6" />
                    <span>MyPage</span>
                </Link>
                <Link href="/" className="flex items-center p-2 space-x-2 rounded-md bg-gray-700">
                    <Icons.HomeIcon className="w-6 h-6" />
                    <span>Home</span>
                </Link>
                <Link href="/popular" className="flex items-center p-2 space-x-2 rounded-md bg-gray-700">
                    <Icons.TrendingUpIcon className="w-6 h-6" />
                    <span>Popular</span>
                </Link>
            </nav>

        </aside>
    )
}

export default Sidebar