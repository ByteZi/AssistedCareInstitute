import './ErrItem.css'

const ErrItem = (errors, item) =>
    errors[item] &&
    <p className="err-item">{errors[item]}</p>

export default ErrItem