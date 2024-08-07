import { Header } from "@/sections/Header";
import LogoIcon from '@/assets/logo.svg'

export default function Home() {
  return <div>
    <Header />
    <LogoIcon className="size-8" />
    <h2 className="text-3xl font-semibold">Paras</h2>
  </div>;
}
