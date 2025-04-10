
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">
          Showaru
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-primary hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-primary hover:text-secondary transition-colors">
              Explore
            </a>
            <a href="#pricing" className="text-primary hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#reviews" className="text-primary hover:text-secondary transition-colors">
              Reviews
            </a>
          </div>
          {/* Authentication Buttons */}
          {/* Log In Button */}
          <div className="flex items-center space-x-4">
            <a href={"https://showaru.app.rsynk.com/users/sign_in"}>
              <Button variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white">
                Log in
              </Button>
            </a>
            {/* Sign Up Button */}
            <a href={"https://showaru.app.rsynk.com/users/sign_up"}
               target="_blank"
               rel="noopener noreferrer">
              <Button className="bg-accent text-white hover:bg-accent/90">
                Sign up
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-primary hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-primary hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-primary hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="text-primary hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Reviews
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <a href={"https://showaru.app.rsynk.com/users/sign_in"}>
                <Button variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  Log in
                </Button>
              </a>
              <a href={"https://showaru.app.rsynk.com/users/sign_up"}
                 target="_blank"
                 rel="noopener noreferrer">
                <Button
                    className="bg-accent text-white hover:bg-accent/90 w-full">
                  Sign up
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
