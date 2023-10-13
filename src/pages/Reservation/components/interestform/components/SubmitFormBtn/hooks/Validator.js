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
    if (this.form_name === "timeFrom" || this.form_name === "timeTo" || this.form_name === "timeMeridiemTo" || this.form_name === "timeMeridiemFrom") {
      return this.validateTime(this.form_value)
    }
  }

  validateName(name) {

    if (!name.length) return "Please enter name"
    if (name.length < 2) return 'Name must be atleast 2 characters'
    return null
  }

  validateEmail(email) {
    if (email.length === 0) return 'Please enter Email';
    return this.regexEmail.test(email) ? null : "Invalid Email"
    return null
  };

  validatePhone(num) {
    if (num.length < 10 || num.lenght > 10) return 'Please enter a valid phone number'
    return null
  }

  validateTime(time) {
    if (time === "--") return "Please complete time selection"
    return null
  }




}










