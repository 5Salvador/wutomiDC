import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import ProjectosImpact from "../pages/About/ProjectosImpact";
import AgricultoresParceiros from "../pages/About/AgricultoresParceiros";
import Testemunhos from "../pages/About/Testemunhos"
import FAQ from "../pages/About/FAQ"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <App />
            },
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
            }
        ]
    }
])
export default router;