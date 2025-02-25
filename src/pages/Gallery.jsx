import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const images = [
  {
    url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    title: "Our Cozy Corner",
    description: "A perfect spot for your morning coffee"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    title: "Artisan Coffee",
    description: "Carefully crafted by our expert baristas"
  },
  {
    url: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24",
    title: "Study Space",
    description: "Where ideas brew with coffee"
  },
  {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    title: "Community Events",
    description: "Where friendships are formed"
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    title: "Coffee Art",
    description: "Every cup is a masterpiece"
  },
  {
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    title: "Morning Vibes",
    description: "Start your day with us"
  }
];

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-12 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-brown-600">Capturing moments at The Backbencher's</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              variants={hoverVariants}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-semibold mb-2"
                  >
                    {image.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-sm"
                  >
                    {image.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-brown-700 mb-6">
            Follow us on Instagram for daily updates and behind-the-scenes moments
          </p>
          <motion.a
            href="https://www.instagram.com/praveenkrpatra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-brown-900 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram size={20} />
            <span>@praveenkrpatra</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;