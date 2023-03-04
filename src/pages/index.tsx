import Link from "next/link";

const Home = () => {
  console.log(process.env.BASE_URL);

  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <h1>Blogs</h1>
      </Link>
    </div>
  );
};

export default Home;
