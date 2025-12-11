import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, Outlet } from "react-router-dom";

function LeyoutOfFeature() {
    return (
        <div className="dark:bg-gray-900 bg-white">
            <div className="my-container">
                <div id="project" className="mx-auto px-4 sm:px-6 lg:px-8 py-15">
                    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-15">
                        {/* Header */}
                        <h1 className="text-3xl text-center sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                            Featured Works
                        </h1>

                        <div className="flex justify-center items-center">
                            {/* Navigation Menu */}

                            <NavigationMenu>
                                <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Link to="/">Videos</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Link to="1">Design</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </section>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LeyoutOfFeature;