import React, { useState } from 'react';
import "./ContactForm.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState(false);
  const [telephone, setTelephone] = useState("");
  const [telephoneValidation, setTelephoneValidation] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [textAreaValidation, setTextAreaValidation] = useState(false);
  
  const updateData = (event) => {
    switch(event.target.name) {
      case "firstName":
        setFirstName(event.target.value)
        setFirstNameValidation(true)
        break;
      case "lastName":
        setLastName(event.target.value);
        setLastNameValidation(true)
        break;
      case "telephone":
        setTelephone(event.target.value);
        setTelephoneValidation(true)
        break;
      case "email":
        setEmail(event.target.value);
        setEmailValidation(true)
        break;
      case "textArea":
        setTextArea(event.target.value);
        setTextAreaValidation(true)
        break;
      default:
        break;
    }
  }
  return (
    <div className='contact-form-container'>
        <h2> Write us how we can serve you </h2>
        <p> Fill out the form below and we will get back to you shortly. </p>
        <form className='contact-form'>
           <div className='contact-form-input-container'>
            <div>
              <input type="text" name="firstName" value={firstName} onChange={updateData} placeholder='First Name'/>
              <div className={ firstNameValidation && firstName.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your first name </div>
            </div>

            <div>
              <input type="text" name='lastName' value={lastName} onChange={updateData} placeholder='Last Name' />
              <div className={ lastNameValidation && lastName.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your last name </div>
            </div>

            <div>
              <input type="tel" name='telephone' value={telephone} onChange={updateData} placeholder='Telephone' />
              <div className={ telephoneValidation && telephone.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your telephone number </div>
            </div>

            <div>
              <input type="email" name="email" value={email} onChange={updateData} placeholder='Email' />
              <div className={ emailValidation && email.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your email </div>
            </div>
           </div>
          <div className='contact-form-textarea-container'>
            <textarea name="textArea" cols="30" rows="10" value={textArea} onChange={updateData} placeholder='Write us message here'></textarea>
            <div className={ textAreaValidation && textArea.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please write us message </div>
           </div>
        </form>
        <button className='contact-submit-btn'> Submit </button>
    </div>
  )
}

export default ContactForm;