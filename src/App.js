import { Carousel } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Products from './Components/Module/Products';
import About from './Components/Pages/About';
import Add from './Components/Pages/Admin/Category/Add';
import List from './Components/Pages/Admin/Category/List';
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
            <Route path="/admin/category/add" element={<Add/>}/>
            <Route path="/admin/category/list" element={<List/>}/>

        
       
          </Route>
          </Routes>
           
    </BrowserRouter>
  );
}

export default App;