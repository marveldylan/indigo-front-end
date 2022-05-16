import { useState } from "react";
import { SignInUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUser, toggleAuthenticated }) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: ''})

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: ''})
        setUser(payload)
        toggleAuthenticated(true)
        navigate('/')
    }

    return(
        <div>
            <form className='Sign-in-form'>
                <input 
                    type="email"
                    name="email"
                    value={formValues.email}
                    placeholder="email"
                    onChange={handleChange}
                    required
                    className='Post-update-form'
                />

                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    placeholder="password"
                    onChange={handleChange}
                    required
                    className='Post-update-form'
                    autoComplete="on"
                />
            <button className="Post-button" onClick={handleSubmit} disabled={!formValues.email || !formValues.password}>Log In</button>
            </form>
        </div>
    )
}

export default SignIn