import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageBoard from '../components/MessageBoard';
import SignIn from '../components/SignIn';
import Register from '../components/Register';

const Landing = ({ setUser, toggleAuthenticated }) => {
    
    const [newUser, setNewUser] = useState(false)

    const handleClick= () => {
        if (newUser) {
            setNewUser(false)
        } else if (!newUser) {
            setNewUser(true)
        }
    }

    useEffect(()=> {

    })
    return (
        <div className="Landing-container">
            <div></div>
            <div className="Message-container">
                <MessageBoard />
            </div>
            {
                newUser ?
                    <div className="Prompt-container">
                        <Register />
                        <button onClick={() => handleClick()}>Back to Sign-in</button>
                    </div>
                :   <div className="Prompt-container">
                        <SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />
                        <button onClick={() => handleClick()}>Register</button>
                    </div>
            }
            <div></div>
        </div>
    )
}

export default Landing