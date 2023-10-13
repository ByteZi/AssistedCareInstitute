import { useState } from "react"

const PhoneFormat = () => {
    const [phone, setPhone] = useState('')
    const handleInput = e => {
        const phoneFormat = formatPhoneNumber(e.target.value)
        setPhone(phoneFormat)
    }

    return 
}

export default PhoneFormat



const formatPhoneNumber = (val) => {
    if (!val) return val
    const phoneNumber = val.replace(/[^\d]/g, '');
    const phoneLength = val.length

    if (phoneLength > 4) return phoneNumber
    if (phoneLength > 7) return `(${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)})`
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`
}