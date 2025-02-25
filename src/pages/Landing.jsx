import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCoffee, FaMugHot, FaUsers, FaHeart, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaCoffee className="h-8 w-8" />,
      title: "Premium Coffee",
      description: "Expertly crafted beverages using the finest beans"
    },
    {
      icon: <FaMugHot className="h-8 w-8" />,
      title: "Cozy Ambiance",
      description: "A perfect space for work, meetings, or relaxation"
    },
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: "Community",
      description: "A gathering place for coffee lovers and friends"
    },
    {
      icon: <FaHeart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every cup served with care and passion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-900 to-brown-800">
      <div className="relative min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
            alt="Coffee Shop"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH5nZAcWUQNLQ/profile-displayphoto-shrink_400_400/B4DZTROIRNHkAk-/0/1738676931523?e=1746057600&v=beta&t=M6N5eQr4PtHqwqEsbEBZR5KNzGd2zK9-BSqiYysavvg"
                alt="Logo"
                className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Backbencher's
            </h1>
            <p className="text-xl md:text-2xl text-brown-100 mb-12">
              Where every cup tells a story and every moment becomes a memory
            </p>
            
            <motion.button
              onClick={() => navigate('/login')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-brown-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="bg-brown-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-brown-900 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-brown-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-brown-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-brown-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQH5nZAcWUQNLQ/profile-displayphoto-shrink_400_400/B4DZTROIRNHkAk-/0/1738676931523?e=1746057600&v=beta&t=M6N5eQr4PtHqwqEsbEBZR5KNzGd2zK9-BSqiYysavvg"
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-lg font-semibold">The Backbencher's</h3>
              </div>
              <p className="text-sm text-brown-100">
                Creating memorable moments, one cup at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <p className="text-sm">Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p className="text-sm">Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/praveenkrpatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-200"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/praveenkrpatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} The Backbencher's. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;