import React, { useState } from "react";
import emailjs from 'emailjs-com';

function App() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_8y585qi', 'template_rlv171e', e.target, 'LS0KcXi3uPgexxbgJ')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {},
    loading: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required";
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      loading: true,
    });

    // Simulate form submission delay
    setTimeout(() => {
      console.log(formData);
      setFormData({
        ...formData,
        loading: false,
      });
    }, 2000);
  };

  return (
    <form onSubmit={sendEmail}>
      <label>
        Name:
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        {formData.errors.from_name && (
          <p style={{ color: "red" }}>{formData.errors.from_name}</p>
        )}
      </label>
      <label>
        Email:
        <input
          type="text"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
        />
        {formData.errors.from_email && (
          <p style={{ color: "red" }}>{formData.errors.from_email}</p>
        )}
      </label>
      <label>
      to_name:
        <input
          type="text"
          name="to_name"
          value={formData.to_name}
          onChange={handleChange}
        />
        {formData.errors.to_name && (
          <p style={{ color: "red" }}>{formData.errors.to_name}</p>
        )}
      </label>
      <label>
        Message:
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {formData.errors.message && (
          <p style={{ color: "red" }}>{formData.errors.message}</p>
        )}
      </label>
      <input type="submit" value="Submit" disabled={formData.loading} />
      {formData.loading && (
        <div style={{ marginTop: 5, fontWeight: "bold" }}>Loading...</div>
      )}
    </form>
  );
}
export default App;