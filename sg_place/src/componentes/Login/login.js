import './login.css'
function Login (){
    return (
        <div className="login-container">
          <div className="login-box">
            <h1>Login</h1>
            <form id="loginForm">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usuario"
                  placeholder="Usuário"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Senha"
                  required
                />
              </div>
              <button type="submit" className="btn btn-login btn-lg">
                Entrar
              </button>
            </form>
            <p className="mt-4">
              Esqueceu sua senha? <a href="#">Clique aqui</a>
            </p>
            <p id="mensagem" className="text-danger"></p>
          </div>
        </div>
      );



}   

export default Login