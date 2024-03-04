import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../features/components/Button'

import './style.css'
import { iconSignIn } from '../../..'

import { useDispatch } from 'react-redux'
import { loginThunk } from './userSlice'
import { getUserProfile } from '../Profile/profileSlice'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userLogs = {
        email: userName,
        password: password,
    }

    const submitLogs = (e) => {
        e.preventDefault()
        dispatch(loginThunk(userLogs)).then((result) => {
            if (result.payload) {
            dispatch(getUserProfile(result.payload))
            navigate('../profile')
            }
        })
    }
    return (
        <main className="main-container-login">
            <section className="sign-in-content">
                {iconSignIn}
                <h2 className="section-title">Sign in</h2>
                <form action="#" method="post" onSubmit={submitLogs}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={userName}
                            autoComplete='username'
                            onChange={(e) => setUserName(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
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
