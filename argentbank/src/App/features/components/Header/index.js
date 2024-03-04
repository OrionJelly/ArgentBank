import { NavLink, useLocation } from 'react-router-dom'
import { Link } from '../Link'
import './style.css'


import { iconSignIn, iconSignOut } from '../../../..'
import { UserTag } from '../UserTag'
import { useDispatch, useSelector} from 'react-redux'
import { userSlice } from '../../../pages/Login/userSlice'
import { profileSlice } from '../../../pages/Profile/profileSlice'
import { selectUserName } from '../../../Store/selectors'


export const Header = ({ title, imageSrc, imageAlt }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const userName = useSelector(selectUserName)


    const handleLogOut = () => {
        dispatch(userSlice.actions.removeUserData())
        dispatch(profileSlice.actions.removeUserData())
    }
    return (
        <header>
            <NavLink to="/" className="logo-container">
                <h1 className="sr-only">{title}</h1>
                <img
                    className="main-nav-logo-image"
                    src={imageSrc}
                    alt={imageAlt}
                />
            </NavLink>
            <nav>
                {location.pathname !== '/profile' ? (
                    <Link path="/login" icon={iconSignIn} linkName="Sign Up" />
                ) : (
                    <div className="main-nav-link">
                        <UserTag icon={iconSignIn} content={userName} />
                        <Link  icon={iconSignOut} linkName="Log Out" onClick={handleLogOut} />
                    </div>
                )}
            </nav>
        </header>
    )
}
