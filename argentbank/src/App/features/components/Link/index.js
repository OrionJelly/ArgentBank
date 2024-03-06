import { NavLink } from 'react-router-dom'

export const Link = ({ path, linkName, icon, onClick }) => {
    return (
        <div>
            <NavLink to={path} onClick={onClick}>
                {icon}
                {linkName}
            </NavLink>
        </div>
    )
}
