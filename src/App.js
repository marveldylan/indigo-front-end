import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import { useState, useEffect,createContext } from 'react';
import { CheckSession } from './services/Auth';
import Navbar from './components/Navbar';
import Home from'./pages/Home';
import SearchPage from './pages/SearchPage';
import Explore from './pages/Explore';
import MyLibrary from './pages/MyLibrary';
import MyAccount from './pages/MyAccount';
import ExploreGroups  from './pages/ExploreGroups';
import CategoryDetails from './pages/CategoryDetails';
import ExploreChannels  from './pages/ExploreChannels';
import ExploreCreators  from './pages/ExploreCreators';
import NotSignedIn from './pages/NotSignedin';
import { GetUserById } from "./services/UserServices";
import { UserContext } from './contexts/userContext';



function App() {

  // const UserContext = createContext()

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [navState, setNavState] = useState('Navbar-uncollapsed')
  const [homeState, setHomeState] = useState('Home-uncollapsed')

  const handleNav = () => {
      if(navState === 'Navbar-uncollapsed'){
          setNavState('Navbar-collapsed')
          setHomeState('Home-collapsed')
          console.log(navState, homeState)
      } else  if (navState === 'Navbar-collapsed') {
          setNavState('Navbar-uncollapsed')
          setHomeState('Home-uncollapsed')
          console.log(navState, homeState)
      }
  }


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
    console.log('App.js useEffect1 fired')
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  useEffect(()=> {
    console.log('App.js useEffect 2 fired')
    const handleUser = async (id) => {
        const data = await GetUserById(id)
        setCurrentUser(data.user)
        console.log(currentUser)
    }
    if (user) {
      handleUser(user.id)
    }
}, [user])


  return (
    <div className="App">
        { user ?
          <UserContext.Provider value={currentUser}>
          <div className={homeState}>
            <div className="Margin"></div>
            <div className="Nav-wrapper">
                <div className="Nav-collapse">
                    <button onClick={()=>handleNav()}>Collapse</button>
                </div>
                <Navbar 
                    user = {user} 
                    currentUser = {currentUser} 
                    authenticated = {authenticated} 
                    handleLogout = {handleLogout} 
                    navState = {navState}
                />
            </div>
            <div className="Viewport-container">
              <Routes>
                <Route path = "/" element={<Home
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                  />
                } />
                <Route path = "/search" element={<SearchPage
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/library" element={<MyLibrary
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore" element={<Explore
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/groups" element={<ExploreGroups
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/categories/:id" element={<CategoryDetails
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/channels" element={<ExploreChannels
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/creators" element={<ExploreCreators
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/account" element={<MyAccount
                  user={user}
                  currentUser={currentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
            </Routes>
            </div>
            <div className="Margin"></div>
          </div>
          </UserContext.Provider>
        :  <Routes>
            <Route path="/" element={<Landing 
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              />
            } />
            <Route path = "/search" element={<NotSignedIn />} />
            <Route path = "/library" element={<NotSignedIn />} />
            <Route path = "/explore" element={<NotSignedIn />} />
            <Route path = "/explore/groups" element={<NotSignedIn />} />
            <Route path = "/explore/groups/:id" element={<NotSignedIn />} />
            <Route path = "/explore/channels" element={<NotSignedIn />} />
            <Route path = "/explore/channels/:id" element={<NotSignedIn />} />
            <Route path = "/explore/creators" element={<NotSignedIn />} />
            <Route path = "/explore/creators/:id" element={<NotSignedIn />} />
            <Route path = "/account" element={<NotSignedIn />} />
            </Routes>
        }

        
    </div>
  );
}

export default App;
