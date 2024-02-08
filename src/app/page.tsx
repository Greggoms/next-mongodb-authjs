import { auth } from "@/auth";

export default async function Home() {
  const user = await auth();
  console.log("user:", user);

  return (
    <main className="container mt-5 mb-10">
      <h1>Hello World!</h1>
    </main>
  );
}
