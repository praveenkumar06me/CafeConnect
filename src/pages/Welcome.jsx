import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Welcome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const quotes = [
    "Coffee: because every great day starts here.",
    "Life happens, coffee helps.",
    "Behind every successful person is a substantial amount of coffee.",
    "The perfect moment starts with the perfect brew."
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brown-100 to-brown-300 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full space-y-8 bg-white p-12 rounded-xl shadow-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-brown-900"
        >
          Welcome, {user?.name}!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-brown-700"
        >
          {quotes[Math.floor(Math.random() * quotes.length)]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-brown-600">
            We're excited to have you here at The Backbencher's. Get ready to experience the perfect blend of comfort and taste.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-brown-900 hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
          >
            Start Exploring
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;