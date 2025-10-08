import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    switch (name) {
      case 'name':
        sanitizedValue = value.replace(/[^a-zA-Z\s\-'.]/g, '');
        break;
      case 'email':
        sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        break;
      case 'phone':
        sanitizedValue = value.replace(/[^0-9+\-\s]/g, '');
        break;
      case 'message':
        sanitizedValue = value.replace(/<[^>]*>/g, '');
        break;
      default:
        break;
    }
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const generateWhatsAppLink = () => {
    const baseUrl = "https://wa.me/212622664410";
    const message = `Hello Mohcine! I'm ${formData.name}.${formData.email ? ` My email is ${formData.email}.` : ""}${formData.phone ? ` My phone number is ${formData.phone}.` : ""}${formData.message ? `\n\nMessage: ${formData.message}` : ""}`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    window.open(generateWhatsAppLink(), '_blank');
  };

  return (
    <section id="contact" className="pt-24 pb-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <div className="max-w-xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faWhatsapp} className="text-6xl text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-100">Contact via WhatsApp</h3>
        <p className="text-gray-400 mb-6 text-center">
          Feel free to reach out for collaborations, job opportunities, or just to say hello!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              pattern="[A-Za-z\s\-'.]+"
              placeholder="Your Name *"
              required
              maxLength={50}
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-purple-500"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Your Email *"
              required
              maxLength={100}
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-purple-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              pattern="[0-9+\-\s]+"
              placeholder="Your Phone Number (optional)"
              maxLength={20}
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-purple-500"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message (optional)"
                rows="4"
                maxLength={500}
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Start Chat
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            <span>Mohcine Hasbaoui</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>+212 622 664410</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
