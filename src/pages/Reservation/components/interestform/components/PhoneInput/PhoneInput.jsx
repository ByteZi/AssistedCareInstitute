

const PhoneInput = (phone, setPhone) => {

    const handleInput = (e) => {
        const formattedPhone = formatPhone(e.target.value)
        setPhone(formattedPhone)
    }

    const formatPhone = (val) => {
        if (!val) return val
        const phoneNumber = val.replace(/[^\d]/g, '');
        const phoneLength = val.length
        if (phoneLength > 4) return phoneNumber
        if (phoneLength > 7) return `(${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)})`
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`
   
    }

    return <input type="text"
        value={phone}
        onChange={e => handleInput(e)}
        maxLength={10}
        placeholder='Telephone'
        name="phone"
        className="interestform-input"
    />
}

export default PhoneInput