import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Our Story</h1>
          <p className="text-lg text-brown-600">A journey of passion and dedication</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Café interior"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-brown-900">Our Beginning</h2>
            <p className="text-brown-700">
              Founded in 2010, The Backbencher's started as a small corner shop with a big dream: to serve the perfect cup of coffee while creating a warm, welcoming space for our community.
            </p>
            <p className="text-brown-700">
              Over the years, we've grown into a beloved local institution, known for our carefully sourced beans, house-made pastries, and friendly atmosphere that makes everyone feel at home.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-brown-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We source the finest ingredients and maintain high standards in everything we do."
              },
              {
                title: "Community",
                description: "We're more than just a café - we're a gathering place for friends and neighbors."
              },
              {
                title: "Sustainability",
                description: "We're committed to environmental responsibility in our operations."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-medium text-brown-900 mb-3">{value.title}</h3>
                <p className="text-brown-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-brown-900 mb-8 text-center">Meet Our Founder</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQH5nZAcWUQNLQ/profile-displayphoto-shrink_400_400/B4DZTROIRNHkAk-/0/1738676931523?e=1746057600&v=beta&t=M6N5eQr4PtHqwqEsbEBZR5KNzGd2zK9-BSqiYysavvg"
                  alt="Praveen Kumar Patra"
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-brown-900 mb-2">Praveen Kumar Patra</h3>
                <p className="text-lg text-brown-600 mb-4">Founder & CEO</p>
                <p className="text-brown-700">
                  A passionate entrepreneur and coffee enthusiast, Praveen founded The Backbencher's with a vision to create not just a café, but a community hub where people could come together, share stories, and enjoy exceptional coffee. With a background in technology and a love for hospitality, he has successfully blended innovation with tradition to create a unique café experience.
                </p>
                <p className="text-brown-700 mt-4">
                  Under his leadership, The Backbencher's has grown from a single location to become a beloved destination for coffee lovers, while maintaining its commitment to quality, sustainability, and community values.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;