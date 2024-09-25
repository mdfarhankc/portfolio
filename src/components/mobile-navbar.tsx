import { AlignJustify } from "lucide-react";
import Logo from "./logo";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import NavLink from "./nav-link";
import Socials from "./socials";

const MobileNavBar = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Logo />
              <NavLink
                containerStyle="flex flex-col justify-between items-center gap-x-5"
                linkStyle="relative hover:text-primary transition-all"
              />
            </div>
            <Socials
              containerStyles={`flex gap-x-4`}
              iconStyles={`text-2xl hover:text-primary`}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
