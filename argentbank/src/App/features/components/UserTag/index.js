import './style.css'

export const UserTag = ({icon, content}) => {

    return (
        <div className="container-usertag">{icon}{content}</div>
    )
}