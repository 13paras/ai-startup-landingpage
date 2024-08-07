import Button from "@/components/Button";
import LogoIcon from "../assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b sticky top-0 z-10  border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border backdrop-blur-md border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="w-10 h-10">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-white/70 ">
              <li className="hover:text-white transition cursor-pointer">
                Features
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Developers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Changelog
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Button>
              Join Waitlist
            </Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
