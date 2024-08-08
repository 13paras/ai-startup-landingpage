import LogoImage from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-5 md:py-8">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <LogoImage className="size-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-1 lg:flex-row lg:items-center lg:justify-center">
            <a className="cursor-pointer text-xs text-white/70 transition hover:text-white md:text-sm">
              Features
            </a>
            <a className="cursor-pointer text-xs text-white/70 transition hover:text-white md:text-sm">
              Developers
            </a>
            <a className="cursor-pointer text-xs text-white/70 transition hover:text-white md:text-sm">
              Company
            </a>
            <a className="cursor-pointer text-xs text-white/70 transition hover:text-white md:text-sm">
              Blog
            </a>
            <a className="cursor-pointer text-xs text-white/70 transition hover:text-white md:text-sm">
              Changeblog
            </a>
          </nav>

          <div className="flex items-center gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="cursor-pointer text-white/40 transition hover:text-white" />
            <InstaSocial className="cursor-pointer text-white/40 transition hover:text-white" />
            <YTSocial className="cursor-pointer text-white/40 transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
