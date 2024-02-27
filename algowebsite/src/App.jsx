import { Home } from "./pages";
import { ArrayPage, LinkedListPage, StackPage } from './pages/subPage';
import { Routes, Route } from "react-router-dom";
 
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/array" element={<ArrayPage/>} />
        <Route path="/linkedList" element={<LinkedListPage/>}/>
        <Route path="/stack" element={<StackPage/>}/>
      </Routes>
    </div>
  )
}

export default App
