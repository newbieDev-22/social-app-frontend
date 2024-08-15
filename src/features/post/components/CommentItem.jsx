import { useState } from "react";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import usePost from "../../../hooks/usePost";
import commentApi from "../../../apis/comment";
import Input from "../../../components/Input";
import { toast } from "react-toastify";

export default function CommentItem({
  postId,
  commentId,
  isCommenter,
  commenterName,
  message,
}) {
  const { handleUpdateComment, handleDeleteComment } = usePost();
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState(message);

  const handleEdit = async () => {
    if (isEdit) {
      await commentApi.updateComment(commentId, { message: editComment });
      handleUpdateComment(postId, commentId, { message: editComment });
      setIsEdit(false);
      toast.success("Comment updated successfully");
    } else {
      setIsEdit(true);
    }
  };

  const handleDelete = async () => {
    await commentApi.deleteComment(commentId);
    handleDeleteComment(postId, commentId);
    toast.success("Comment deleted successfully");
  };

  return (
    <div className="flex justify-between items-center h-full w-full gap-4 pl-4 pr-8">
      <Avatar name={commenterName} />
      {isEdit ? (
        <Input value={editComment} onChange={(e) => setEditComment(e.target.value)} />
      ) : (
        <p className="w-5/6 px-4 ">{message}</p>
      )}
      {isCommenter && (
        <div className="flex gap-2">
          <Button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</Button>
          <Button onClick={handleDelete} bg="red">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
