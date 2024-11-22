import './App.css';
import Sgweb from './componentes/Header/header';
import Login from './componentes/Login/login';
import Fotter from './componentes/Fotter/fotter';

function App() {
  return (
    <header>
    <Sgweb/>
    
    <main>
    <Login/>
    </main>

    <Fotter/>
    </header>
  )
}

export default App;
