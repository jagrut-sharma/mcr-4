import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import PostCard from "../components/PostCard";
import AvatarEle from "../components/AvatarEle";
import { BsDot } from "react-icons/bs";

export default function SinglePostPage() {
  const { postID } = useParams();
  const {
    dataState: { posts },
  } = useData();

  const selectedPost = posts.find(({ postId }) => postId === postID);

  return (
    <main className="px-4 w-full flex justify-center">
      <div className="max-w-[40rem]">
        <PostCard post={selectedPost} />

        {selectedPost.comments.length ? (
          <div className="my-4 bg-gray-200 shadow-md p-4 rounded-md">
            {selectedPost.comments.map((comment) => {
              return (
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <AvatarEle name={comment.name} imgLink={comment.picUrl} />

                    <div className="flex flex-col">
                      <p>{comment.name}</p>
                      <p>
                        Replying to{" "}
                        <span className="text-violet-700 font-bold">
                          @{selectedPost.username}
                        </span>
                      </p>
                    </div>

                    <span>
                      <BsDot color="#4b5563" />
                    </span>

                    <p className="font-bold text-[smaller]">
                      {new Date(comment?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <div className="mt-2 px-2">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
