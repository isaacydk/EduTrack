import { Route, Routes } from 'react-router-dom'
import StudentLogin from './features/auth/StudentLogin.tsx'
// import './App.css'

function App() {
  return(
    <Routes>
      <Route index element={<StudentLogin />} />
    </Routes>
  )
}

export default App
