import { ACTIONS } from "../utils/ACTIONS";
import { forumData } from "../utils/data";

export const initialDataState = {
  user: {
    id: forumData.accountId,
    username: forumData.username,
    name: forumData.name,
    picURL: forumData.picUrl,
  },
  posts: forumData.posts,
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.UPVOTE:
      draft.posts = draft.posts.map((post) =>
        post.postId === action.payload.postId ? action.payload : post
      );
      break;

    case ACTIONS.DOWNVOTE:
      draft.posts = draft.posts.map((post) =>
        post.postId === action.payload.postId ? action.payload : post
      );
      break;

    case ACTIONS.BOOKMARK:
      draft.posts = draft.posts.map((post) =>
        post.postId === action.payload.postId ? action.payload : post
      );
      break;

    default:
      break;
  }
};
