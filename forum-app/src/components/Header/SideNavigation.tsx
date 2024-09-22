import Link from "next/link";
import {
  ComputerIcon,
  EllipsisIcon,
  GamepadIcon,
  HandHelpingIcon,
  HomeIcon,
  InfoIcon,
  LanguagesIcon,
  PlayIcon,
  ReplyIcon,
  RssIcon,
  TrendingUpIcon,
  TvIcon,
  VideoIcon,
} from "../common/icon";
import { BookIcon, BuildingIcon, NewspaperIcon, UsersIcon } from "lucide-react";

export default function SideNavigation() {
  return (
    <aside className="w-64 p-4 bg-gray-800">
      <div className="flex items-center mb-8">
        <RssIcon className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold">ChubuForum</span>
      </div>
      <nav className="space-y-2">
        <Link
          href="#"
          className="flex items-center p-2 space-x-2 rounded-md bg-gray-700"
          prefetch={false}>
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link
          href="#"
          className="flex items-center p-2 space-x-2 rounded-md bg-gray-700"
          prefetch={false}>
          <TrendingUpIcon className="w-6 h-6" />
          <span>Popular</span>
        </Link>
      </nav>
      <div className="mt-8">
        <h3 className="mb-2 text-sm font-semibold text-gray-400">TOPICS</h3>
        <nav className="space-y-1">
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <LanguagesIcon className="w-6 h-6" />
            <span>Internet Culture</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <GamepadIcon className="w-6 h-6" />
            <span>Games</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <ReplyIcon className="w-6 h-6" />
            <span>Q&As</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <ComputerIcon className="w-6 h-6" />
            <span>Technology</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <VideoIcon className="w-6 h-6" />
            <span>Pop Culture</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <TvIcon className="w-6 h-6" />
            <span>Movies & TV</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <EllipsisIcon className="w-6 h-6" />
            <span>See more</span>
          </Link>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="mb-2 text-sm font-semibold text-gray-400">RESOURCES</h3>
        <nav className="space-y-1">
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <InfoIcon className="w-6 h-6" />
            <span>About ChubuForum</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <PlayIcon className="w-6 h-6" />
            <span>Advertise</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <HandHelpingIcon className="w-6 h-6" />
            <span>Help</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <BookIcon className="w-6 h-6" />
            <span>Blog</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <BuildingIcon className="w-6 h-6" />
            <span>Careers</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <NewspaperIcon className="w-6 h-6" />
            <span>Press</span>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            prefetch={false}>
            <UsersIcon className="w-6 h-6" />
            <span>Communities</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
