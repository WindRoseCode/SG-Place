"use client";

import Link from "next/link";
import React from "react";


export default function Loginform(){

    async function login(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      const formData = new FormData(e.currentTarget);
      console.log(formData.get("user"));
      console.log(formData.get("senha"));

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