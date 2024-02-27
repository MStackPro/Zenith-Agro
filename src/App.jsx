import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import Footer from './components/Footer';
import NotFound from './pages/notfound/NotFound';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App