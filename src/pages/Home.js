import React from "react";
import { useData } from "../context/dataContext";
import PostCard from "../components/PostCard";

export default function Home() {
  const {
    dataState: { posts },
    currCategory,
  } = useData();

  let sortedArr = [...posts];

  if (currCategory === "Recent") {
    sortedArr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    sortedArr.sort((a, b) => {
      const voteA = a.upvotes - a.downvotes;
      const voteB = b.upvotes - b.downvotes;

      return voteB - voteA;
    });
  }

  return (
    <main className="px-4 flex w-full justify-center">
      <div className=" max-w-[40rem]">
        <h2 className="text-xl font-Merriweather font-bold">Latest Posts</h2>

        <div className="mt-4">
          {sortedArr.map((post) => {
            return <PostCard key={post.postId} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
