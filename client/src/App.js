import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Rubros from './Components/Rubros/Rubros';



function App() {
  return (
    
      <BrowserRouter>
        <Routes>

          <Route
          path='/'
          element={<Home/>}
          />

          <Route
          path='/Rubros'
          element={<Rubros />}
          />

        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
