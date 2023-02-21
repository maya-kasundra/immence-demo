// import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Success from './Pages/auth/Success'
import Login from './Pages/auth/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
