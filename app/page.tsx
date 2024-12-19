import Image from "next/image";
import CoverParticles from "@/components/cover-particles"
import {Introduction} from "@/components/introduction"
export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover justify-center items-center">
        <CoverParticles></CoverParticles>
        <Introduction/>
      </div>
    </main>
  );
}
