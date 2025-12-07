'use client';
import Image from "next/image";
import Link from "next/link";
import { Tangerine } from "next/font/google";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import styles from "./title-animation.module.scss";
import carouselStyles from "./carousel-animation.module.scss";
import { prefix } from "@/lib/prefix";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const categories = [
  { name: "Travel", icon: `${prefix}/images/travel.jpg` },
  { name: "Accommodations", icon: `${prefix}/images/accommodations.jpg` },
  { name: "Activities", icon: `${prefix}/images/activities.jpg` },
  { name: "Packing", icon: `${prefix}/images/packing.jpg` },
];

export default function Home() {
  const [showTitle, setShowTitle] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(true);
  const [carouselLastScroll, setCarouselLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.5; // 50% of viewport height
      if (currentScroll > lastScroll && currentScroll > threshold) {
        setShowTitle(false); // scrolling down
      } else if (currentScroll < lastScroll || currentScroll < threshold) {
        setShowTitle(true); // scrolling up
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.5; // 50% of viewport height
      if (currentScroll > carouselLastScroll && currentScroll > threshold) {
        setCarouselVisible(true); // scrolling down, show
      } else if (currentScroll < carouselLastScroll && currentScroll < threshold) {
        setCarouselVisible(false); // scrolling up AND below threshold, hide
      }
      setCarouselLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [carouselLastScroll]);

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden"
        style={{
          backgroundImage: `url(${prefix}/images/art-deco-bg.jpg)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '500px 500px',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative h-screen w-full flex items-end mt-6 md:mt-12">
          <div className={`relative w-full h-full mx-6 md:mx-12 rounded-3xl overflow-hidden drop-shadow-2xl border-4 border-[#b49900] transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}> 
            <Image
              src={`${prefix}/images/resort-pool.jpg`}
              alt="Beach Background"
              fill
              className={`w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1
                className={`text-5xl sm:text-6xl md:text-9xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
              >
                Our Cancun Vacation
              </h1>
            </div>
          </div>
        </div>
        {/* Carousel Section */}
        <section
          className="w-full pt-20 pb-20 relative"
        >
          <div className="relative w-full px-4 md:px-8 z-10">
            <div className="mt-8 flex flex-row flex-wrap md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-2 scrollbar-thin scrollbar-thumb-[#00CED1]/30 scrollbar-track-transparent w-full">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/${cat.name.toLowerCase()}`}
                  className={`relative shrink min-w-[140px] flex-1 md:min-w-0 md:w-full h-64 md:h-80 rounded-xl shadow-md transition-all duration-300 cursor-pointer bg-transparent overflow-visible flex flex-col items-center justify-center group hover:z-20 no-underline ${carouselStyles['carousel-item']} ${carouselVisible ? carouselStyles['carousel-item--visible'] : carouselStyles['carousel-item--hidden']}`}
                >
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="relative w-full h-full mb-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                      <Image
                        src={cat.icon}
                        alt={cat.name + ' image'}
                        fill
                        className="rounded-xl object-cover object-center border-4 border-[#b49900] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                      />
                    </div>
                    <span
                      className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-light text-white drop-shadow-lg text-center transition-all duration-300 group-hover:scale-110 ${tangerine.className}`}
                      style={{ textShadow: '0 2px 12px #000a' }}
                    >
                      {cat.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Decorative Hotel Image */}
        <div className={`px-8 pb-12 w-full flex justify-center items-center transition-all duration-1000 ${carouselVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full px-4 md:px-8 h-24 md:h-64 rounded-3xl overflow-hidden drop-shadow-2xl border-4 border-[#b49900] bg-white/60">
            <Image
              src={`${prefix}/images/hotel-view.jpg`}
              alt="Hotel Decoration"
              fill
              className="object-cover object-center rounded-2xl"
              priority={false}
              style={{objectFit: 'cover', objectPosition: 'center'}}
            />
          </div>
        </div>
        {/* Elegant Footer */}
        <footer className="w-full py-4 bg-zinc-900 flex items-center justify-center">
          <span className={`text-2xl font-light text-white text-center ${tangerine.className}`}>© {new Date().getFullYear()} Our Cancun Vacation</span>
        </footer>
      </main>
    </>
  );
}
