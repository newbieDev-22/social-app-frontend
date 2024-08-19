import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import CommentItem from "./CommentItem";
import { DownArrow } from "../../../icons";

export default function CommentContainer({ comments, postId }) {
  const { authUser } = useAuth();
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col justify-evenly items-center gap-3 py-6">
      <div className="flex justify-between items-center h-full w-full gap-4 pl-4 pr-8 font-bold">
        <h3 className="text-lg font-semibold">Comment</h3>
        <DownArrow className={"w-8 h-8"} onClick={() => setIsShow(!isShow)} />
      </div>
      {isShow &&
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            isCommenter={comment.userId === authUser.id}
            postId={postId}
            commentId={comment.id}
            firstName={comment.user.firstName}
            lastName={comment.user.lastName}
            message={comment.message}
          />
        ))}
    </div>
  );
}
