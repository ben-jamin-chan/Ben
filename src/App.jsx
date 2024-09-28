import { Routes, Route } from 'react-router-dom';
import Ben from './Pages/Ben';
import './App.css'
import Iphone from './Pages/Iphone';

function App() {


  return (
    <>
      <Routes>
        <Route path="/ben" element={<Ben />} />
        <Route path="/iphone" element={<Iphone />} />
      </Routes>

    </>
  )
}

export default App
