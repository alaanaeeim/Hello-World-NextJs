import User from "@/components/user";

const Users = ({ users }: any) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user: any) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default Users;

// Pre-loading Fetch data, such you use useEffect
export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return {
    props: {
      users: users,
    },
  };
}
