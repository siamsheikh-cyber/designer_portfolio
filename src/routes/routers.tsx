
import IllustaritionItems from "@/pages/Feature/component/illustaritionItems";
import ItemsBranding from "@/pages/Feature/component/itemsBranding";
import UiuxItems from "@/pages/Feature/component/ui_ux_items";
import LeyoutOfFeature from "@/pages/Feature/leyoutOfFeature";
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
                Component: Home,
                children: [
                    {
                        path: "/",
                        Component: LeyoutOfFeature,
                        children: [
                            {
                                path: "/",
                                Component: ItemsBranding
                            },
                            {
                                path: "/2",
                                Component: UiuxItems
                            },
                            {
                                path: "/3",
                                Component: IllustaritionItems
                            }
                        ]
                    }
                ]
            },
        ]
    }
])

export default router