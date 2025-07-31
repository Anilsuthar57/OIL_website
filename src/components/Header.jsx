import { useState } from "react";
import { Menu, X, Factory } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavLinks = ({ mobile = false }) => {
    const links = ["home", "about", "services", "projects", "news"];
    return (
      <div
        className={
          mobile
            ? "flex flex-col space-y-4"
            : "hidden lg:flex items-center space-x-6"
        }
      >
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollToSection(link)}
            className="text-gray-800 hover:text-blue-600 font-medium capitalize transition"
          >
            {link}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
        >
          Contact
        </button>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded flex items-center justify-center">
              <Factory className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Aakash Exploration
              </h1>
              <p className="text-xs text-gray-500">Services Limited</p>
            </div>
          </div>

          {/* Desktop Links */}
          <NavLinks />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <NavLinks mobile />
          </div>
        )}
      </nav>
    </header>
  );
}
