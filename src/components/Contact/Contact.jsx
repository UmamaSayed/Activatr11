import React, { useState } from 'react'
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		// Logic to handle form submission
		// For demonstration purposes, let's just show the success message
		setShowSuccessMessage(true)
		// Reset form fields after submission
		setName('')
		setEmail('')
		setPhone('')
		// Hide success message after 3 seconds
		setTimeout(() => {
			setShowSuccessMessage(false)
		}, 3000)
	}
  return (
    <div>
    <div id="get-started" className="g-wrapper">
    <div className='r-head flexColStart flexCenter line'>
        <span className='orangeText '>Our Contact Us</span>
        <span className='primaryText'>For Getting Started</span>
        <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
      </div>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Contact Us</span>
          <div className="contact-form">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:  </label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<button type="submit" className='button'>Submit</button>
			</form>
			{showSuccessMessage && (
				<div className="success-message">
					Message Sent Successfully!
				</div>
			)}
		</div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Contact;
