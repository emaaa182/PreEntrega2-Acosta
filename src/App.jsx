import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
