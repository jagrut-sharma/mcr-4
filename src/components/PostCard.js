import React from "react";
import AvatarEle from "./AvatarEle";
import { FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import {
  BsArrowDownCircleFill,
  BsArrowUpCircleFill,
  BsDot,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";

export default function PostCard({ post }) {
  const { dataDispatch } = useData();

  const handleUpvote = () => {
    const newPost = { ...post, upvotes: post.upvotes + 1 };
    dataDispatch({ type: ACTIONS.UPVOTE, payload: newPost });
  };

  const handleDownvote = () => {
    const newPost = { ...post, upvotes: post.upvotes - 1 };
    dataDispatch({ type: ACTIONS.UPVOTE, payload: newPost });
  };

  const handleBookmark = () => {
    const newPost = { ...post, isBookmarked: !post.isBookmarked };
    dataDispatch({ type: ACTIONS.BOOKMARK, payload: newPost });
  };

  return (
    <div className="my-4 bg-gray-200 shadow-md p-4 rounded-md flex gap-4">
      <div>
        <div className="flex flex-col gap-2 items-center">
          <div
            className={
              post.upvotes >= post.downvotes
                ? "hover:text-violet-800 cursor-pointer text-violet-600"
                : "hover:text-violet-600 cursor-pointer"
            }
            onClick={handleUpvote}
          >
            <BsArrowUpCircleFill size={"1.5rem"} />
          </div>
          <p>{post.upvotes - post.downvotes}</p>
          <div
            className={
              post.upvotes <= post.downvotes
                ? "hover:text-black cursor-pointer text-violet-600"
                : "hover:text-violet-600 cursor-pointer"
            }
            onClick={handleDownvote}
          >
            <BsArrowDownCircleFill size={"1.5rem"} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-sm">
          <AvatarEle name={post.name} imgLink={post.picUrl} />
          <p>
            Posted by{" "}
            <span className="text-violet-700 font-bold">@{post.username}</span>
          </p>

          <span>
            <BsDot color="#4b5563" />
          </span>

          <p className="font-bold text-[smaller]">
            {new Date(post?.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mt-2">{post.post}</h3>
        </div>

        <div className="flex gap-2 mt-1">
          {post.tags.map((tag, i) => (
            <p
              key={i}
              className="text-violet-600 bg-violet-300  px-2 rounded-full text-[small]"
            >
              {tag}
            </p>
          ))}
        </div>

        <p className="mt-3 pb-3 border-b border-b-gray-700">
          {post.postDescription}
        </p>

        <div className="flex justify-between mt-4">
          <div className="cursor-pointer hover:bg-violet-300 p-2 rounded-full">
            <Link to={`/post/${post.postId}`}>
              <FaRegCommentAlt size={"1rem"} />
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-violet-300 p-2 rounded-full">
            <FaShareAlt size={"1rem"} />
          </div>
          <div
            className={
              post.isBookmarked
                ? "cursor-pointer hover:bg-violet-300 p-2 rounded-full text-red-600 hover:text-white"
                : "cursor-pointer hover:bg-violet-300 p-2 rounded-full hover:text-red-600"
            }
            onClick={handleBookmark}
          >
            <BsFillBookmarkFill size={"1rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}
