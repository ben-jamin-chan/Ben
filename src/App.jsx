import { Routes, Route } from 'react-router-dom';
import Ben from './Pages/Ben';
import './App.css'
import Iphone from './Pages/Iphone';
import Eiffel from './Pages/Eiffel';
import Header from './commos/Header';
import Footer from "./commos/Footer";


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/ben" element={<Ben />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/eiffel" element={<Eiffel />} />
        </Routes>
      <Footer />
    </>
    
  )
}

export default App
