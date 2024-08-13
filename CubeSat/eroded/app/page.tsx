import NavBar from "@/components/NavBar";
import Hero from "@/ui/landing/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex md:h-screen bg-black">
      <div className=""><NavBar/></div>
      <Hero/>
    </main>
  );
}
