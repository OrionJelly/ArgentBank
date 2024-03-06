import './style.css'


export const Input = ({htmlFor, id, label,type, name, value, placeholder, disabled, onChange, autocomplete}) => {


    return (
    <div className='input-container'>
        <label className='label-element' htmlFor={htmlFor}>{label}</label>
        <input className='input-element'
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={onChange}
        ></input>
    </div>
    )
}