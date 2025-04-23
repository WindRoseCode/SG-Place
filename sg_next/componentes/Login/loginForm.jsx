"use client";

import Link from "next/link";
import React from "react";

export default function Loginform(){

    async function login(e:React.FormEvent<HTMLFormElement>){
        console.log(data);
    }

    return(
        <form onSubmit={login} id="loginForm">
        <div className="form-group">
          <input
            type="text"
            className="form-control border-2 px-3 py-1.5 w-full mb-4"
            id="usuario"
            placeholder="Usuário"
            //required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control border-2 px-3 py-1.5 w-full mb-4"
            id="senha"
            placeholder="Senha"
            //required
          />
        </div>
        <Link href="/home">
          <button type="submit" className="btn btn-login btn-lg px-4 py-2 w-full text-xl rounded-md">
            Entrar
          </button>
        </Link>
      </form>
    )
}