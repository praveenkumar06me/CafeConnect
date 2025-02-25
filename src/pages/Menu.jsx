import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import Cart from '../components/Cart';

const menuItems = {
  coffee: [
    {
      name: 'Espresso',
      price: '$3.50',
      description: 'Rich and bold single shot',
      image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=400&fit=crop'
    },
    {
      name: 'Cappuccino',
      price: '$4.50',
      description: 'Espresso with steamed milk and foam',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop'
    },
    {
      name: 'Latte',
      price: '$4.75',
      description: 'Espresso with steamed milk',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&h=400&fit=crop'
    },
    {
      name: 'Americano',
      price: '$3.75',
      description: 'Espresso with hot water',
      image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&h=400&fit=crop'
    }
  ],
  pastries: [
    {
      name: 'Croissant',
      price: '$3.50',
      description: 'Buttery, flaky pastry',
      image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&h=400&fit=crop'
    },
    {
      name: 'Muffin',
      price: '$3.25',
      description: 'Daily baked assorted flavors',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&h=400&fit=crop'
    },
    {
      name: 'Danish',
      price: '$3.75',
      description: 'Fruit-filled pastry',
      image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=500&h=400&fit=crop'
    },
    {
      name: 'Scone',
      price: '$3.25',
      description: 'Traditional butter scone',
      image: 'https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?w=500&h=400&fit=crop'
    }
  ],
  breakfast: [
    {
      name: 'Vegan Breakfast Bowl',
      price: '$8.50',
      description: 'Quinoa, roasted vegetables, avocado, and tofu scramble',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop'
    },
    {
      name: 'Oatmeal Bowl',
      price: '$6.50',
      description: 'Steel-cut oats with toppings',
      image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=500&h=400&fit=crop'
    },
    {
      name: 'Yogurt Parfait',
      price: '$6.75',
      description: 'Greek yogurt with granola and berries',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=400&fit=crop'
    }
  ]
};

const Menu = () => {
  const { addToCart, cart, setIsCartOpen } = useCart();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="py-12 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Our Menu</h1>
          <p className="text-lg text-brown-600">Carefully crafted and deliciously served</p>
        </motion.div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-brown-900 text-white p-4 rounded-full shadow-lg hover:bg-brown-800 transition-colors z-10"
        >
          <div className="relative">
            <FaShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-brown-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getTotalItems()}
              </span>
            )}
          </div>
        </button>

        <Cart />

        {Object.entries(menuItems).map(([category, items], index) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brown-800 capitalize">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex h-48">
                    <div className="w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-medium text-brown-900">{item.name}</h3>
                        <p className="text-brown-600 mt-1 text-sm">{item.description}</p>
                        <p className="text-brown-900 font-semibold mt-2">{item.price}</p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="mt-2 bg-brown-900 text-white px-4 py-2 rounded-full hover:bg-brown-800 transition-colors w-full text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Menu;