import useAuth from "../../../hooks/useAuth";
import CommentItem from "./CommentItem";

export default function CommentContainer({ comments, postId }) {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-col justify-evenly items-center gap-3 py-6">
      <h3 className="text-lg font-semibold">Comment</h3>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          isCommenter={comment.userId === authUser.id}
          postId={postId}
          commentId={comment.id}
          commenterName={comment.user.firstName}
          message={comment.message}
        />
      ))}
    </div>
  );
}
