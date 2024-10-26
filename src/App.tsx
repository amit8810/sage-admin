import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Organizations from './components/Organizations'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/organizations' element={<Organizations/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App