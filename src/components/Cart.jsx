import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaTimes, FaPlus, FaMinus, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancelOrder = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancelOrder = () => {
    setIsCheckingOut(false);
    setShowCancelConfirm(false);
    setCheckoutForm({
      name: '',
      address: ''
    });
  };

  const handleCloseSuccess = () => {
    clearCart();
    setIsCartOpen(false);
    setOrderPlaced(false);
    setIsCheckingOut(false);
    setCheckoutForm({
      name: '',
      address: ''
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    // Auto close after 5 seconds unless user closes it manually
    setTimeout(() => {
      if (orderPlaced) {
        handleCloseSuccess();
      }
    }, 5000);
  };

  // Rest of the component remains the same until the orderPlaced section
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-brown-900">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-brown-500 hover:text-brown-700"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* ... Rest of the cart content remains the same ... */}

              {orderPlaced && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-center p-6">
                    <button
                      onClick={handleCloseSuccess}
                      className="absolute top-4 right-4 text-brown-500 hover:text-brown-700"
                    >
                      <FaTimes size={24} />
                    </button>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-green-500 text-4xl"
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-semibold text-brown-900 mb-2"
                    >
                      Order Placed Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-brown-600"
                    >
                      Thank you for your order. We'll start preparing it right away!
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-brown-400 mt-4"
                    >
                      This message will close automatically in 5 seconds
                    </motion.p>
                  </div>
                </motion.div>
              )}

              {showCancelConfirm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="bg-white rounded-lg p-6 max-w-sm w-full"
                  >
                    <h3 className="text-xl font-semibold text-brown-900 mb-4">Cancel Order?</h3>
                    <p className="text-brown-600 mb-6">Are you sure you want to cancel your order? Your cart items will be preserved.</p>
                    <div className="flex gap-3">
                      <button
                        onClick={confirmCancelOrder}
                        className="flex-1 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        Yes, Cancel
                      </button>
                      <button
                        onClick={() => setShowCancelConfirm(false)}
                        className="flex-1 px-4 py-2 bg-brown-900 text-white rounded-full hover:bg-brown-800 transition-colors"
                      >
                        No, Keep Order
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;