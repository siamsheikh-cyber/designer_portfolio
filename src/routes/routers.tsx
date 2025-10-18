
import Home from "@/pages/home/home";
import MainLayout from "@/pages/main/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home

            },
        ]
    }
])

export default router