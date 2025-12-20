import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layout/Layout";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <App />
            }
        ]
    }
])
export default router;