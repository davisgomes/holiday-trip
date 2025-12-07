'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tangerine } from "next/font/google";
import styles from "../title-animation.module.scss";
import Navigation from "@/components/Navigation";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ActivitiesPage() {
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
          backgroundImage: 'url(/images/art-deco-bg.jpg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '500px 500px',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative h-96 w-full flex items-end mt-6 md:mt-12">
        <div className={`relative w-full h-full mx-6 md:mx-12 rounded-3xl overflow-hidden drop-shadow-2xl border-4 border-[#b49900] transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/images/activities.jpg"
            alt="Activities Background"
            fill
            className={`w-full h-full object-cover object-center rounded-2xl drop-shadow-2xl transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
            >
              Activities & Excursions
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full pt-12 pb-20 relative">
        <div className="relative w-full px-6 md:px-12 z-10">
          <div className="mt-8 text-lg md:text-xl text-zinc-800 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#b49900]">
            <p className="mb-8 text-zinc-600">Most tours include round-trip transportation from your resort. Book through your hotel concierge or platforms like <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Viator</a>.</p>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Mayan Ruins</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏛️</span>
                <div>
                  <strong>Tulum Ruins:</strong>
                  <br />
                  <span className="text-base md:text-lg">Stunning beachside Mayan ruins overlooking the Caribbean Sea. One of the most picturesque archaeological sites in Mexico.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">⏱️ Duration: Half day | 📍 Distance: ~2 hours from Cancun</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">☀️ Tip: Very little shade - bring sunscreen, hat, and water</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🐢 Popular combo tours include turtle snorkeling and cenote visits</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏛️</span>
                <div>
                  <strong>Chichen Itza:</strong>
                  <br />
                  <span className="text-base md:text-lg">UNESCO World Heritage Site featuring the iconic El Castillo pyramid. One of the New Seven Wonders of the World. Highly recommended - described as "an absolute delight" for history lovers.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">⏱️ Duration: Full day (~6 hours round trip) | 📍 Distance: ~3 hours from Cancun</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Tip: Many tours include cenote visits and traditional lunch</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏛️</span>
                <div>
                  <strong>Coba Ruins:</strong>
                  <br />
                  <span className="text-base md:text-lg">Ancient Mayan city in the jungle. Visit the Choo-Ha Cenote nearby - an absolutely amazing underground cenote.</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Cenotes</h2>
            <p className="mb-4 text-zinc-600">Natural sinkholes filled with crystal-clear freshwater. Swim in underground caves and explore these unique geological formations. Perfect for escaping the heat!</p>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💧</span>
                <div>
                  <strong>Cenote Swimming & Cave Exploration:</strong>
                  <br />
                  <span className="text-base md:text-lg">Experience the magic of swimming in underground cenotes with stalactites and natural light filtering through openings.</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🎯 Popular: 5-Cenote Tour or cenotes combined with ruins visits</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">⭐ Highly recommended: Choo-Ha Cenote in Coba - an absolutely amazing underground cenote</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🪂</span>
                <div>
                  <strong>Activities Available:</strong>
                  <br />
                  <span className="text-base md:text-lg">Swimming, snorkeling, cliff jumping, rappelling, and zip-lining at various cenote locations</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Island Adventures</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏝️</span>
                <div>
                  <strong>Isla Mujeres - HIGHLY RECOMMENDED:</strong>
                  <br />
                  <span className="text-base md:text-lg">Make a full day of it! Beautiful island accessible by ferry from Cancun. Rent a golf cart to explore at your own pace.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• <strong>Punta Sur:</strong> Amazing southern tip with "Cliff of the Dawn" - hit the ferry early and visit here first</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Pristine beaches without seaweed issues on the northern side</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Local shops, restaurants, and beach clubs</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Snorkeling and water sports</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🚗 Golf cart rentals available - drive around, visit Punta Sur, then bus back to north side to lounge</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🌮 Must-try: Tacos de Humo on the island</span>
                  <br />
                  <span className="text-base md:text-lg text-red-600">⚠️ Avoid anyone who claims to "know you from your resort" - common scam</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌴</span>
                <div>
                  <strong>Cozumel:</strong>
                  <br />
                  <span className="text-base md:text-lg">Take a ferry from Playa del Carmen to this larger island known for gorgeous snorkeling and world-class diving. Consider adding a tequila tour!</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Snorkeling & Marine Life</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🐢</span>
                <div>
                  <strong>Akumal Bay - Swim with Sea Turtles:</strong>
                  <br />
                  <span className="text-base md:text-lg">Snorkel alongside gentle sea turtles in their natural habitat. One of the most magical experiences in the Riviera Maya.</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">Highly recommended combo: Tulum ruins, cenote, and turtle snorkeling (available from Cancun Adventures)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🤿</span>
                <div>
                  <strong>Xel-Ha Natural Aquarium:</strong>
                  <br />
                  <span className="text-base md:text-lg">All-inclusive eco-park with natural inlet for snorkeling, cliff jumping, and floating down lazy rivers. Has its own bus transportation from hotels.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Includes food, drinks, snorkel gear, and life jackets</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🤿</span>
                <div>
                  <strong>Snorkeling Off Your Resort:</strong>
                  <br />
                  <span className="text-base md:text-lg">Many resorts offer great snorkeling right from the beach - ask your concierge about equipment rentals</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🤿</span>
                <div>
                  <strong>Scuba Diving:</strong>
                  <br />
                  <span className="text-base md:text-lg">For certified divers or those wanting to learn - Cancun and Cozumel offer world-class diving experiences</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Adventure Parks</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎢</span>
                <div>
                  <strong>Xcaret Park:</strong>
                  <br />
                  <span className="text-base md:text-lg">Eco-archaeological park combining nature, culture, and entertainment. Has its own bus transportation from hotels.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Underground river swimming</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Wildlife (butterfly pavilion, aviary, jaguars)</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Cultural shows and traditional Mexican evening spectacular</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Beach access and snorkeling</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🎉 Special Events: Festival de Tradiciones de Vida y Muerte (Day of the Dead celebration)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🪂</span>
                <div>
                  <strong>Xplor Adventure Park:</strong>
                  <br />
                  <span className="text-base md:text-lg">Adrenaline-packed park for thrill-seekers. Popular for couples seeking adventure.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Zip lines through the jungle</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Underground cave and cenote swimming</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Rappelling from high towers</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">• Amphibious vehicle circuits</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">⚠️ Physically demanding - some activities may be challenging</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌙</span>
                <div>
                  <strong>Xplor Fuego (Night Version):</strong>
                  <br />
                  <span className="text-base md:text-lg">Same as Xplor but at night with torches and fire - many travelers say it's better than the daytime version!</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Romantic Experiences</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">⛵</span>
                <div>
                  <strong>Sunset Love Cruise - HIGHLY RECOMMENDED:</strong>
                  <br />
                  <span className="text-base md:text-lg">Sail along the coast on a catamaran while watching the sunset. Perfect for couples and romance. Repeat customers always enjoy it!</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Usually includes drinks, snacks, and sometimes snorkeling stops</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Tip: Shop around for the best price and make sure to book the sunset timing</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Day Trips & Local Experiences</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏖️</span>
                <div>
                  <strong>Playa del Carmen:</strong>
                  <br />
                  <span className="text-base md:text-lg">Charming beach town with Fifth Avenue (Quinta Avenida) - a pedestrian street full of shops, restaurants, and bars.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Take public vans, taxi, or Uber from hotel zone</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌿</span>
                <div>
                  <strong>Sian Ka'an Biosphere Reserve:</strong>
                  <br />
                  <span className="text-base md:text-lg">UNESCO World Heritage Site - pristine nature reserve with mangroves, wildlife, and ancient Mayan sites.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏘️</span>
                <div>
                  <strong>Valladolid:</strong>
                  <br />
                  <span className="text-base md:text-lg">Colonial town often included on Chichen Itza tours. Colorful streets, local culture, and nearby cenotes.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🛍️</span>
                <div>
                  <strong>La Isla Shopping Mall:</strong>
                  <br />
                  <span className="text-base md:text-lg">Pretty fun outdoor mall with interesting attractions, shopping, and dining options in the hotel zone.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏛️</span>
                <div>
                  <strong>Mayan Museum of Cancun:</strong>
                  <br />
                  <span className="text-base md:text-lg">More mellow cultural experience. Walk outdoor grounds with remains of old buildings and temples, plus indoor exhibits.</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">⚠️ Check hours - may be closed to tourists on Sundays</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌿</span>
                <div>
                  <strong>Oculta Selva Tours:</strong>
                  <br />
                  <span className="text-base md:text-lg">Visit national parks and protected natural areas. Personal one-on-one guided experiences including snorkel, food, and drinks. Great prices and local tips.</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Find them on Instagram @ocultaselva or their webpage</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍽️</span>
                <div>
                  <strong>Dining Off-Resort:</strong>
                  <br />
                  <span className="text-base md:text-lg">Consider walking to nearby non-resort restaurants for authentic local experiences</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Nightlife & Entertainment</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎭</span>
                <div>
                  <strong>Coco Bongos:</strong>
                  <br />
                  <span className="text-base md:text-lg">Famous nightclub with acrobatic shows, live performances, and open bar. A must if you're into nightlife!</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍸</span>
                <div>
                  <strong>Mezcalitos:</strong>
                  <br />
                  <span className="text-base md:text-lg">Local favorite for drinks and atmosphere</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Important Tips</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">⚠️</span>
                <div>
                  <strong className="text-red-600">Do NOT Rent a Car:</strong>
                  <br />
                  <span className="text-base md:text-lg text-red-600">Multiple travelers report frequent police stops with bribe requests. Use tour transportation instead.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🚕</span>
                <div>
                  <strong>Transportation Options:</strong>
                  <br />
                  <span className="text-base md:text-lg">• <strong>Uber:</strong> Works well in Cancun - easy to use and reliable</span>
                  <br />
                  <span className="text-base md:text-lg">• <strong>Hotel Zone Buses:</strong> Very easy to navigate - one way going, one way back</span>
                  <br />
                  <span className="text-base md:text-lg">• <strong>Resort Transportation:</strong> Ask if your resort has mobility service to other areas</span>
                  <br />
                  <span className="text-base md:text-lg">• <strong>Pre-paid Transfers:</strong> Book airport and activity transfers in advance to save money</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Many parks (Xcaret, Xel-Ha) have their own bus services from hotels</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎫</span>
                <div>
                  <strong>Booking Options:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Hotel concierge (tour reps available at most resorts)</span>
                  <br />
                  <span className="text-base md:text-lg">• Viator or TripAdvisor for online booking</span>
                  <br />
                  <span className="text-base md:text-lg">• Cancun Adventures for combo tours</span>
                  <br />
                  <span className="text-base md:text-lg">• Private tour guides for customized experiences (Oculta Selva)</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💰 Buy activities in advance online - often better prices</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💡</span>
                <div>
                  <strong>General Advice:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Book early for popular tours and special events</span>
                  <br />
                  <span className="text-base md:text-lg">• Bring biodegradable sunscreen (required at many eco-parks)</span>
                  <br />
                  <span className="text-base md:text-lg">• Wear water shoes for cenotes and rocky beaches</span>
                  <br />
                  <span className="text-base md:text-lg">• Bring cash for tips and small purchases</span>
                  <br />
                  <span className="text-base md:text-lg">• Pack light for tours - waterproof bag recommended</span>
                  <br />
                  <span className="text-base md:text-lg">• Balance activity days with relaxing resort days</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">☀️ Pro tip: "Sunshine, food, drink, repeat" - don't over-schedule!</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍽️</span>
                <div>
                  <strong>Food on Tours:</strong>
                  <br />
                  <span className="text-base md:text-lg">Many full-day tours include authentic Mexican lunch buffets in jungle settings</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>What to Skip</h2>
            <ul className="list-none ml-0 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🐬</span>
                <div>
                  <strong>Swimming with Dolphins:</strong>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Widely considered overpriced and overrated by travelers</span>
                </div>
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