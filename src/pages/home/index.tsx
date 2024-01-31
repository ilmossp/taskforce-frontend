import { useAtom } from "jotai";

import { userAtom } from "~/lib/state/atoms";

export default function Home() {
  const [user] = useAtom(userAtom);
  return <div>Welcome back {user?.name}</div>;
}
