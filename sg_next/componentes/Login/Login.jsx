import './login.css';
import Loginform from "@/componentes/Login/loginForm"

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="font-sans text-5xl font-medium mb-5">Login</h1>
          <Loginform/>
          <p className="mt-6 mb-4">
            Esqueceu sua senha? <a href="#" className='text-blue-700'>Clique aqui</a>
          </p>
          <p id="mensagem" className="text-danger mb-4"></p>
        </div>
      </div>
    </>
  );
}   