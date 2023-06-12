import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './componentes/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sobre' element={ <Sobre /> } />
        <Route path='/posts/:id' element= { <Post />} />
        <Route path='/categoria/:id/*' element={ <Categoria /> } />
        <Route path='*' element={ <Page404/> } />
      </Routes>            
    </Router>
  );
}

export default App;

/*
Instalacion de Librerias
  npm i react-router-dom libreria para poder trabajar con rutas
  npm i react-icons
  npm i json-server para forma global usaremos npm install -g json-server
  npm i axios

*/