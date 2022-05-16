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
import GroupDetails from './pages/GroupDetails';
import ChannelDetails from './pages/ChannelDetails';
import CreateChannel from './pages/CreateChannel';
import CreateGroup from './pages/CreateGroup';
import ExploreChannels  from './pages/ExploreChannels';
import EditProfile from './pages/EditProfile';
import UserProfile from './pages/UserProfile';
import NotSignedIn from './pages/NotSignedin';
import { GetUserById } from "./services/UserServices";
import { UserContext } from './contexts/userContext';



function App() {

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
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  useEffect(()=> {
    console.log('App.js useEffect setCurrenUser fired')
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
          <UserContext.Provider value={[currentUser, setCurrentUser]}>
          <div className={homeState}>
            <div className="Margin"></div>
            <div className="Nav-wrapper">
                <div className="Nav-collapse">
                    <button className="Post-button" onClick={()=>handleNav()}>X</button>
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
                <Route path = "/create/group" element={<CreateGroup
                  user={user}
                  setUser={setCurrentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/groups" element={<ExploreGroups
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/groups/:id" element={<GroupDetails
                  user={user}
                  setUser={setCurrentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/categories/:id" element={<CategoryDetails
                  user={user}
                  setUser={setCurrentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
              <Route path = "/create/channel" element={<CreateChannel
                  user={user}
                  setUser={setCurrentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/explore/channels" element={<ExploreChannels
                  user={user}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/channels/:id" element={<ChannelDetails
                  user={user}
                  setUser={setCurrentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/account" element={<MyAccount
                  user={user}
                  currentUser={currentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/edit-profile" element={<EditProfile
                  user={user}
                  currentUser={currentUser}
                  authenticated={authenticated}
                  handleLogout={handleLogout}
                />} />
                <Route path = "/users/:id" element={<UserProfile
                  user={user}
                  setUser={setCurrentUser}
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
            <Route path = "/explore/categories" element={<NotSignedIn />} />
            <Route path = "/categories" element={<NotSignedIn />} />
            <Route path = "/create/group" element={<NotSignedIn />} />
            <Route path = "/explore/groups" element={<NotSignedIn />} />
            <Route path = "/groups/:id" element={<NotSignedIn />} />
            <Route path = "/create/channel" element={<NotSignedIn />} />
            <Route path = "/explore/channels" element={<NotSignedIn />} />
            <Route path = "/channels/:id" element={<NotSignedIn />} />
            <Route path = "/account" element={<NotSignedIn />} />
            <Route path = "/users/:id" element={<NotSignedIn />} />
            </Routes>
        }

        
    </div>
  );
}

export default App;
