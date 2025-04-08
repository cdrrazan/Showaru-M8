
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Showaru</h3>
            <p className="text-white/80 mb-6">
              Creating beautiful landing pages has never been easier. No coding required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/80 hover:text-accent transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-accent transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-accent transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-accent transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-white/80">support@showaru.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-white/80">+977 (980) 102-7220</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-white/80">Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Showaru. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
