import axios from "../config/axios";

const postApi = {};

postApi.createPost = (message) => axios.post("/posts", message);
postApi.updatePost = (postId, message) => axios.patch(`/posts/${postId}`, message);
postApi.deletePost = (postId) => axios.delete(`/posts/${postId}`);
postApi.getAllPosts = () => axios.get("/posts");

export default postApi;
