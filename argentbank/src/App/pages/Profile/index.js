import { Button } from '../../features/components/Button'
import { getUserProfile, getUserAccount } from './profileSlice'
import { useDispatch, useSelector } from 'react-redux'

import { AccountView } from '../../features/components/AccountView'

import './style.css'
import {
    selectFirstName,
    selectLastName,
    selectUserAccount,
    selectUserProfileId,
    selectUserToken,
} from '../../Store/selectors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userToken = useSelector(selectUserToken)
    const userId = useSelector(selectUserProfileId)

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

    const userAccount = useSelector(selectUserAccount)


    return (
        <main className="main-container-profile">
            <section className="form-container-profile">
                <h2 className="welcome-txt-profile">
                    Welcome back
                    <br />
                    {userFirstName} {userLastName}!
                </h2>
                <div className="container-edit-button">
                    <Button
                        content="Edit Name"
                        btn_type="submit"
                        action={() => null}
                    />
                </div>
            </section>
            <section className="view-container-profile">
                <ul className="account-container">
                    {userAccount && Object.entries(userAccount).map((account, idx) => (
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
