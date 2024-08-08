import Button from "@/components/Button";
import LogoIcon from "../assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-white/15 py-4 md:border-none">
      <div className="absolute inset-0 -z-10 backdrop-blur md:hidden md:backdrop-blur-none"></div>
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5 md:backdrop-blur">
          <div className="h-10 w-10">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-white/70">
              <li className="cursor-pointer transition hover:text-white">
                Features
              </li>
              <li className="cursor-pointer transition hover:text-white">
                Developers
              </li>
              <li className="cursor-pointer transition hover:text-white">
                Pricing
              </li>
              <li className="cursor-pointer transition hover:text-white">
                Changelog
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
