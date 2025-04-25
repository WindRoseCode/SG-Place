
import Home from "@/componentes/Modulos/Modulos"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { use } from "react";

export default async function Index() {
      const session = await getServerSession();
        
        if(!session){
        redirect("/")
    
      }
    return (
        <>
            <Home/>
        </>
    )
}