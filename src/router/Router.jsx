import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Contacto from "../pages/Contact/Contact";
import ProjectosImpact from "../pages/About/ProjectosImpact";
import AgricultoresParceiros from "../pages/About/AgricultoresParceiros";
import Testemunhos from "../pages/About/Testemunhos"
import FAQ from "../pages/About/FAQ"
import Agricultura from "../pages/Services/Agricultura"
import Noticias from "../pages/Noticias/Noticias"
import Galeria from "../pages/Noticias/Galeria"
import Pecuaria from "../pages/Services/Pecuaria";
import CosmeticosNaturais from "../pages/Services/CosmeticosNaturais";
import Nutrition from "../pages/Services/Nutrition";
import Processamento from "../pages/Services/ProcessamentoTransformacao";
import Workshops from "../pages/Noticias/Workshops";
import Treinamento from "../pages/Noticias/Treinamentos";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <App />
            },

            //About section pages
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/about/projectos-impacto",
                element: <ProjectosImpact />
            },
            {
                path: "/agricultores-parceiros",
                element: <AgricultoresParceiros />
            },
            {
                path: "/testemunhos",
                element: <Testemunhos />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/contact",
                element: <Contacto />
            },
            //Services section page
            {
                path: "/agricultura",
                element: <Agricultura />
            },
            {
                path: "/pecuaria",
                element: <Pecuaria />
            },
            {
                path: "/cosmeticos",
                element: <CosmeticosNaturais />
            },
            {
                path: "/nutricao",
                element: <Nutrition />
            },
            {
                path: "/processamento",
                element: <Processamento />
            },
            //Noticias section page
            {
                path: "/noticias",
                element: <Noticias />
            },
            {
                path: "/galeria",
                element: <Galeria />
            },
            {
                path: "/workshops",
                element: <Workshops />
            },
            {
                path: "/treinamentos",
                element: <Treinamento />
            }
        ]
    }
])
export default router;