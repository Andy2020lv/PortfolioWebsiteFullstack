import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [sent, setSent] = React.useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setSent(false);
    const sendFormData = async () => {
      try {
        const response = await axios.post("/send-email", formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (formData.name && formData.email && formData.message) {
      sendFormData();
    }
    // Re-post api call when an email is sent
  }, [sent]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="contact"
      className="contact"
    >
      <h1 className="title">Contact</h1>
      <div className="inputs">
        <form
          onSubmit={function (e) {
            e.preventDefault();
            setFormData({ name: "", email: "", message: "" });
          }}
        >
          <input
            name="name"
            id="name"
            className="form-input form-control"
            type="text"
            placeHolder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          ></input>
          <input
            id="email"
            name="email"
            className="form-input form-control"
            type="email"
            placeHolder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          ></input>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="form-input form-control"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            onClick={() => setSent(true)}
            className="button btn-contact"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
