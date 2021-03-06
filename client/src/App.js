import 'antd/dist/antd.css';
import { Button } from 'antd';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
             <Route path='/home' element={<Home />} />
             <Route path='/items' element={<Items />} />
        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
