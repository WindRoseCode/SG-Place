"use client";

import Link from "next/link";
import React from "react";
import {signIn} from "next-auth/react"


export default function Loginform(){
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      user: formData.get("user"),
      senha: formData.get("senha"),
    }
    
    signIn("credentials",{
      ...data,
      callbackUrl: "/home"
    });

  }



    return(
        <form onSubmit={login} id="loginForm">
        <div className="form-group">
          <input
          name="user"
            type="text"
            className="form-control border-2 px-3 py-1.5 w-full mb-4"
            id="usuario"
            placeholder="Usuário"
            required
          />
        </div>
        <div className="form-group">
          <input
          name="senha"
            type="password"
            className="form-control border-2 px-3 py-1.5 w-full mb-4"
            id="senha"
            placeholder="Senha"
            required
          />
        </div>

          <button type="submit" className="btn btn-login btn-lg px-4 py-2 w-full text-xl rounded-md">
            Entrar
          </button>
      </form>
    )
}