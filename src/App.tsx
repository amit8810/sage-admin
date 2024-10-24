import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Admin from './components/Admin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App