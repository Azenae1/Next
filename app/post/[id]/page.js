import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

async function fetchData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  if (!res.ok) {
    throw new Error(`Не удалось загрузить пост с id ${id}: ${res.statusText}`);
  }
  const result = await res.json();
  return result;
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error(`Can't load posts: ${res.statusText}`);
  }
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const PagePost = async ({ params: { id } }) => {
  try {
    const post = await fetchData(id);
    return (
      <div className="post">
        <Post post={post} />
      </div>
    );
  } catch (error) {
    return <div>Error occured: {error.message}</div>;
  }
};

export default PagePost;
