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
    <footer>
     {/* Footer Top*/}
     <div className="w-full bg-black rounded-t-4xl">
        <div className="w-full py-8 p-8 mx-auto flex flex-col md:flex-row justify-between gap-2">
            {/* Logo */}
            <div className="flex flex-col items-center">
                <img src="./WutomiDC.png" alt="WutomiDC Logo" />
            </div>

            <div className="flex flex-col space-y-4">
                <span className="text-white font-semibold text-lg">O Que Fazemos</span>
                <div className="flex flex-col space-y-2 text-white">
                  <Link className="hover:text-primary transition-colors duration-200">Agricultura</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Pecuária</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Nutrição</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Processamento & Transformação</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Formação & Workshops</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Projecto & Impacto</Link>
                </div>

            </div>

            <div className="flex flex-col space-y-4">
                 <span className="text-white font-semibold text-lg">Loja & Produtos</span>
                 <div className="flex flex-col space-y-2 text-white">
                  <Link className="hover:text-primary transition-colors duration-200">Produtos Agrícolas</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Sementes & Insumos</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Plantas & Árvores</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Produtos Processados</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Cosméticos Naturais</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Pecuária</Link>
                </div>

            </div>
            <div className="flex flex-col space-y-4">
                 <span className="text-white font-semibold text-lg">Suporte & Legal</span>
                 <div className="flex flex-col space-y-2 text-white">
                  <Link className="hover:text-primary transition-colors duration-200">Contato</Link>
                  <Link className="hover:text-primary transition-colors duration-200">FAQ</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Centro de Ajuda</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Política de Privacidade</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Cosméticos Naturais</Link>
                  <Link className="hover:text-primary transition-colors duration-200">Termos e Condições</Link>
                </div>

            </div>

            <div className="flex flex-col space-y-6 bg-primary p-4 rounded-3xl px-6 py-10">
                <div className="flex flex-row items-center gap-2">
                   <div className="p-2 bg-white rounded-full">
                        <FaLocationDot size={16}/>
                    </div>
                   <span className="text-white text-lg" >Maputo, Moçambique</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="p-2 bg-white rounded-full">
                        <FaPhoneAlt size={16}/>
                    </div>
                   <span className="text-white text-lg" >(+258) 84 555 555</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="p-2 bg-white rounded-full">
                        <MdEmail size={16}/>
                    </div>
                   <span className="text-white text-lg" >geral@wutomidc.com</span>
                </div>
                <div className="flex flex-row gap-3">
                  <Link to="/" className="group bg-secondary/40 p-4 hover:bg-secondary/60 duration-300 rounded-full">
                     <FaLinkedin size={18} className="group-hover:text-primary"/>
                  </Link>
                  <Link to="/" className="group bg-secondary/40 p-4 hover:bg-secondary/60 duration-300 rounded-full">
                     <FaFacebook size={18} className="group-hover:text-primary"/>
                  </Link>
                  <Link to="/" className="group bg-secondary/40 p-4 hover:bg-secondary/60 duration-300 rounded-full">
                     <Instagram size={18} className="group-hover:text-primary"/>
                  </Link>
                  <Link to="/" className="group bg-secondary/40 p-4 hover:bg-secondary/60 duration-300 rounded-full">
                     <FaTiktok size={18} className="group-hover:text-primary"/>
                  </Link>
                </div>

            </div>

        </div>

     </div>

      {/* Footer bottom*/}
      <div className="max-w-7xl mx-auto p-6 text-center flex flex-col md:flex-row justify-between font-medium text-gray-600">
        <p>
          © {new Date().getFullYear()} WutomiDC. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap gap-3 font-medium text-gray-600">
          <Link className="hover:text-primary transition-colors duration-200">Sobre</Link>
          <Link className="hover:text-primary transition-colors duration-200">Contacto</Link>
          <Link className="hover:text-primary transition-colors duration-200">Serviços</Link>
          <Link className="hover:text-primary transition-colors duration-200">Blog</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
