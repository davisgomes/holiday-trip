'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tangerine } from "next/font/google";
import styles from "../title-animation.module.scss";
import Navigation from "@/components/Navigation";
import { prefix } from '@/lib/prefix';

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function AccommodationsPage() {
  const [showTitle, setShowTitle] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.3;
      if (currentScroll > lastScroll && currentScroll > threshold) {
        setShowTitle(false);
      } else if (currentScroll < lastScroll || currentScroll < threshold) {
        setShowTitle(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden bg-white"
        style={{
          backgroundImage: `url(${prefix}/images/art-deco-bg.jpg)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '500px 500px',
          backgroundPosition: 'center',
        }}
    >
      <div className="relative h-96 w-full flex items-end mt-6 md:mt-12">
        <div className={`relative w-full h-full mx-6 md:mx-12 rounded-3xl overflow-hidden drop-shadow-2xl border-4 border-[#b49900] transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={`${prefix}/images/accommodations.jpg`}
            alt="Accommodations Background"
            fill
            className={`w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
            >
              Accommodations
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full pt-12 pb-20 relative">
        <div className="relative w-full px-6 md:px-12 z-10">
          <div className="mt-8 text-lg md:text-xl text-zinc-800 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#b49900]">
            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Hotel Information</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏨</span>
                <div>
                  <strong>Hotel:</strong> <a href="https://www.riu.com/en/hotel/mexico/cancun/hotel-riu-palace-las-americas#hotel-facilities" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hotel Riu Palace Las Americas</a>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">All-inclusive luxury resort in Cancun</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Restaurants</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍽️</span>
                <div>
                  <strong>Don Roberto</strong> - Main Restaurant
                  <br />
                  <span className="text-base md:text-lg">Buffet breakfasts, lunches and dinners with live cooking stations, fruits, juices, sparkling wine and desserts. Features 3 special nights a week.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏊</span>
                <div>
                  <strong>El Romero</strong> - Poolside Restaurant
                  <br />
                  <span className="text-base md:text-lg">Continental breakfast buffet and varied snacks with hot and cold dishes for lunch.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🇮🇹</span>
                <div>
                  <strong>Los Arcos</strong> - Italian Restaurant
                  <br />
                  <span className="text-base md:text-lg">Buffet lunches and à la carte dinners.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍱</span>
                <div>
                  <strong>Sakura</strong> - Asian Restaurant
                  <br />
                  <span className="text-base md:text-lg">Authentic recipes from across Asia.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">✨</span>
                <div>
                  <strong>Krystal</strong> - Gourmet Restaurant
                  <br />
                  <span className="text-base md:text-lg">Fusion dishes and gourmet menu.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🇲🇽</span>
                <div>
                  <strong>Fiesta Mexicana</strong> - Mexican Restaurant
                  <br />
                  <span className="text-base md:text-lg">The best traditional recipes from Mexico.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👔</span>
                <div>
                  <strong>Dress Code:</strong>
                  <br />
                  <span className="text-base md:text-lg">Gentlemen must wear shirts with sleeves for dinner at the main restaurant and themed restaurants.</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Bars</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏊‍♂️</span>
                <div>
                  <strong>Cun</strong> - Swim-up Bar
                  <br />
                  <span className="text-base md:text-lg">Enjoy drinks without leaving the pool.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍹</span>
                <div>
                  <strong>Can</strong> - Pool Bar with Terrace
                  <br />
                  <span className="text-base md:text-lg">Poolside refreshments in a relaxed atmosphere.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎭</span>
                <div>
                  <strong>Art Deco</strong> - Lobby Bar
                  <br />
                  <span className="text-base md:text-lg">Sophisticated atmosphere in the hotel lobby.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍰</span>
                <div>
                  <strong>Capuchino</strong> - Pastry Shop & Ice Cream Parlor
                  <br />
                  <span className="text-base md:text-lg">Indulge in sweet treats and ice cream.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">☕</span>
                <div>
                  <strong>Lounge 24</strong> - 24-Hour Bar
                  <br />
                  <span className="text-base md:text-lg">Open space available all day long.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎪</span>
                <div>
                  <strong>La Terraza</strong> - Plaza Bar
                  <br />
                  <span className="text-base md:text-lg">Outdoor atmosphere with a stage for live shows and entertainment.</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>All-Inclusive</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">⭐</span>
                <span>Most exclusive RIU service providing the greatest well-being without any worries</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🤿</span>
                <span>Wide range of activities including diving, kayaking, bodyboarding, and much more!</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Beach & Pools</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏖️</span>
                <div>
                  <strong>Beach:</strong>
                  <br />
                  <span className="text-base md:text-lg">White sand beach with reserved area for guests, free sun loungers, and stunning views of the Mexican Caribbean.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">♾️</span>
                <div>
                  <strong>Infinity Pools:</strong>
                  <br />
                  <span className="text-base md:text-lg">Two spectacular infinity pools heated in winter with breathtaking ocean views, plus a third pool for a more tranquil experience. Surrounded by sun loungers and umbrellas with complimentary towels.</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>RIU Party</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎉</span>
                <div>
                  <strong>Themed Parties:</strong>
                  <br />
                  <span className="text-base md:text-lg">Join exciting themed parties several times a week at Hotel Riu Caribe with transportation included. Enjoy music, lights, and shows in a festive atmosphere.</span>
                  <br />
                  <a href="https://www.riu.com/en/riu-party" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Discover more about RIU Party</a>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Fitness & Sports</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💪</span>
                <span><strong>Gym:</strong> Complimentary access with cardio and weight training equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧘</span>
                <span><strong>RIU Fit:</strong> Cardiovascular exercises, yoga, stretching, step classes, TRX, aqua gym and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">⛳</span>
                <span><strong>Golf:</strong> Nearby golf courses available for guests in a tropical setting</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Spa & Wellness</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💆</span>
                <div>
                  <strong>Renova Spa:</strong>
                  <br />
                  <span className="text-base md:text-lg">Dedicated wellness and relaxation space offering massages, hairdressing, and beauty services to rejuvenate body and mind.</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Entertainment</h2>
            <ul className="list-none ml-0 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎭</span>
                <span>Daily entertainment program with recreational activities throughout the day</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎵</span>
                <span>Evening live shows and musical performances ensuring fun every night</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="w-full py-8 bg-zinc-900 flex flex-col items-center justify-center gap-4">
        <span className={`text-2xl font-light text-white text-center ${tangerine.className}`}>© {new Date().getFullYear()} Our Cancun Vacation</span>
      </footer>
      </main>
    </>
  );
}
