import React from "react";
import { Link } from "react-router";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      {/* Footer Top */}
      <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Logo & Description */}
            <div className="lg:col-span-1 flex flex-col space-y-6">
              <div className="flex items-start">
                <img 
                  src="/WutomiDC.png" 
                  alt="WutomiDC Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm text-justify leading-relaxed">
                Transformando a agricultura e pecuária em Moçambique através da inovação e sustentabilidade.
              </p>
            </div>

            {/* O Que Fazemos */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide uppercase text-sm border-b border-gray-700 pb-3">
                O Que Fazemos
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Agricultura
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Pecuária
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Nutrição
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Processamento & Transformação
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Formação & Workshops
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Projecto & Impacto
                </Link>
              </nav>
            </div>

            {/* Loja & Produtos */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide uppercase text-sm border-b border-gray-700 pb-3">
                Loja & Produtos
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Produtos Agrícolas
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Sementes & Insumos
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Plantas & Árvores
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Produtos Processados
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Cosméticos Naturais
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Pecuária
                </Link>
              </nav>
            </div>

            {/* Suporte & Legal */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide uppercase text-sm border-b border-gray-700 pb-3">
                Suporte & Legal
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Contato
                </Link>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  FAQ
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Centro de Ajuda
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Política de Privacidade
                </Link>
                <Link className="text-gray-400 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Termos e Condições
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-white font-bold text-base tracking-wide uppercase text-sm border-b border-gray-700 pb-3">
                Contacto
              </h3>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200 flex-shrink-0">
                    <FaLocationDot className="text-primary" size={16} />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    Maputo, Moçambique
                  </span>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200 flex-shrink-0">
                    <FaPhoneAlt className="text-primary" size={16} />
                  </div>
                  <a 
                    href="tel:+258845555555" 
                    className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    (+258) 84 555 555
                  </a>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200 flex-shrink-0">
                    <MdEmail className="text-primary" size={16} />
                  </div>
                  <a 
                    href="mailto:geral@wutomidc.com" 
                    className="text-gray-400 text-sm hover:text-primary transition-colors duration-200 break-all"
                  >
                    geral@wutomidc.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Siga-nos</p>
                <div className="flex gap-2">
                  <Link 
                    to="https://www.linkedin.com/company/wutomi-dc/about/?viewAsMember=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-800 p-3 hover:bg-primary duration-300 rounded-lg flex-shrink-0"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    to="https://www.facebook.com/profile.php?id=61583885933699&locale=pt_BR" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-800 p-3 hover:bg-primary duration-300 rounded-lg flex-shrink-0"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    to="https://www.instagram.com/wutomi_dc_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-800 p-3 hover:bg-primary duration-300 rounded-lg flex-shrink-0"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    to="/" 
                    className="group bg-gray-800 p-3 hover:bg-primary duration-300 rounded-lg flex-shrink-0"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} WutomiDC. Todos os direitos reservados.
            </p>
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                Sobre
              </Link>
              <Link className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium" to="/contact">
                Contacto
              </Link>
              <Link className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                Serviços
              </Link>
              <Link className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;