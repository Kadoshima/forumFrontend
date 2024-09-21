import React from "react";
import Layout from "@/app/(main)/Layout";
import TrendingPosts from "@/components/post/TrendingPosts";
import PostList from "@/components/post/PostList";
import Post from "@/types/PostTypes";

export default function Home(): JSX.Element {
  const trendingPosts: Post[] = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      title: "Fatman Scoop dead at 53",
      description: "Fatman Scoop dies aged 53 as he collab...",
      subChubuForum: "/r/hiphopheads and more",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      title: "Fatman Scoop dead at 53",
      description: "Fatman Scoop dies aged 53 as he collab...",
      subChubuForum: "/r/hiphopheads and more",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      title: "Fatman Scoop dead at 53",
      description: "Fatman Scoop dies aged 53 as he collab...",
      subChubuForum: "/r/hiphopheads and more",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      title: "Fatman Scoop dead at 53",
      description: "Fatman Scoop dies aged 53 as he collab...",
      subChubuForum: "/r/hiphopheads and more",
    },
  ];

  const posts: Post[] = [
    {
      subChubuForum: "r/AskChubuForum",
      timeAgo: "8 hr. ago",
      title:
        "You're the last men/women on earth. Everyone else has the opposite sex. What do you do?",
      upvotes: "3.6K",
      comments: "5.2K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/baseball",
      timeAgo: "2 hr. ago",
      title:
        "[Highlight] Back to back to back home run from Shohei Ohtani, Mookie Betts & Freddie Freeman",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      upvotes: "2.4K",
      comments: "1.1K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/AskChubuForum",
      timeAgo: "8 hr. ago",
      title:
        "You're the last men/women on earth. Everyone else has the opposite sex. What do you do?",
      upvotes: "3.6K",
      comments: "5.2K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/baseball",
      timeAgo: "2 hr. ago",
      title:
        "[Highlight] Back to back to back home run from Shohei Ohtani, Mookie Betts & Freddie Freeman",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      upvotes: "2.4K",
      comments: "1.1K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/AskChubuForum",
      timeAgo: "8 hr. ago",
      title:
        "You're the last men/women on earth. Everyone else has the opposite sex. What do you do?",
      upvotes: "3.6K",
      comments: "5.2K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/baseball",
      timeAgo: "2 hr. ago",
      title:
        "[Highlight] Back to back to back home run from Shohei Ohtani, Mookie Betts & Freddie Freeman",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      upvotes: "2.4K",
      comments: "1.1K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/AskChubuForum",
      timeAgo: "8 hr. ago",
      title:
        "You're the last men/women on earth. Everyone else has the opposite sex. What do you do?",
      upvotes: "3.6K",
      comments: "5.2K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/baseball",
      timeAgo: "2 hr. ago",
      title:
        "[Highlight] Back to back to back home run from Shohei Ohtani, Mookie Betts & Freddie Freeman",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      upvotes: "2.4K",
      comments: "1.1K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/AskChubuForum",
      timeAgo: "8 hr. ago",
      title:
        "You're the last men/women on earth. Everyone else has the opposite sex. What do you do?",
      upvotes: "3.6K",
      comments: "5.2K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
    {
      subChubuForum: "r/baseball",
      timeAgo: "2 hr. ago",
      title:
        "[Highlight] Back to back to back home run from Shohei Ohtani, Mookie Betts & Freddie Freeman",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      upvotes: "2.4K",
      comments: "1.1K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/250px-Donald_Trump_official_portrait.jpg",
      description: "",
    },
  ];

  return (
    <Layout>
      <TrendingPosts posts={trendingPosts} />
      <PostList posts={posts} />
    </Layout>
  );
}
