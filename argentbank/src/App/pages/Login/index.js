// Import react router
import { useNavigate } from 'react-router-dom'
//Import react
import { useState } from 'react'

//Import redux and store
import { useDispatch } from 'react-redux'
import { loginThunk } from './userSlice'
import { getUserProfile } from '../Profile/profileSlice'
// Import components
import { Input } from '../../features/components/Input/Input'
import { Button } from '../../features/components/Button'
// import CCS and fontawesome
import './style.css'
import { iconSignIn } from '../../..'


//Component

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
// Object to fetch loginThunk
    const userLogs = {
        email: userName,
        password: password,
    }
    const [credentialsError, setCredentialsError] = useState('')
    const clearErrorMsg = () => {
        setCredentialsError('')
    }

// Fetch loginThunk and getUserProfile, redirect to /profile or set error message
    const submitLogs = (e) => {
        e.preventDefault()
       dispatch(loginThunk(userLogs)).then((result) => {
            if (result.payload) {
            dispatch(getUserProfile(result.payload))
            navigate('../profile')
            } else {
                setCredentialsError("Please check your credentials")
                    setTimeout(clearErrorMsg, 2000
                    )
       }
        })
    }
    return (
        <main className="main-container-login">
            <section className="sign-in-content">
                {iconSignIn}
                <h2 className="section-title">Sign in</h2>
                <form action="#" method="post" onSubmit={submitLogs}>
                    <div className='credentials-error'>
                    {credentialsError}
                    </div>
                        <Input
                            htmlFor="username"
                            label="Username"
                            type="text"
                            name="username"
                            id="username"
                            value={userName}
                            autocomplete="username"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <Input
                            htmlFor="password"
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            autocomplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    <div className="remember-me__container">
                        <input type="checkbox" id="remember-me"></input>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button
                        className="button-underline"
                        btn_type="submit"
                        content="Sign in"
                    />
                </form>
            </section>
        </main>
    )
}

export default Login
