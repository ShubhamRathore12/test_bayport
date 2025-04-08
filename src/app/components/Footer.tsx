import { Facebook, Instagram, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 ">
      <div className="container px-30 mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Designs Come True!</h3>
            <p className="text-gray-300 mb-4">
              At the heart of Neon Earth lies the belief that your home is more
              than just a physical space; it's a canvas for self-expression.
              Neon Earth acts as an enabler, providing comfort, and the freedom
              to 'Create Your New'. Visualize It - Design it - Bring It to life:
              because the final product belongs to you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Order a Swatch Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bulk Quote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Refund
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Your Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Your Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Saved Designs
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-4">The Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  User Agreement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Neon Earth. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="#"
              className="hover:text-neon-pink transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-neon-pink transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-neon-pink transition-colors"
              aria-label="Github"
            >
              <Github />
            </a>
            <a
              href="#"
              className="hover:text-neon-pink transition-colors"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
