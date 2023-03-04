import Link from "next/link";

const Posts = ({ posts }: any) => {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
            <h1>
              {post.id} - {post.title}
            </h1></Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts,
    },
  };
};
