import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="py-12 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Contact Us</h1>
          <p className="text-lg text-brown-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-brown-900 mb-6">Get in Touch</h2>
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-green-500 text-5xl mb-4"
                >
                  ✓
                </motion.div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-800">
                  Thank you for reaching out. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brown-900 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-brown-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-brown-900" />
                  <p className="text-brown-700">+91 8319130565</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-brown-900" />
                  <p className="text-brown-700">praveenkumar06me@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaInstagram className="text-brown-900" />
                  <a
                    href="https://www.instagram.com/praveenkrpatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-700 hover:text-brown-900"
                  >
                    @praveenkrpatra
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLinkedin className="text-brown-900" />
                  <a
                    href="https://www.linkedin.com/in/praveenkrpatra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-700 hover:text-brown-900"
                  >
                    Praveen Kumar Patra
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brown-900 mb-6">Hours of Operation</h2>
              <div className="space-y-2">
                <p className="text-brown-700">Monday - Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;