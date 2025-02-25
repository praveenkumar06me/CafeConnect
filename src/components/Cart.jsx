import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlus, FaMinus, FaShoppingCart, FaLock, FaCoffee } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setOrderPlaced(false);
      setIsCheckingOut(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
      onClick={() => setIsCartOpen(false)}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween' }}
        className="bg-white w-full max-w-md h-full shadow-xl overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-brown-900 flex items-center">
              <FaShoppingCart className="mr-2" />
              {orderPlaced ? 'Order Confirmed!' : isCheckingOut ? 'Checkout' : 'Your Cart'}
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-brown-900 hover:text-brown-700"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {orderPlaced && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex items-center justify-center flex-col text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="text-green-500 text-6xl mb-4"
              >
                ✓
              </motion.div>
              <h3 className="text-xl font-semibold text-brown-900 mb-2">Thank you for your order!</h3>
              <p className="text-brown-600">Your order has been confirmed and will be ready soon.</p>
            </motion.div>
          )}

          {!orderPlaced && cart.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center px-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 bg-brown-100 rounded-full flex items-center justify-center mb-6"
              >
                <FaCoffee className="w-12 h-12 text-brown-900" />
              </motion.div>
              <h3 className="text-xl font-semibold text-brown-900 mb-3">Your cart is empty</h3>
              <p className="text-brown-600 mb-8">Looks like you haven't added any items yet. Start your coffee journey with us!</p>
              <Link
                to="/menu"
                onClick={() => setIsCartOpen(false)}
                className="bg-brown-900 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition-colors inline-flex items-center"
              >
                Browse Menu
              </Link>
            </motion.div>
          )}

          {!orderPlaced && cart.length > 0 && isCheckingOut && (
            <form onSubmit={handlePlaceOrder} className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={checkoutInfo.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={checkoutInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={checkoutInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    required
                    value={checkoutInfo.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-brown-900 mb-2">Order Summary</h3>
                  {cart.map((item) => (
                    <div key={item.name} className="flex justify-between text-sm text-brown-600 mb-1">
                      <span>{item.name} x {item.quantity}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold text-brown-900 mt-2 pt-2 border-t">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-3 px-4 bg-brown-900 text-white rounded-full hover:bg-brown-800 transition-colors flex items-center justify-center"
              >
                <FaLock className="mr-2" size={14} />
                Place Order (${getTotalPrice().toFixed(2)})
              </button>
              <button
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="mt-2 w-full py-2 px-4 border border-brown-900 text-brown-900 rounded-full hover:bg-brown-50 transition-colors"
              >
                Back to Cart
              </button>
            </form>
          )}

          {!orderPlaced && cart.length > 0 && !isCheckingOut && (
            <>
              <div className="flex-1 overflow-y-auto">
                {cart.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 border-b border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-brown-900">{item.name}</h3>
                      <p className="text-brown-600">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="p-1 text-brown-900 hover:text-brown-700"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="p-1 text-brown-900 hover:text-brown-700"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-brown-900">Total:</span>
                  <span className="text-lg font-semibold text-brown-900">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 px-4 bg-brown-900 text-white rounded-full hover:bg-brown-800 transition-colors flex items-center justify-center"
                  >
                    <FaLock className="mr-2" size={14} />
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 px-4 border border-brown-900 text-brown-900 rounded-full hover:bg-brown-50 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;