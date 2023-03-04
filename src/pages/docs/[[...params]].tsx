import { useRouter } from "next/router";

const Docs = () => {
  const rout = useRouter();
  const { params = [] } = rout.query;
  console.log(params);

  if (params.length === 1) {
    return <h1>Viewewd Feature - {params[0]}</h1>;
  } else if (params.length === 2) {
    return <h1>Viewewd Concept - {params[1]}</h1>;
  } else {
    return <h1>Docs Page</h1>;
  }
};

export default Docs;