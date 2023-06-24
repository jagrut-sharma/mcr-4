import React from "react";
import { useData } from "../context/DataContext";
import PostCard from "../components/PostCard";

export default function Home() {
  const {
    dataState: { posts },
  } = useData();

  return (
    <main className="px-4 flex w-full justify-center">
      <div className=" max-w-[40rem]">
        <h2 className="text-xl font-Merriweather font-bold">Latest Posts</h2>

        <div className="mt-4">
          {posts.map((post) => {
            return <PostCard key={post.postId} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
