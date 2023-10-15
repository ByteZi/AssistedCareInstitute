

const PhoneInput = ({ phone, setPhone }) => {

    const handleInput = (e) => {
        const formattedPhone = formatPhone(e.target.value)
        setPhone(formattedPhone)
    }

    const formatPhone = (val) => {
        if (!val) return val
        const phone = val.replace(/[^\d]/g, '');
        const phoneLength = val.length
        
        // if (phoneLength < 4) return phone
        // if (phoneLength < 7) return `(${phone.slice(0,3)}) ${phone.slice(3)}`
        // return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`

        if (phoneLength === 10) return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`
        return phone
        }

    return <input type="text"
        value={phone}
        onChange={e => handleInput(e)}
        maxLength={10}
        placeholder='Phone'
        name="phone"
        className="interestform-input"
    />

}

export default PhoneInput