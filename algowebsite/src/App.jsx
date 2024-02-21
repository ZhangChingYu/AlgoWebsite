import { Home } from "./pages";
import { ArrayPage, LinkedListPage } from './pages/subPage';
import { Routes, Route } from "react-router-dom";
 
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/array" element={<ArrayPage/>} />
        <Route path="/linkedList" element={<LinkedListPage/>}/>
      </Routes>
    </div>
  )
}

export default App
