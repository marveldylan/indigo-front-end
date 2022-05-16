import { useState } from "react";
import { RegisterUser } from '../services/Auth';
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/')
    }

    return(
        <div className="Register-container">
            <form className="Register-form" onSubmit={handleSubmit}>
            <input
            className="Post-update-form"
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            required
            />
            <input
            className="Post-update-form"
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            required
            />
            <input
            className="Post-update-form"
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            required
            />
            <input
            className="Post-update-form"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
            />
            <input
            className="Post-update-form"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            required
            />
            <input
            className="Post-update-form"
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
            />
            <button className='RPost-button'
                disabled={
                !formValues.email ||
                (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
            >
                Register
            </button>
            </form>
        </div>
    )
}

export default Register