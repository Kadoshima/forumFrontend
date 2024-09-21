/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pYoeOMSuspr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 p-4 bg-gray-800">
        <div className="flex items-center mb-8">
          <RssIcon className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">reddit</span>
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
          <h3 className="mb-2 text-sm font-semibold text-gray-400">
            RESOURCES
          </h3>
          <nav className="space-y-1">
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
              prefetch={false}>
              <InfoIcon className="w-6 h-6" />
              <span>About Reddit</span>
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
      <main className="flex-1 p-4">
        <header className="flex items-center justify-between mb-8">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search Reddit"
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
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 bg-gray-800">
            <img
              src="/placeholder.svg"
              alt="Fatman Scoop"
              className="w-full h-32 object-cover rounded-md mb-4"
              width="300"
              height="150"
              style={{ aspectRatio: "300/150", objectFit: "cover" }}
            />
            <h3 className="text-lg font-bold">Fatman Scoop dead at 53</h3>
            <p className="text-sm text-gray-400">
              Fatman Scoop dies aged 53 as he collab...
            </p>
            <p className="text-xs text-gray-500">/r/hiphopheads and more</p>
          </Card>
          <Card className="p-4 bg-gray-800">
            <img
              src="/placeholder.svg"
              alt="Concord sales"
              className="w-full h-32 object-cover rounded-md mb-4"
              width="300"
              height="150"
              style={{ aspectRatio: "300/150", objectFit: "cover" }}
            />
            <h3 className="text-lg font-bold">Concord sales</h3>
            <p className="text-sm text-gray-400">
              IGN: Concord Is Estimated to Have Sold...
            </p>
            <p className="text-xs text-gray-500">/r/gaming and more</p>
          </Card>
          <Card className="p-4 bg-gray-800">
            <img
              src="/placeholder.svg"
              alt="Itsuno leaving Capcom"
              className="w-full h-32 object-cover rounded-md mb-4"
              width="300"
              height="150"
              style={{ aspectRatio: "300/150", objectFit: "cover" }}
            />
            <h3 className="text-lg font-bold">Itsuno leaving Capcom</h3>
            <p className="text-sm text-gray-400">
              Hideaki Itsuno is leaving Capcom...
            </p>
            <p className="text-xs text-gray-500">/r/games and more</p>
          </Card>
          <Card className="p-4 bg-gray-800">
            <img
              src="/placeholder.svg"
              alt="WWE Bash in Berlin"
              className="w-full h-32 object-cover rounded-md mb-4"
              width="300"
              height="150"
              style={{ aspectRatio: "300/150", objectFit: "cover" }}
            />
            <h3 className="text-lg font-bold">WWE Bash in Berlin</h3>
            <p className="text-sm text-gray-400">
              Post WWE Bash in Berlin 2024
            </p>
            <p className="text-xs text-gray-500">/r/SquaredCircle and more</p>
          </Card>
        </section>
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-white">
                Hot
              </Button>
              <Button variant="ghost" className="text-gray-400">
                Japan
              </Button>
              <Button variant="ghost" className="text-gray-400">
                <ExpandIcon className="w-5 h-5" />
              </Button>
            </div>
            <Button variant="ghost" className="text-gray-400">
              <FlipVerticalIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-4">
            <Card className="p-4 bg-gray-800">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    r/AskReddit • 8 hr. ago
                  </p>
                  <p className="text-lg font-bold">
                    You're the last men/women on earth. Everyone else has the
                    opposite sex. What do you do?
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ThumbsUpIcon className="w-5 h-5" />
                      <span>3.6K</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ReplyIcon className="w-5 h-5" />
                      <span>5.2K</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ShareIcon className="w-5 h-5" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
                <Button variant="secondary" className="text-white">
                  Join
                </Button>
              </div>
            </Card>
            <Card className="p-4 bg-gray-800">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    r/baseball • 2 hr. ago
                  </p>
                  <p className="text-lg font-bold">
                    [Highlight] Back to back to back home run from Shohei
                    Ohtani, Mookie Betts & Freddie Freeman
                  </p>
                  <img
                    src="/placeholder.svg"
                    alt="Shohei Ohtani"
                    className="w-full h-48 object-cover rounded-md mt-4"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <div className="flex items-center space-x-4 mt-2">
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ThumbsUpIcon className="w-5 h-5" />
                      <span>2.4K</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ReplyIcon className="w-5 h-5" />
                      <span>1.1K</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1">
                      <ShareIcon className="w-5 h-5" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
                <Button variant="secondary" className="text-white">
                  Join
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <aside className="w-64 p-4 bg-gray-800">
        <h3 className="mb-4 text-lg font-bold">POPULAR COMMUNITIES</h3>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>r/explainlikeimfive</span>
            </Link>
            <span className="text-sm text-gray-400">22,915,815 members</span>
          </li>
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>r/IAmA</span>
            </Link>
            <span className="text-sm text-gray-400">22,551,272 members</span>
          </li>
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>r/classicwow</span>
            </Link>
            <span className="text-sm text-gray-400">606,984 members</span>
          </li>
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>r/Instagram</span>
            </Link>
            <span className="text-sm text-gray-400">938,051 members</span>
          </li>
          <li className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              prefetch={false}>
              <GroupIcon className="w-6 h-6" />
              <span>r/NintendoSwitch</span>
            </Link>
            <span className="text-sm text-gray-400">6,948,075 members</span>
          </li>
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
    </div>
  );
}

function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function ComputerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function EllipsisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function ExpandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function FlipVerticalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </svg>
  );
}

function GamepadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function GroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function HandHelpingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LanguagesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function NewspaperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function ReplyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function RssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function ThumbsUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function TvIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
