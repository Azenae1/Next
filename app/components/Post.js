const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author: {post.userId}</strong>
    </div>
  );
};

export default Post;
