export default class Validator {
  constructor(form_name, form_value) {
    this.form_name = form_name;
    this.form_value = form_value;

    this.regexPhone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    this.regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  }

  validateStart() {
    if (this.form_name === 'email') return this.validateEmail(this.form_value)
    if (this.form_name === "phone") return this.validatePhone(this.form_value)
    if (this.form_name === "name") return this.validateName(this.form_value)
  }


  validateEmail(email) {
    if (email.length === 0) return 'Please enter Email';
    return this.regexEmail.test(email) ? null : "Invalid Email"
  };

  validatePhone(num) {
    if (num.length === 0) return 'Please enter phone number'
    if (num.length > 9 || num.length < 9) return "Phone number is invalid"
    if (num.includes(' ')) return "Invalids spaces in Phone no."
    if (!this.regexPhone.test(num)) return 'Phone contains characters'

  }

  validateName(name) {
    if (!name.length) return "Please enter name"
    if (name.length < 2) return 'Name must be atleast 2 characters'


  }


}










