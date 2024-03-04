import { Button } from '../Button'
import './style.css'

export const AccountView = ({
    accountName,
    transactions,
    amount,
    content,
    imageSrc,
    imageAlt,


}) => {


    return (
        <li className="accountView-main-container">
            <div className="accountView-info">
            <p>Argent Bank{accountName} (x{transactions})</p>
            <p className='accountView-amount'>${amount}</p>
            <p>{content}</p>
            <Button content="View Transactions"/>
            </div>
        </li>
    )
}