async function fetchData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const result = await res.json();
  return result;
}

const Post = async ({ params: { id } }) => {
  const post = await fetchData(id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author: {post.userId}</strong>
    </div>
  );
};

export default Post;
