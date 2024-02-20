import { Home } from "./pages";
import { ArrayPage } from './pages/subPage';
import { Routes, Route } from "react-router-dom";
 
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/array" element={<ArrayPage/>} />
      </Routes>
    </div>
  )
}

export default App
