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

const travelSegments = [
  {
    id: 1,
    type: 'Outbound Flight',
    from: 'New York (JFK)',
    to: 'Maldives (MLE)',
    date: '2024-12-20',
    time: '08:00 AM',
    airline: 'Emirates',
    flightNumber: 'EK 123',
    duration: '16h 30m',
    price: '$1,200',
    image: '/images/travel.jpg',
  },
  {
    id: 2,
    type: 'Connection Flight',
    from: 'Maldives (MLE)',
    to: 'Zurich (ZRH)',
    date: '2024-12-25',
    time: '11:00 PM',
    airline: 'Swiss Air',
    flightNumber: 'LX 456',
    duration: '9h 15m',
    price: '$950',
    image: '/images/travel.jpg',
  },
  {
    id: 3,
    type: 'Return Flight',
    from: 'Zurich (ZRH)',
    to: 'New York (JFK)',
    date: '2024-12-30',
    time: '02:00 PM',
    airline: 'Swiss Air',
    flightNumber: 'LX 789',
    duration: '8h 45m',
    price: '$1,100',
    image: '/images/travel.jpg',
  },
];

export default function TravelPage() {
  const [showTitle, setShowTitle] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.3; // 30% of viewport height for travel page
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
            src={`${prefix}/images/travel.jpg`}
            alt="Travel Background"
            fill
            className={`w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
            >
              Travel
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full pt-12 pb-20 relative">
        <div className="relative w-full px-6 md:px-12 z-10">
          <div className="mt-8 text-lg md:text-xl text-zinc-800 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#b49900]">
            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Flight Information</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">✈️</span>
                <div>
                  <strong>Departing Flight:</strong> <a href="https://www.flightaware.com/live/flight/DAL627" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Delta 627</a>
                  <br />
                  <span className="text-base md:text-lg">April 22nd at 8:55am</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Arrive at airport by 5:55am (3 hours early for international flights)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">�</span>
                <div>
                  <strong>Return Flight:</strong> <a href="https://www.flightaware.com/live/flight/DAL626" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Delta 626</a>
                  <br />
                  <span className="text-base md:text-lg">April 27th at 2:25pm</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧳</span>
                <span>Carry-on included with flight</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Airport Transfer</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🚗</span>
                <div>
                  <strong>Transfer Service:</strong> <a href="https://usa-transfers.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">USA Transfers</a>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Remember to get cash or pay in advance for the driver</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏨</span>
                <span>Resort check-in time is at 3:00pm</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Required Items</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📋</span>
                <span><strong>Passport</strong> - Required for international travel</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎫</span>
                <span><strong>Boarding passes</strong> - Print or save digitally</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Travel Tips</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">⏰</span>
                <span>Arrive at the airport 3 hours early for international flights</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💵</span>
                <span>Keep local currency (Mexican Pesos) for tips and small purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📱</span>
                <span>Download boarding passes and important documents before leaving</span>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Cellphone</h2>
            <ul className="list-none ml-0 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📱</span>
                <span>
                  <a href="https://www.verizon.com/support/international-travel-faqs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Verizon International Travel Info</a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌎</span>
                <span>
                  <a href="https://www.t-mobile.com/cell-phone-plans/international-roaming-plans/results/mexico" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">T-Mobile International Roaming (Mexico)</a>
                </span>
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
