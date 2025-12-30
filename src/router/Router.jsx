import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import ProjectosImpact from "../pages/About/ProjectosImpact";

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
            }
        ]
    }
])
export default router;