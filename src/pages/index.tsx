import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  
    
  return (
    <>
      <Head>
        <title>TaskForce</title>
        <meta name="description" content="Team task manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-32 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to TaskForce
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Your new collaborative task management tool
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="register">Register</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
