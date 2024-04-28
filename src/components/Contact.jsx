import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/api/contact', formData);
          console.log(response.data); // Assuming Laravel sends back a success message
          // Clear form data after successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return (
        <div className="form-container" id="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Send Us A Message!</h1>
                </div>
                <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <input type="email" id="email" placeholder="Email" value={formData.name} onChange={handleChange} required/>
                <input type="text" id="phone" placeholder="Subject" value={formData.name} onChange={handleChange} required/>
                <textarea id="message" placeholder="Message" rows="4" value={formData.name} onChange={handleChange} ></textarea>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>

    //     <form onSubmit={handleSubmit}>
    //         <input
    //             type="text"
    //             name="name"
    //             placeholder="Your Name"
    //             value={formData.name}
    //             onChange={handleChange}
    //         />
    //         <input
    //             type="email"
    //             name="email"
    //             placeholder="Your Email"
    //             value={formData.email}
    //             onChange={handleChange}
    //         />
    //         <input
    //             type="subject"
    //             name="subject"
    //             placeholder="Your Subject"
    //             value={formData.subject}
    //             onChange={handleChange}
    //         />
    //         <textarea
    //             name="message"
    //             placeholder="Your Message"
    //             value={formData.message}
    //             onChange={handleChange}
    //         ></textarea>
    //     <button type="submit">Submit</button>
    //   </form>
    )
}

export default Contact;
