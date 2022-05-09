import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSession } from './services/Auth';
import Navbar from './components/Nav';
import Home from'./pages/Home';
import Explore from './pages/Explore';
import MyLibrary from './pages/MyLibrary';
import MyAccount from './pages/MyAccount';



function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        { user ? 
          <Route path = "/" element={<Home
            user={user}
            authenticated={authenticated}
          />} />
        : <Route path="/" element={<Landing 
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated}
          />} />
        }
        
      </Routes>
    </div>
  );
}

export default App;
