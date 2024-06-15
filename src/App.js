import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';

import { Carousel } from 'react-bootstrap';
import Products from './Components/Module/Products';
import About from './Components/Pages/About';
import Add from './Components/Pages/Admin/Category/Add';
import Home from './Components/Pages/Home';

function App() {
  return (
    <BrowserRouter>


      <Routes>
        
          <Route path="/" element= {<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/a
            
            bout" element={<About/>}/>
            <Route path="/layout" element={<Layout/>}/>
            <Route path="/carousel" element={<Carousel/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/add" element={<Add/>}/>
        
       
          </Route>
          </Routes>
           
    </BrowserRouter>
  );
}

export default App;