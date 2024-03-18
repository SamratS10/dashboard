import './App.css'
import Dashboard from './components/dashboard'
import SignIn from './components/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
