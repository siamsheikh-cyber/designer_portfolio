import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "@/mode/dark_light/mode-toggle";

const Navbar02Page = () => {
  return (
    <div className="border-b">
      <div className="my-container">
        <div className="dark:bg-gray-950 px-6">
          <nav className="h-16 bg-background">
            <div className="h-full flex items-center justify-between ">
              <div className="flex items-center gap-8">
                <Logo />

                {/* Desktop Menu */}
                <NavMenu className="hidden md:block " />
              </div>

              <div className="flex items-center gap-3">


                <Button size="icon" className="rounded-4xl" variant="outline">
                  <ModeToggle />
                </Button>

                {/* Mobile Menu */}
                <div className="md:hidden">
                  <NavigationSheet />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar02Page;
