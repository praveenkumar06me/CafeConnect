import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Backbencher's</h3>
            <p className="text-sm">
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
              <a href="https://www.instagram.com/praveenkrpatra" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/praveenkrpatra/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
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
  );
};

export default Footer;