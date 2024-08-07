import LogoIcon from "../assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-10 h-10">
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="bg-white text-black ">
              Join waitlist
            </button>
            <MenuIcon className="size-20" />
          </div>
        </div>
      </div>
     =
    </header>
  );
};
