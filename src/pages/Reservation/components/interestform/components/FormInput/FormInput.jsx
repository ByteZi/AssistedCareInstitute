import './FormInput.css'

const FormInput = ({ type = "text", name, max = 30, onChange=null, value}) => {

    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1)

    return <input
        className="interestform-input"
        type={type}
        name={name}
        placeholder={nameUpper}
        maxLength={max}
        onChange={onChange}
        value={value}
    />
}

export default FormInput