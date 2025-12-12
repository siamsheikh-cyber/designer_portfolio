
import AddsVideo from "@/components/extraPages/addsVideo";
import CartunAdds from "@/components/extraPages/cartunAdds";
import HumanAdds from "@/components/extraPages/humanAdds";
import ItemsBranding from "@/pages/Feature/component/design";
import UiuxItems from "@/pages/Feature/component/video";
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
                                Component: UiuxItems
                            },
                            {
                                path: "/1",
                                Component: ItemsBranding
                            }
                        ]
                    }
                ]
            },
            {
                path: "/CartunAdds",
                Component: CartunAdds
            },
            {
                path: "/AddsVideo",
                Component: AddsVideo
            },
            {
                path: "/HumanAdds",
                Component: HumanAdds
            },
        ]
    }
])

export default router