import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = () => setIsVisible(!isVisible);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Sobre Nós",
      dropdown: [
        { name: "Quem Somos", path: "/about" },
        { name: "Projectos & Impacto", path: "/projectos-impacto" },
        { name: "Agricultores & Parceiros", path: "/agricultores-parceiros" },
        { name: "Testemunhos", path: "/testemunhos" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      name: "Serviços",
      dropdown: [
        { name: "Agricultura", path: "/agricultura" },
        { name: "Pecuária", path: "/pecuaria" },
        { name: "Nutrição", path: "/nutricao" },
        {
          name: "Processamento & Transformação",
          path: "/processamento",
        },
        { name: "Cosméticos Naturais", path: "/cosmeticos" },
      ],
    },
    {
      name: "Notícias",
      dropdown: [
        { name: "Notícias & Atualizações", path: "/noticias" },
        { name: "Galeria", path: "/galeria" },
        { name: "Workshops", path: "/workshops" },
        { name: "Treinamentos", path: "/treinamentos" },
      ],
    },
    { name: "Loja", path: "/shop" },
    // {
    //   name: "Login",
    //   dropdown: [
    //     { name: "Entrar", path: "/login" },
    //     { name: "Criar Conta", path: "/register" },
    //   ],
    // },
  ];

  return (
    <>
      {/* --- Top Info Bar --- */}
      <section className="hidden md:block w-full py-1 bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-row justify-around items-center">
          <span className="font-medium text-gray-600">
            Bem-vindo a WutomiDC
          </span>

          <div className="flex flex-row gap-2">
            <Link to="/">
              <FaLinkedin size={18} className="text-gray-600" />
            </Link>
            <Link to="/">
              <FaFacebook size={18} className="text-gray-600" />
            </Link>
            <Link to="/">
              <Instagram size={18} className="text-gray-600" />
            </Link>
            <Link to="/">
              <FaTiktok size={18} className="text-gray-600" />
            </Link>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <MdEmail size={20} className="text-gray-600" />
            <span className="font-medium text-gray-600">
              geral@wutomidc.com
            </span>
          </div>
        </div>
      </section>

      {/* --- Main Navigation Bar --- */}
      <nav className="relative z-50 w-full bg-white shadow-md font-montserrat">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="./WutomiDC.png"
              alt="WutomiDC Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={handleClick}
            className="md:hidden text-primary hover:text-secondary transition"
          >
            {isVisible ? <FaXmark size={28} /> : <GiHamburgerMenu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-8 items-center relative">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-primary hover:text-secondary hover:border-b-2 hover:border-amber-400 font-medium flex items-center gap-1 duration-300">
                    {link.name}
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-8 left-0 bg-primary text-white shadow-lg rounded-md py-2 w-56 z-50 origin-top"
                      >
                        {link.dropdown.map((subLink, i) => (
                          <Link
                            key={i}
                            to={subLink.path}
                            className="block px-4 py-2 hover:bg-secondary"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-primary hover:text-secondary font-medium duration-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div>
            <Link to="/login" className="bg-primary text-secondary px-4 py-2 rounded-md hover:text-white hover:bg-secondary duration-300">
              Login
            </Link>           
          </div>

          {/* --- Overlay for mobile --- */}
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black md:hidden z-40"
                  onClick={handleClick}
                ></motion.div>

                {/* --- Mobile Menu --- */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="fixed top-0 left-0 w-64 h-screen bg-primary z-50 flex flex-col items-start gap-4 p-4 shadow-lg"
                >
                  {/* Close button at top */}
                  <button
                    onClick={handleClick}
                    className="self-end mb-2 text-white hover:text-secondary"
                  >
                    <FaXmark size={24} />
                  </button>

                  {navLinks.map((link, index) =>
                    link.dropdown ? (
                      <div
                        key={index}
                        className="flex flex-col border-b border-gray-400 w-full"
                      >
                        {/* Dropdown trigger for mobile */}
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.name ? null : link.name
                            )
                          }
                          className="text-white font-medium hover:text-secondary flex items-center justify-between w-full py-2"
                        >
                          <span>{link.name}</span>
                          {openDropdown === link.name ? (
                            <RiArrowDropDownLine
                              size={28}
                              className="text-white"
                            />
                          ) : (
                            <RiArrowDropRightLine
                              size={28}
                              className="text-white"
                            />
                          )}
                        </button>

                        {/* Mobile dropdown content */}
                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex flex-col mt-1 space-y-1 ml-3 w-full z-50"
                            >
                              {link.dropdown.map((subLink, i) => (
                                <Link
                                  key={i}
                                  to={subLink.path}
                                  className="text-white/90 hover:text-secondary text-sm border-t border-gray-500 py-2 pl-2"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={link.path}
                        className="text-white hover:text-gift font-medium py-2 border-b border-gray-400 w-full"
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
