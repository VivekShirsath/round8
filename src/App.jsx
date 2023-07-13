import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details'

function App() {
  return (
    <div className="bg-primary_bg min-h-screen">
      <Routes>
        <Route>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/home/:id" element = {<Details />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
