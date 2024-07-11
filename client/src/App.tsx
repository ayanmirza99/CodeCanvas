import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './index.css'
import Home from './pages/Home'
import Compiler from './pages/Compiler'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/compiler' element={<Compiler/>}/>
    </Routes>
    </>
  )
}

export default App
