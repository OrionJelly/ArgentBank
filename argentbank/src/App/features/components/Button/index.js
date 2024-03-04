import './style.css'

export const Button = ({
    btn_type,
    content,
    action

}) => {

    return (
        <button type={btn_type} onClick={action}>{content}</button>
    )
}