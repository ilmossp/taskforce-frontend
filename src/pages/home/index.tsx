import { useQuery } from "react-query";
import { getUser } from "~/lib/api/user";

export default function Home() {
  const query = useQuery("me", getUser);

  console.log(query.data);
  return <div>Home</div>;
}
