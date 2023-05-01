import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/navbar/Header';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import './App.css';
import Mice from './pages/Mice';
import Mousepads from './pages/Mousepads';
import Keyboards from './pages/Keyboards';
import Headsets from './pages/Headsets';
import Mouse from './pages/detailsPages/Mouse';
import Search from './pages/Search';
import Mousepad from './pages/detailsPages/Mousepad'
import Keyboard from './pages/detailsPages/Keyboard';
import Headset from './pages/detailsPages/Headset';
import Product from './pages/detailsPages/Product';
import Contact from './pages/Contact';

function App() {

  const [mice, setMice] = useState([]);

  // const getMiceData = async () => {
  //   // const data = await MiceService.getAllMice();
  //   console.log(data)
  //   if(data){
  //     setMice(data);
  //   }
  // }

  useEffect(() => {
    // getMiceData();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/proizvodi" element={<Products />}/>
          <Route path="/proizvodi/:id" element={<Product />}/>
          <Route path="/misevi" element={<Mice />}/>
          <Route path="/podloge" element={<Mousepads />}/>
          <Route path="/tastature" element={<Keyboards />}/>
          <Route path="/slusalice" element={<Headsets />}/>
          <Route path="/misevi/:id" element={<Mouse />}/>
          <Route path="/podloge/:id" element={<Mousepad />}/>
          <Route path="/tastature/:id" element={<Keyboard />}/>
          <Route path="/slusalice/:id" element={<Headset />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/kontakt" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
