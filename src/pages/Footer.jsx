import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <form className="flex items-center mt-4 sm:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        
        <div className="flex flex-wrap justify-between mb-8">
        
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Ddsgnr</h3>
          </div>

          <div className="flex flex-wrap space-x-8">
            <div>
              <h4 className="font-semibold mb-2">Courses</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li><Link href="#">Business</Link></li>
                <li><Link href="#">Development</Link></li>
                <li><Link href="#">Technology</Link></li>
                <li><Link href="#">Design</Link></li>
                <li><Link href="#">Programming</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Resume</Link></li>
                <li><Link href="#">E-learning</Link></li>
                <li><Link href="#">Interview Preparation</Link></li>
                <li><Link href="#">Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About Us</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Help/Support</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Terms and Conditions</Link></li>
                <li><Link href="#">Partners</Link></li>
              </ul>
            </div>
          </div>
        </div>

      
        <div className="flex flex-wrap justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-gray-500 text-sm">
            © 2023 Ddsgnr. All rights reserved.
          </p>
          <ul className="flex space-x-4 text-gray-600 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Cookies Settings</Link></li>
          </ul>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://www.facebook.com" passHref>
              <FaFacebookF size={20} className="text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <FaInstagram size={20} className="text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={20} className="text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="https://www.linkedin.com" passHref>
              <FaLinkedinIn size={20} className="text-gray-600 hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
