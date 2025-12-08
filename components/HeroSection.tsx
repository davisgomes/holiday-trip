import Image from "next/image";
import { prefix } from "@/lib/prefix";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src={`${prefix}/images/resort-pool.jpg`}
        alt="Beautiful resort pool"
        fill
        className="object-cover"
      />
    </div>
  );
}