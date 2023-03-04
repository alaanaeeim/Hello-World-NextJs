import Link from "next/link";

const Post = ({ post }: any) => {
  console.log('post -------------- > ', post)
  return (
    <>
      <h1>Post Information</h1>
      <h1>
        {" "}
        {post.id} - {post.title}{" "}
      </h1>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
    paths,
    fallback: false,  // true || false || blocking
  };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  return {
    props: {
      post: post,
    },
  };
};
