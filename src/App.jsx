import { Routes, Route } from 'react-router-dom';
import Ben from './Pages/Ben';
import './App.css'
import Iphone from './Pages/Iphone';
import Eiffel from './Pages/Eiffel';
import Footer from "./commos/Footer";
import Leftfooter from './commos/Leftfooter';
import Headers from "./commos/Headers";
import About from './Pages/About';
import BlogMain from './Pages/blogs/BlogMain';

function App() {
  return (
    <div className="flex flex-col">
              <h1 className=" text-6xl text-white">Hello World</h1>
        <Headers />
        <Routes>
          <Route path="/ben" element={<Ben />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/eiffel" element={<Eiffel />} />
          <Route path="/about" element={<About />} />
          <Route path='blogs' element={<BlogMain />} />
        </Routes>
      <Footer />
      <Leftfooter />
      
    </div>
  )
}

export default App
