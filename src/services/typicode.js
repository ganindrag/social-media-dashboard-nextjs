const BASEURL = "https://jsonplaceholder.typicode.com/";

const fetcher = (path, ...params) =>
  fetch(`${BASEURL}${path}`, ...params).then((res) => res.json());

export const getUsers = () => fetcher("users");

export const getPosts = (userId) => {
  const queryParam = userId ? `?userId=${userId}` : "";
  return fetcher(`posts${queryParam}`);
};

export const deletePost = (postId) =>
  fetcher(`posts/${postId}`, { method: "DELETE" });

export const createPost = (data) =>
  fetcher("posts", { method: "POST", body: JSON.stringify(data) });

export const getPost = (postId) => fetcher(`posts/${postId}`);

export const updatePost = (id, data) =>
  fetcher(`posts/${id}`, { method: "PUT", body: JSON.stringify(data) });

export const getComments = (postId) => fetcher(`posts/${postId}/comments`);

export const getComment = (id) => fetcher(`comments/${id}`);

export const createComment = (data) =>
  fetcher("comments", { method: "POST", body: JSON.stringify(data) });

export const updateComment = (id, data) =>
  fetcher(`comments/${id}`, { method: "PUT", body: JSON.stringify(data) });

export const deleteComment = (commentId) =>
  fetcher(`comments/${commentId}`, { method: "DELETE" });

export const getAlbums = (userId) => {
  const queryParam = userId ? `?userId=${userId}` : "";
  return fetcher(`albums${queryParam}`);
};

export const getAlbum = (id) => fetcher(`albums/${id}`);

export const getPhotos = (albumId) => fetcher(`albums/${albumId}/photos`);
