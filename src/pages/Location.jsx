import { motion } from 'framer-motion';

const Location = () => {
  return (
    <div className="py-12 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Visit Us</h1>
          <p className="text-lg text-brown-600">Find us in the heart of Purulia</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">Main Location</h2>
            <div className="space-y-4">
              <p className="text-brown-700">
                Near Clock Tower<br />
                Purulia<br />
                West Bengal, India
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-brown-900 mb-2">Hours</h3>
                <p className="text-brown-700">Monday - Sunday: 10:00 AM - 10:00 PM</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-brown-900 mb-2">Contact</h3>
                <p className="text-brown-700">Phone: +91 8319130565</p>
                <p className="text-brown-700">Email: praveenkumar06me@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
              alt="Café exterior"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-brown-900 mb-8 text-center">Getting Here</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-brown-700">
              Located in the heart of Purulia, The Backbencher's is easily accessible by various modes of transportation. You'll find us near the iconic Clock Tower, a central landmark in the city. Whether you're walking, driving, or using public transport, our café is conveniently situated to serve you your daily dose of happiness.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;