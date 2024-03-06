// Import React router
import { useNavigate } from 'react-router-dom'

// Import React
import { useEffect, useState } from 'react'

// Import React Redux
import { useDispatch, useSelector } from 'react-redux'

// Import Selectors
import {
    selectFirstName,
    selectLastName,
    selectUserAccount,
    selectUserName,
    selectUserProfileId,
    selectUserToken,
} from '../../Store/selectors'

// Import store
import { getUserAccount, changeUserName } from './profileSlice'

// Import components
import { AccountView } from '../../features/components/AccountView'
import { Input } from '../../features/components/Input/Input'
import { Button } from '../../features/components/Button'

// Import CSS
import './style.css'

// Component

export const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userToken = useSelector(selectUserToken)
    const userId = useSelector(selectUserProfileId)

//Condition if user isn't logged in return to /login
    useEffect(() => {
        if (userToken === undefined) {
            navigate('/login')
        }
    })
    useEffect(() => {
        if (userId) {
            dispatch(getUserAccount(userId))
        }
    }, [userId, dispatch])

    const userFirstName = useSelector(selectFirstName)
    const userLastName = useSelector(selectLastName)
    const userUserName = useSelector(selectUserName)
    const userAccount = useSelector(selectUserAccount)

    const [newUserName, setNewUserName] = useState('')
    const [toggle, setToggle] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')
// object to fetch changeUserName
    const myData = {
        token: userToken,
        userName: newUserName,
    }

    const toggleState = () => {
        setToggle(!toggle)
    }
    const clearErrorMsg = () => {
        setErrorMsg('')
    }
// set new username if not empty input or same username
    const handleUserName = (e) => {
        e.preventDefault()
        if (newUserName === userUserName || newUserName === '') {
            setErrorMsg('This username is already registered')
            setTimeout(clearErrorMsg, 2000)
        } else dispatch(changeUserName(myData)).then(toggleState())
    }

    return (
        <main className="main-container-profile">
            <section className="form-container-profile">
                {toggle ? (
                    <>
                        <h2 className="welcome-txt-profile">
                            Welcome back
                            <br />
                            {userFirstName} {userLastName}!
                        </h2>
                        <div className="container-edit-button">
                            <Button
                                content="Edit Name"
                                btn_type="button"
                                action={toggleState}
                            />
                        </div>
                    </>
                ) : (
                    <form
                        className="form-container-edit-user"
                        onSubmit={handleUserName}
                    >
                        <h2>Edit user info</h2>
                        <Input
                            label="User name:"
                            htmlFor="username"
                            placeholder={userUserName}
                            type="text"
                            name="username"
                            id="username"
                            autocomplete="username"
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <Input
                            label="First name:"
                            htmlFor="firstname"
                            placeholder={userFirstName}
                            type="text"
                            name="firstname"
                            id="firstname"
                            disabled={true}
                        />
                        <Input
                            label="Last name:"
                            htmlFor="lastname"
                            placeholder={userLastName}
                            type="text"
                            name="lastname"
                            id="lastname"
                            disabled={true}
                        />
                        <div className="error-msg">{errorMsg}</div>
                        <div className="form-container-button">
                            <Button content="Save" type="submit" />
                            <Button
                                content="Cancel"
                                type="button"
                                action={toggleState}
                            />
                        </div>
                    </form>
                )}
            </section>
            <section className="view-container-profile">
                <ul className="account-container">
                    {userAccount &&
                        Object.entries(userAccount).map((account, idx) => (
                            <AccountView
                                key={idx}
                                accountName={account[1]?.accountName}
                                transactions={account[1]?.transactions}
                                amount={account[1]?.balance}
                                content="Available balance"
                            />
                        ))}
                </ul>
            </section>
        </main>
    )
}
