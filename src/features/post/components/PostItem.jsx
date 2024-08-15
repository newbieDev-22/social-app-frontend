import { useState } from "react";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import AddComment from "./AddComment";
import CommentContainer from "./CommentContainer";
import Input from "../../../components/Input";
import postApi from "../../../apis/post";
import usePost from "../../../hooks/usePost";
import { toast } from "react-toastify";

export default function PostItem({ postId, isCreator, creator, content, comments }) {
  const [isEdit, setIsEdit] = useState(false);
  const { handleUpdatePost, handleDeletePost } = usePost();
  const [editContent, setEditContent] = useState(content);

  const handleEdit = async () => {
    if (isEdit) {
      await postApi.updatePost(postId, { message: editContent });
      handleUpdatePost(postId, { message: editContent });
      setIsEdit(false);
      toast.success("Post updated successfully");
    } else {
      setIsEdit(true);
    }
  };

  const handleDelete = async () => {
    await postApi.deletePost(postId);
    handleDeletePost(postId);
    toast.success("Post deleted successfully");
  };

  return (
    <div className="shadow-md border border-gray-300 rounded-lg my-4 md:w-3/5 sm: w-4/5 m-auto py-2">
      <div className="flex justify-evenly items-center pt-4">
        <div className="flex justify-between items-center h-full w-full gap-4 pl-4 pr-8">
          <Avatar name={creator} />
          {isEdit ? (
            <Input value={editContent} onChange={(e) => setEditContent(e.target.value)} />
          ) : (
            <p className="w-5/6 px-4 ">{content}</p>
          )}
          {isCreator && (
            <div className="flex gap-2">
              <Button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</Button>
              <Button onClick={handleDelete} bg="red">
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
      {comments.length > 0 && (
        <div className="border mx-6 my-4 rounded-lg">
          <CommentContainer comments={comments} postId={postId} />
        </div>
      )}
      <div className="border mx-6 my-4 rounded-lg">
        <AddComment postId={postId} />
      </div>
    </div>
  );
}
