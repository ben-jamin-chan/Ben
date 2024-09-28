import { Routes, Route } from 'react-router-dom';
import Ben from './Pages/Ben';
import './App.css'
import Iphone from './Pages/Iphone';
import Eiffel from './Pages/Eiffel';


function App() {


  return (
    <>
      <Routes>
        <Route path="/ben" element={<Ben />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/eiffel" element={<Eiffel />} />
      </Routes>

    </>
  )
}

export default App
