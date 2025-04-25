"use client"

import { signOut } from "next-auth/react";

export default function LogoutButton(){

    return(<button className="btn bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onClick={()=>signOut()} >Sair</button>);
}