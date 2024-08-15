import { useState } from "react";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import commentApi from "../../../apis/comment";
import validateComment from "./validator/validate-comment";
import { toast } from "react-toastify";

export default function AddComment({ postId }) {
  const { authUser } = useAuth();
  const { handleAddComment } = usePost();
  const [input, setInput] = useState({ message: "" });
  const [inputError, setInputError] = useState({ message: "" });

  const handleCreateComment = async () => {
    try {
      const error = validateComment(input);
      if (error) {
        return setInputError(error);
      } else {
        const commentResult = await commentApi.createComment(postId, input);
        handleAddComment(postId, commentResult.data.comment);
        toast.success("Post created successfully");
        setInput({ message: "" });
        setInputError({ message: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col justify-evenly items-center gap-3 py-4">
      <div className="flex justify-between items-center h-full w-full gap-4 pl-4 pr-8">
        <Avatar name={authUser.firstName} />
        <div className="flex flex-col w-5/6 px-4 py-1.5">
          <Input
            value={input.message}
            onChange={(e) => setInput({ message: e.target.value })}
            placeholder="Add a comment"
          />
          {inputError.message !== "" && (
            <p className="text-red-500 text-sm py-2">{inputError.message}</p>
          )}
        </div>
        <Button onClick={handleCreateComment} bg="green">
          Submit
        </Button>
      </div>
    </div>
  );
}
