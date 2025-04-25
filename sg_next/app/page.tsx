import Login from "@/componentes/Login/Login";
import { getSession } from "next-auth/react";


export default async function Home() {
  const session = await getSession()

  return (
    <>
      <Login/>
    </>
  );
}

