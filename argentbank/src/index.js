//Import react router
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// Import react
import * as React from 'react'
import ReactDOM from 'react-dom/client'
// Import redux et store
import { Provider } from 'react-redux'
import { store } from './App/Store/store'
// Import Layout
import { Header } from './App/features/components/Header'
import { Footer } from './App/features/components/Footer'
// Import Pages
import { Home } from './App/pages/Home'
import { Login } from './App/pages/Login'
import { Profile } from './App/pages/Profile'
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// Import CSS
import './style.css'

import reportWebVitals from './reportWebVitals'

export const iconSignIn = <FontAwesomeIcon icon={faCircleUser} />
export const iconSignOut = <FontAwesomeIcon icon={faRightFromBracket} />

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <>
                <Header
                    title="Argent Bank"
                    imageSrc="./images/argentBankLogo.webp"
                />
                <Outlet />
                <Footer content="Copyright 2020 Argent Bank" />
            </>
        ),
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
       </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
