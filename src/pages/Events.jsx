import { motion } from 'framer-motion';
import { useState } from 'react';

const events = [
  {
    title: "Live Music Nights",
    date: "Every Saturday",
    time: "7:00 PM - 9:00 PM",
    description: "Enjoy soulful live performances while sipping your favorite coffee. Local artists create the perfect ambiance for your evening.",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
    details: {
      performers: "Local artists and musicians",
      entry: "Free entry with any coffee purchase",
      highlights: [
        "Acoustic performances",
        "Singer-songwriter showcases",
        "Jazz ensembles",
        "Traditional folk music"
      ],
      additionalInfo: "Perfect for a relaxing evening with friends and family. Enjoy special coffee and dessert pairings during performances."
    }
  },
  {
    title: "Board Game Evenings",
    date: "Every Tuesday",
    time: "5:00 PM - 9:00 PM",
    description: "Join us for a fun evening of board games and coffee. We have a wide collection of games for all ages.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
    details: {
      games: "Over 50+ board games available",
      entry: "₹100 per person (includes one coffee)",
      highlights: [
        "Strategy games",
        "Party games",
        "Classic board games",
        "Card games"
      ],
      additionalInfo: "Groups of 4 or more get 20% off on food items. Reservation recommended for large groups."
    }
  },
  {
    title: "Open Mic Night",
    date: "Last Friday of Month",
    time: "6:00 PM - 9:00 PM",
    description: "Share your talent with our community. Whether it's poetry, music, or comedy, our stage is yours!",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    details: {
      performers: "All talents welcome",
      entry: "Free for performers, ₹50 for audience (includes one coffee)",
      highlights: [
        "Poetry readings",
        "Stand-up comedy",
        "Musical performances",
        "Storytelling"
      ],
      additionalInfo: "Sign up required for performers. Limited slots available. Early registration recommended."
    }
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    guests: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      eventType: '',
      guests: '',
      message: ''
    });
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
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Events & Happenings</h1>
          <p className="text-lg text-brown-600">Join us for special moments and memorable experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{event.title}</h3>
                <div className="text-brown-600 mb-4">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <p className="text-brown-700">{event.description}</p>
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowEventDetails(true);
                  }}
                  className="mt-4 bg-brown-900 text-white px-4 py-2 rounded-full hover:bg-brown-800 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {showEventDetails && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEventDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-brown-900 mb-4">{selectedEvent.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brown-900">When</h4>
                  <p className="text-brown-700">{selectedEvent.date}</p>
                  <p className="text-brown-700">{selectedEvent.time}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brown-900">Entry</h4>
                  <p className="text-brown-700">{selectedEvent.details.entry}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brown-900">Highlights</h4>
                  <ul className="list-disc list-inside text-brown-700">
                    {selectedEvent.details.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brown-900">Additional Information</h4>
                  <p className="text-brown-700">{selectedEvent.details.additionalInfo}</p>
                </div>
              </div>
              <button
                onClick={() => setShowEventDetails(false)}
                className="mt-6 bg-brown-900 text-white px-6 py-2 rounded-full hover:bg-brown-800 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-brown-900 mb-6">Book Your Private Event</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-brown-900 mb-2">Regular Hours</h3>
            <p className="text-brown-700">Monday - Sunday: 10:00 AM - 10:00 PM</p>
          </div>
          
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
            >
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Thank You!</h3>
              <p className="text-green-800">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={inquiryForm.date}
                  onChange={(e) => setInquiryForm({...inquiryForm, date: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Event Type</label>
                <select
                  required
                  value={inquiryForm.eventType}
                  onChange={(e) => setInquiryForm({...inquiryForm, eventType: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="corporate">Corporate Meeting</option>
                  <option value="team">Team Gathering</option>
                  <option value="study">Study Group</option>
                  <option value="community">Community Meetup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1">Number of Guests</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={inquiryForm.guests}
                  onChange={(e) => setInquiryForm({...inquiryForm, guests: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brown-700 mb-1">Additional Details</label>
                <textarea
                  rows="4"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-brown-900 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition-colors duration-200"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;