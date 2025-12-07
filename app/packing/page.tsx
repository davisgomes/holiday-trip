'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tangerine } from "next/font/google";
import styles from "../title-animation.module.scss";
import Navigation from "@/components/Navigation";
import { prefix } from "@/lib/prefix";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function PackingPage() {
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
            src={`${prefix}/images/packing.jpg`}
            alt="Packing Background"
            fill
            className={`w-full h-full object-cover object-center rounded-2xl drop-shadow-2xl transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
            >
              Packing Guide
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full pt-12 pb-20 relative">
        <div className="relative w-full px-6 md:px-12 z-10">
          <div className="mt-8 text-lg md:text-xl text-zinc-800 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#b49900]">
            <p className="mb-8 text-zinc-600">Pack smart for a week in paradise! Cancun's tropical climate means warm days, occasional rain, and plenty of sunshine. Here's your comprehensive packing guide for both of you.</p>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Weather & Climate</h2>
            <div className="mb-8 bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
              <p className="mb-2"><strong>Temperature:</strong> 75-85°F (24-29°C) during the day, 65-75°F (18-24°C) at night</p>
              <p className="mb-2"><strong>Humidity:</strong> High (70-90%)</p>
              <p className="mb-2"><strong>Rain:</strong> Possible brief tropical showers, especially in afternoon</p>
              <p className="mb-2"><strong>UV Index:</strong> Very High - sun protection essential!</p>
              <p className="text-amber-700 mt-4">💡 Pack light, breathable fabrics that dry quickly</p>
            </div>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>For Her - Clothing</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👙</span>
                <div>
                  <strong>Swimwear (4-5 pieces):</strong>
                  <br />
                  <span className="text-base md:text-lg">Multiple bikinis or one-pieces so there's always a dry option. Mix and match tops and bottoms for variety.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👗</span>
                <div>
                  <strong>Dresses (5-7):</strong>
                  <br />
                  <span className="text-base md:text-lg">• 3-4 sundresses for daytime (lightweight, breathable)</span>
                  <br />
                  <span className="text-base md:text-lg">• 2-3 nicer dresses for resort dinners (casual elegant)</span>
                  <br />
                  <span className="text-base md:text-lg">• 1 maxi dress for sunset walks</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Flowy fabrics in tropical prints or solid colors</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👚</span>
                <div>
                  <strong>Tops (6-8):</strong>
                  <br />
                  <span className="text-base md:text-lg">• Tank tops and camisoles</span>
                  <br />
                  <span className="text-base md:text-lg">• Light blouses or button-downs</span>
                  <br />
                  <span className="text-base md:text-lg">• Crop tops for casual days</span>
                  <br />
                  <span className="text-base md:text-lg">• Off-shoulder or flutter sleeve options</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩳</span>
                <div>
                  <strong>Bottoms (4-6):</strong>
                  <br />
                  <span className="text-base md:text-lg">• 2-3 pairs of shorts (denim, linen, or cotton)</span>
                  <br />
                  <span className="text-base md:text-lg">• 1-2 flowy pants or palazzo pants</span>
                  <br />
                  <span className="text-base md:text-lg">• 1 pair of white pants/jeans for nicer dinners</span>
                  <br />
                  <span className="text-base md:text-lg">• Romper or jumpsuit (versatile option)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏖️</span>
                <div>
                  <strong>Cover-ups & Beach Wear (2-3):</strong>
                  <br />
                  <span className="text-base md:text-lg">• Sarong or beach wrap</span>
                  <br />
                  <span className="text-base md:text-lg">• Kimono or kaftan</span>
                  <br />
                  <span className="text-base md:text-lg">• Beach dress or tunic</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👟</span>
                <div>
                  <strong>Footwear:</strong>
                  <br />
                  <span className="text-base md:text-lg">• 2 pairs of sandals (one dressy, one casual)</span>
                  <br />
                  <span className="text-base md:text-lg">• Flip flops for beach/pool</span>
                  <br />
                  <span className="text-base md:text-lg">• Water shoes for cenotes and rocky areas</span>
                  <br />
                  <span className="text-base md:text-lg">• Sneakers or walking shoes for ruins</span>
                  <br />
                  <span className="text-base md:text-lg">• Wedges or block heels for dinner (optional)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧥</span>
                <div>
                  <strong>Light Layers:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Light cardigan or denim jacket (for A/C)</span>
                  <br />
                  <span className="text-base md:text-lg">• Shawl or pashmina for evening breezes</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩱</span>
                <div>
                  <strong>Undergarments & Intimates:</strong>
                  <br />
                  <span className="text-base md:text-lg">• 7-8 pairs of underwear</span>
                  <br />
                  <span className="text-base md:text-lg">• 2-3 bras (one strapless/convertible)</span>
                  <br />
                  <span className="text-base md:text-lg">• Sleepwear (light pajamas or nightgowns)</span>
                  <br />
                  <span className="text-base md:text-lg">• Something special for romance 💕</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>For Him - Clothing</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩳</span>
                <div>
                  <strong>Swim Trunks (3-4 pairs):</strong>
                  <br />
                  <span className="text-base md:text-lg">Different colors/styles so you always have a dry pair ready</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👕</span>
                <div>
                  <strong>Shirts (5-7):</strong>
                  <br />
                  <span className="text-base md:text-lg">• 3-4 t-shirts (quick-dry material ideal)</span>
                  <br />
                  <span className="text-base md:text-lg">• 2-3 button-down shirts (linen or cotton)</span>
                  <br />
                  <span className="text-base md:text-lg">• 1 polo shirt</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Light colors reflect heat better</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩳</span>
                <div>
                  <strong>Bottoms (4-5):</strong>
                  <br />
                  <span className="text-base md:text-lg">• 2-3 pairs of shorts (cargo, chino, or casual)</span>
                  <br />
                  <span className="text-base md:text-lg">• 1-2 pairs of lightweight pants/chinos</span>
                  <br />
                  <span className="text-base md:text-lg">• 1 pair of jeans (optional, for A/C)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👟</span>
                <div>
                  <strong>Footwear:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Sandals (Teva-style or leather)</span>
                  <br />
                  <span className="text-base md:text-lg">• Flip flops for beach/pool</span>
                  <br />
                  <span className="text-base md:text-lg">• Water shoes for cenotes</span>
                  <br />
                  <span className="text-base md:text-lg">• Sneakers or hiking shoes for ruins/excursions</span>
                  <br />
                  <span className="text-base md:text-lg">• Boat shoes or loafers for dinner (optional)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩲</span>
                <div>
                  <strong>Undergarments:</strong>
                  <br />
                  <span className="text-base md:text-lg">• 7-8 pairs of underwear</span>
                  <br />
                  <span className="text-base md:text-lg">• 7-8 pairs of socks (if wearing sneakers)</span>
                  <br />
                  <span className="text-base md:text-lg">• Sleepwear/gym shorts for sleeping</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧥</span>
                <div>
                  <strong>Light Layers:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Light hoodie or zip-up (for plane/A/C)</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Accessories for Both</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👒</span>
                <div>
                  <strong>Sun Protection:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Wide-brimmed hat or sun hat (for her)</span>
                  <br />
                  <span className="text-base md:text-lg">• Baseball cap or bucket hat (for him)</span>
                  <br />
                  <span className="text-base md:text-lg">• Polarized sunglasses (both - essential!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Extra pair of sunglasses as backup</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👜</span>
                <div>
                  <strong>Bags:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Beach bag or tote (large, waterproof lining ideal)</span>
                  <br />
                  <span className="text-base md:text-lg">• Crossbody bag or purse for excursions</span>
                  <br />
                  <span className="text-base md:text-lg">• Small backpack for tours/day trips</span>
                  <br />
                  <span className="text-base md:text-lg">• Dry bag or waterproof pouch (for cenotes/water activities)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💍</span>
                <div>
                  <strong>Jewelry & Watches:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Minimal jewelry (leave valuables at home)</span>
                  <br />
                  <span className="text-base md:text-lg">• Waterproof watch or activity tracker</span>
                  <br />
                  <span className="text-base md:text-lg">• Simple earrings, necklaces, bracelets</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">⚠️ Skip expensive jewelry - saltwater damages metals</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Beach & Pool Essentials</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🏖️</span>
                <div>
                  <strong>Must-Haves:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Large beach towels (2 - resort may provide but bring your own)</span>
                  <br />
                  <span className="text-base md:text-lg">• Microfiber quick-dry towels (compact for travel)</span>
                  <br />
                  <span className="text-base md:text-lg">• Beach umbrella or pop-up tent (optional, for extra shade)</span>
                  <br />
                  <span className="text-base md:text-lg">• Inflatable pool floats (fun addition!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Waterproof phone case</span>
                  <br />
                  <span className="text-base md:text-lg">• Ziplock bags (for keeping items dry)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🤿</span>
                <div>
                  <strong>Snorkeling Gear (Optional):</strong>
                  <br />
                  <span className="text-base md:text-lg">• Personal snorkel mask (more hygienic than rentals)</span>
                  <br />
                  <span className="text-base md:text-lg">• Fins (if you snorkel a lot)</span>
                  <br />
                  <span className="text-base md:text-lg text-zinc-600">Note: Most tours provide equipment</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Sun Protection & Skincare</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">☀️</span>
                <div>
                  <strong>Sunscreen - CRITICAL:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Reef-safe, biodegradable sunscreen (SPF 50+) - REQUIRED at eco-parks</span>
                  <br />
                  <span className="text-base md:text-lg">• Face sunscreen (separate, non-comedogenic)</span>
                  <br />
                  <span className="text-base md:text-lg">• Lip balm with SPF</span>
                  <br />
                  <span className="text-base md:text-lg">• After-sun lotion or aloe vera gel</span>
                  <br />
                  <span className="text-base md:text-lg text-red-600">⚠️ Reapply every 2 hours - UV is intense!</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💧</span>
                <div>
                  <strong>For Her - Additional Skincare:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Moisturizer (humidity can still dehydrate skin)</span>
                  <br />
                  <span className="text-base md:text-lg">• Facial cleanser</span>
                  <br />
                  <span className="text-base md:text-lg">• Toner/serum (travel sizes)</span>
                  <br />
                  <span className="text-base md:text-lg">• Face masks (sheet masks for pampering)</span>
                  <br />
                  <span className="text-base md:text-lg">• Makeup remover wipes</span>
                  <br />
                  <span className="text-base md:text-lg">• Body lotion</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💄</span>
                <div>
                  <strong>For Her - Makeup & Beauty:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Waterproof mascara</span>
                  <br />
                  <span className="text-base md:text-lg">• BB cream or tinted moisturizer with SPF</span>
                  <br />
                  <span className="text-base md:text-lg">• Minimal makeup (heat makes it melt!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Bronzer/blush for evening</span>
                  <br />
                  <span className="text-base md:text-lg">• Brow pencil/gel</span>
                  <br />
                  <span className="text-base md:text-lg">• Lip gloss/lipstick</span>
                  <br />
                  <span className="text-base md:text-lg">• Setting spray (humidity-proof)</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Toiletries & Personal Care</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧴</span>
                <div>
                  <strong>Basics for Both:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Shampoo & conditioner (resort provides, but bring favorites)</span>
                  <br />
                  <span className="text-base md:text-lg">• Body wash/soap</span>
                  <br />
                  <span className="text-base md:text-lg">• Toothbrush & toothpaste</span>
                  <br />
                  <span className="text-base md:text-lg">• Dental floss</span>
                  <br />
                  <span className="text-base md:text-lg">• Deodorant (antiperspirant essential in humidity)</span>
                  <br />
                  <span className="text-base md:text-lg">• Razor & shaving cream</span>
                  <br />
                  <span className="text-base md:text-lg">• Cotton swabs</span>
                  <br />
                  <span className="text-base md:text-lg">• Nail clippers/file</span>
                  <br />
                  <span className="text-base md:text-lg">• Tweezers</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💇‍♀️</span>
                <div>
                  <strong>For Her - Hair Care:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Hair brush/comb</span>
                  <br />
                  <span className="text-base md:text-lg">• Hair ties/scrunchies</span>
                  <br />
                  <span className="text-base md:text-lg">• Bobby pins/clips</span>
                  <br />
                  <span className="text-base md:text-lg">• Leave-in conditioner or hair oil (saltwater protection)</span>
                  <br />
                  <span className="text-base md:text-lg">• Hair straightener or curler (if needed)</span>
                  <br />
                  <span className="text-base md:text-lg">• Dry shampoo</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Embrace beach waves - fighting humidity is futile!</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💇‍♂️</span>
                <div>
                  <strong>For Him - Grooming:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Comb/brush</span>
                  <br />
                  <span className="text-base md:text-lg">• Hair product (gel/pomade)</span>
                  <br />
                  <span className="text-base md:text-lg">• Beard trimmer (if applicable)</span>
                  <br />
                  <span className="text-base md:text-lg">• Cologne (travel size)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🩹</span>
                <div>
                  <strong>Feminine Products:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Tampons/pads (bring extras)</span>
                  <br />
                  <span className="text-base md:text-lg">• Panty liners</span>
                  <br />
                  <span className="text-base md:text-lg">• Pain reliever for cramps</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Health & Medications</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💊</span>
                <div>
                  <strong>First Aid & Medications:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Prescription medications (in original bottles)</span>
                  <br />
                  <span className="text-base md:text-lg">• Pain reliever (ibuprofen, acetaminophen)</span>
                  <br />
                  <span className="text-base md:text-lg">• Antihistamine (allergies, bug bites)</span>
                  <br />
                  <span className="text-base md:text-lg">• Anti-diarrheal medication (Imodium)</span>
                  <br />
                  <span className="text-base md:text-lg">• Antacid/stomach relief (Tums, Pepto Bismol)</span>
                  <br />
                  <span className="text-base md:text-lg">• Motion sickness medication (for boats)</span>
                  <br />
                  <span className="text-base md:text-lg">• Band-aids and antibiotic ointment</span>
                  <br />
                  <span className="text-base md:text-lg">• Hydrocortisone cream</span>
                  <br />
                  <span className="text-base md:text-lg">• Blister prevention (moleskin/bandages)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🦟</span>
                <div>
                  <strong>Bug Protection:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Insect repellent (DEET or natural)</span>
                  <br />
                  <span className="text-base md:text-lg">• After-bite relief</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">🌙 Mosquitoes more active at dawn/dusk near cenotes</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">👓</span>
                <div>
                  <strong>Vision:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Contact lenses & solution</span>
                  <br />
                  <span className="text-base md:text-lg">• Backup glasses</span>
                  <br />
                  <span className="text-base md:text-lg">• Contact case</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Electronics & Gadgets</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📱</span>
                <div>
                  <strong>Essential Electronics:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Smartphones (both)</span>
                  <br />
                  <span className="text-base md:text-lg">• Phone chargers (one each)</span>
                  <br />
                  <span className="text-base md:text-lg">• Portable power bank (2-3 for long days out)</span>
                  <br />
                  <span className="text-base md:text-lg">• Camera (if not using phone)</span>
                  <br />
                  <span className="text-base md:text-lg">• GoPro or action camera (great for water activities)</span>
                  <br />
                  <span className="text-base md:text-lg">• E-reader or tablet (for beach reading)</span>
                  <br />
                  <span className="text-base md:text-lg">• Headphones/earbuds (for flights)</span>
                  <br />
                  <span className="text-base md:text-lg">• Laptop (if working remotely)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🔌</span>
                <div>
                  <strong>Power & Adapters:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Universal power adapter (Mexico uses Type A/B, same as US)</span>
                  <br />
                  <span className="text-base md:text-lg">• Power strip (limited outlets in rooms)</span>
                  <br />
                  <span className="text-base md:text-lg">• USB charging hub</span>
                  <br />
                  <span className="text-base md:text-lg">• Extra charging cables</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💡</span>
                <div>
                  <strong>Other Useful Items:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Portable Bluetooth speaker (for beach vibes)</span>
                  <br />
                  <span className="text-base md:text-lg">• Travel alarm clock</span>
                  <br />
                  <span className="text-base md:text-lg">• Flashlight or headlamp (for evening walks)</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Travel Documents & Money</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📄</span>
                <div>
                  <strong>Essential Documents:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Passports (check expiration dates!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Photocopies of passports (keep separate)</span>
                  <br />
                  <span className="text-base md:text-lg">• Travel insurance information</span>
                  <br />
                  <span className="text-base md:text-lg">• Flight confirmation/boarding passes</span>
                  <br />
                  <span className="text-base md:text-lg">• Hotel reservation confirmation</span>
                  <br />
                  <span className="text-base md:text-lg">• Tour/activity vouchers</span>
                  <br />
                  <span className="text-base md:text-lg">• Driver's license (ID backup)</span>
                  <br />
                  <span className="text-base md:text-lg">• Covid vaccination cards (if required)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💰</span>
                <div>
                  <strong>Money & Payment:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Credit cards (notify bank of travel dates)</span>
                  <br />
                  <span className="text-base md:text-lg">• Debit card for ATM withdrawals</span>
                  <br />
                  <span className="text-base md:text-lg">• US dollars for tips (small bills - $1, $5, $10)</span>
                  <br />
                  <span className="text-base md:text-lg">• Some Mexican pesos (for markets, taxis)</span>
                  <br />
                  <span className="text-base md:text-lg">• Money clip or travel wallet</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Tip: $1-2 USD per drink/service, $5-10 for room cleaning</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Miscellaneous Essentials</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎒</span>
                <div>
                  <strong>Luggage & Packing:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Checked luggage (one each or share one large)</span>
                  <br />
                  <span className="text-base md:text-lg">• Carry-on bags (essential items, valuables)</span>
                  <br />
                  <span className="text-base md:text-lg">• Packing cubes (organization game-changer!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Laundry bag or plastic bags (for dirty clothes)</span>
                  <br />
                  <span className="text-base md:text-lg">• Extra foldable bag (for souvenirs on return)</span>
                  <br />
                  <span className="text-base md:text-lg">• Luggage locks</span>
                  <br />
                  <span className="text-base md:text-lg">• Luggage tags</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">📚</span>
                <div>
                  <strong>Entertainment & Comfort:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Books/magazines (beach reading)</span>
                  <br />
                  <span className="text-base md:text-lg">• Playing cards or travel games</span>
                  <br />
                  <span className="text-base md:text-lg">• Journal/notebook & pen</span>
                  <br />
                  <span className="text-base md:text-lg">• Travel pillow (for flights)</span>
                  <br />
                  <span className="text-base md:text-lg">• Eye mask & earplugs</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧹</span>
                <div>
                  <strong>Cleaning & Organization:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Hand sanitizer</span>
                  <br />
                  <span className="text-base md:text-lg">• Disinfecting wipes</span>
                  <br />
                  <span className="text-base md:text-lg">• Tissues/travel tissue packs</span>
                  <br />
                  <span className="text-base md:text-lg">• Wet wipes/baby wipes</span>
                  <br />
                  <span className="text-base md:text-lg">• Stain remover pen</span>
                  <br />
                  <span className="text-base md:text-lg">• Lint roller (travel size)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🍽️</span>
                <div>
                  <strong>Food & Drink:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Reusable water bottles (2 - stay hydrated!)</span>
                  <br />
                  <span className="text-base md:text-lg">• Insulated tumblers (for pool drinks)</span>
                  <br />
                  <span className="text-base md:text-lg">• Snacks for travel days (granola bars, crackers)</span>
                  <br />
                  <span className="text-base md:text-lg">• Gum/mints</span>
                  <br />
                  <span className="text-base md:text-lg text-amber-700">💡 Pro tip: Electrolyte packets for hangovers</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🌊</span>
                <div>
                  <strong>Other Beach Essentials:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Beach blanket or mat</span>
                  <br />
                  <span className="text-base md:text-lg">• Cooler bag (for drinks)</span>
                  <br />
                  <span className="text-base md:text-lg">• Carabiner clips (attach items to bags)</span>
                  <br />
                  <span className="text-base md:text-lg">• Duct tape or packing tape (fixes everything!)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🎁</span>
                <div>
                  <strong>Romance & Special Touches:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Candles (battery-operated for safety)</span>
                  <br />
                  <span className="text-base md:text-lg">• Nice cologne/perfume</span>
                  <br />
                  <span className="text-base md:text-lg">• A special gift for each other</span>
                  <br />
                  <span className="text-base md:text-lg">• Bluetooth remote for couple photos</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>Packing Tips & Strategies</h2>
            <ul className="list-none ml-0 mb-8 space-y-4">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">✈️</span>
                <div>
                  <strong>Pack Smart:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Roll clothes instead of folding (saves space)</span>
                  <br />
                  <span className="text-base md:text-lg">• Use packing cubes for organization</span>
                  <br />
                  <span className="text-base md:text-lg">• Stuff socks/underwear inside shoes</span>
                  <br />
                  <span className="text-base md:text-lg">• Place heaviest items at wheel end of suitcase</span>
                  <br />
                  <span className="text-base md:text-lg">• Pack a change of clothes in carry-on (in case luggage delays)</span>
                  <br />
                  <span className="text-base md:text-lg">• Keep swimsuit, sunscreen, and one outfit accessible</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">💼</span>
                <div>
                  <strong>Carry-On Essentials:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Medications & prescriptions</span>
                  <br />
                  <span className="text-base md:text-lg">• Valuables (jewelry, electronics)</span>
                  <br />
                  <span className="text-base md:text-lg">• Travel documents</span>
                  <br />
                  <span className="text-base md:text-lg">• One change of clothes</span>
                  <br />
                  <span className="text-base md:text-lg">• Toiletries (TSA-approved sizes: 3.4oz/100ml)</span>
                  <br />
                  <span className="text-base md:text-lg">• Snacks for flight</span>
                  <br />
                  <span className="text-base md:text-lg">• Entertainment (book, headphones)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🧺</span>
                <div>
                  <strong>Laundry Options:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Resort laundry service available (usually extra cost)</span>
                  <br />
                  <span className="text-base md:text-lg">• Hand wash swimsuits and undergarments in room</span>
                  <br />
                  <span className="text-base md:text-lg">• Bring travel-size detergent packets</span>
                  <br />
                  <span className="text-base md:text-lg">• Portable clothesline or hangers</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">🛍️</span>
                <div>
                  <strong>Leave Room for Souvenirs:</strong>
                  <br />
                  <span className="text-base md:text-lg">• Don't pack bags 100% full going there</span>
                  <br />
                  <span className="text-base md:text-lg">• Bring foldable bag for extra shopping items</span>
                  <br />
                  <span className="text-base md:text-lg">• Consider shipping large items home</span>
                </div>
              </li>
            </ul>

            <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className}`}>What NOT to Pack</h2>
            <ul className="list-none ml-0 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Excessive jewelry or valuables (risk of loss/theft)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Too many "just in case" items (keep it minimal)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Heavy jeans or winter clothes (you won't need them)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Hair dryer/iron (resorts provide these)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Full-size toiletries (travel sizes or buy there)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• White clothes that stain easily (sunscreen, drinks, sand)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#b49900] mr-3 text-2xl">❌</span>
                <div>
                  <span className="text-base md:text-lg">• Work laptop (unless absolutely necessary - vacation time!)</span>
                </div>
              </li>
            </ul>

            <div className="mt-12 bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
              <h3 className={`text-3xl md:text-4xl font-light mb-4 text-[#b49900] ${tangerine.className}`}>Final Packing Checklist</h3>
              <p className="mb-4">Print this out and check items off as you pack:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">One Week Before:</p>
                  <p className="text-base">☐ Check passport expiration dates</p>
                  <p className="text-base">☐ Notify bank/credit cards of travel</p>
                  <p className="text-base">☐ Book any last-minute tours</p>
                  <p className="text-base">☐ Download offline maps/translation app</p>
                  <p className="text-base">☐ Start weather watching</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Day Before Departure:</p>
                  <p className="text-base">☐ Print boarding passes & confirmations</p>
                  <p className="text-base">☐ Charge all electronics</p>
                  <p className="text-base">☐ Set up auto-reply emails</p>
                  <p className="text-base">☐ Arrange pet/house care</p>
                  <p className="text-base">☐ Pack carry-on & personal items</p>
                </div>
              </div>
              <p className="mt-4 text-amber-700 font-bold">Remember: You can buy most things in Cancun if you forget something. Don't stress - just enjoy your vacation! 🌴☀️</p>
            </div>
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
