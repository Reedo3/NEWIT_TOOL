import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login  from "./login"
import RegisterPage from "./Reg"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rstPass" element={<Login />} />
        <Route path="/ECDB" element={<Login />} />               
      </Routes>
    </BrowserRouter>
  )
}

export default App