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

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setOrderPlaced(false);
      setIsCheckingOut(false);
      setCheckoutForm({
        name: '',
        address: ''
      });
    }, 2000);
  };

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

              {cart.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-brown-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-4 border-b border-brown-100"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-brown-900">{item.name}</h3>
                          <p className="text-brown-600">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="text-brown-600 hover:text-brown-900"
                          >
                            <FaMinus size={14} />
                          </button>
                          <span className="text-brown-900 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="text-brown-600 hover:text-brown-900"
                          >
                            <FaPlus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-700 ml-4"
                          >
                            <FaTimes size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between font-semibold text-brown-900 pt-4 border-t">
                      <span>Total:</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>

                    {isCheckingOut ? (
                      <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <label className="flex items-center text-sm font-medium text-brown-700 mb-1">
                              <FaUser className="mr-2" /> Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={checkoutForm.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                              placeholder="Enter your name"
                            />
                          </div>

                          <div>
                            <label className="flex items-center text-sm font-medium text-brown-700 mb-1">
                              <FaMapMarkerAlt className="mr-2" /> Delivery Address
                            </label>
                            <textarea
                              name="address"
                              required
                              value={checkoutForm.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                              placeholder="Enter your delivery address"
                              rows="2"
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="submit"
                            className="flex-1 py-3 px-4 bg-brown-900 text-white rounded-full hover:bg-brown-800 transition-colors flex items-center justify-center"
                          >
                            <FaLock className="mr-2" size={14} />
                            Place Order (₹{getTotalPrice().toFixed(2)})
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelOrder}
                            className="px-4 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <button
                        onClick={() => setIsCheckingOut(true)}
                        className="w-full py-3 px-4 bg-brown-900 text-white rounded-full hover:bg-brown-800 transition-colors"
                      >
                        Checkout
                      </button>
                    )}
                  </div>
                </>
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

              {orderPlaced && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white flex items-center justify-center"
                >
                  <div className="text-center p-6">
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
                  </div>
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