import './login.css';
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="font-sans text-5xl font-medium mb-5">Login</h1>
          <form id="loginForm">
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
          <p className="mt-6 mb-4">
            Esqueceu sua senha? <a href="#" className='text-blue-700'>Clique aqui</a>
          </p>
          <p id="mensagem" className="text-danger mb-4"></p>
        </div>
      </div>
    </>
  );
}   