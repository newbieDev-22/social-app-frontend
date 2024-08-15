import axios from "../config/axios";

const commentApi = {};

commentApi.createComment = (postId, message) =>
  axios.post(`/comments/post/${postId}`, message);
commentApi.updateComment = (commentId, message) =>
  axios.patch(`/comments/${commentId}`, message);
commentApi.deleteComment = (commentId) => axios.delete(`/comments/${commentId}`);

export default commentApi;
