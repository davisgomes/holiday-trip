'use client';
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/page-layout/PageHeader";
import ContentCard from "@/components/page-layout/ContentCard";
import SectionHeading from "@/components/content/SectionHeading";
import ListItem from "@/components/content/ListItem";
import InfoTag from "@/components/content/InfoTag";

export default function ActivitiesPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <PageHeader
          imageSrc="/images/activities.jpg"
          imageAlt="Activities Background"
          title="Activities & Excursions"
        />
        
        <ContentCard>
          <p className="mb-8 text-zinc-600">
            Most tours include round-trip transportation from your resort. Book through your hotel concierge or platforms like <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Viator</a>.
          </p>

          <SectionHeading>Mayan Ruins</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏛️" title="Tulum Ruins:">
              <span className="text-base md:text-lg">Stunning beachside Mayan ruins overlooking the Caribbean Sea. One of the most picturesque archaeological sites in Mexico. <a href="https://en.kaytrip.com/travel-guides/2025/10/24/the-ultimate-travel-guide-cancun-and-tulum-archaeological-zone/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Learn more about Tulum</a>.</span>
              <InfoTag type="duration">Duration: Half day</InfoTag>
              <InfoTag type="distance">Distance: ~2 hours from Cancun</InfoTag>
              <InfoTag type="tip">☀️ Tip: Very little shade - bring sunscreen, hat, and water</InfoTag>
              <InfoTag type="tip">🐢 Popular combo tours include turtle snorkeling and cenote visits</InfoTag>
            </ListItem>
            
            <ListItem icon="🏛️" title="Chichen Itza:">
              <span className="text-base md:text-lg">UNESCO World Heritage Site featuring the iconic El Castillo pyramid. One of the New Seven Wonders of the World. Highly recommended - described as "an absolute delight" for history lovers. <a href="https://www.chichenitza.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Visit the official site</a>.</span>
              <InfoTag type="duration">Duration: Full day (~6 hours round trip)</InfoTag>
              <InfoTag type="distance">Distance: ~3 hours from Cancun</InfoTag>
              <InfoTag type="tip">💡 Tip: Many tours include cenote visits and traditional lunch</InfoTag>
            </ListItem>
            
            <ListItem icon="🏛️" title="Coba Ruins:">
              <span className="text-base md:text-lg">Ancient Mayan city in the jungle. Visit the Choo-Ha Cenote nearby - an absolutely amazing underground cenote. <a href="https://www.goatsontheroad.com/coba-ruins-mexico/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Explore Coba</a>.</span>
            </ListItem>
          </ul>

          <SectionHeading>Cenotes</SectionHeading>
          <p className="mb-4 text-zinc-600">Natural sinkholes filled with crystal-clear freshwater. Swim in underground caves and explore these unique geological formations. Perfect for escaping the heat!</p>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="💧" title="Cenote Swimming & Cave Exploration:">
              <span className="text-base md:text-lg">Experience the magic of swimming in underground cenotes with stalactites and natural light filtering through openings. <a href="https://www.travelyucatan.com/cenote-dos-ojos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Discover Cenote Dos Ojos</a>.</span>
              <InfoTag type="tip">🎯 Popular: 5-Cenote Tour or cenotes combined with ruins visits</InfoTag>
              <InfoTag type="tip">⭐ Highly recommended: Choo-Ha Cenote in Coba - an absolutely amazing underground cenote</InfoTag>
            </ListItem>
            
            <ListItem icon="🪂" title="Activities Available:">
              <span className="text-base md:text-lg">Swimming, snorkeling, cliff jumping, rappelling, and zip-lining at various cenote locations</span>
            </ListItem>
          </ul>

          <SectionHeading>Island Adventures</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏝️" title="Isla Mujeres - HIGHLY RECOMMENDED:">
              <span className="text-base md:text-lg">Make a full day of it! Beautiful island accessible by ferry from Cancun. Rent a golf cart to explore at your own pace. <a href="https://www.islandlifemexico.com/isla-mujeres-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Complete Isla Mujeres guide</a>.</span>
              <InfoTag type="tip">• Punta Sur: Amazing southern tip with "Cliff of the Dawn" - hit the ferry early and visit here first</InfoTag>
              <InfoTag type="tip">• Pristine beaches without seaweed issues on the northern side</InfoTag>
              <InfoTag type="tip">• Local shops, restaurants, and beach clubs</InfoTag>
              <InfoTag type="tip">• Snorkeling and water sports</InfoTag>
              <InfoTag type="tip">🚗 Golf cart rentals available - drive around, visit Punta Sur, then bus back to north side to lounge</InfoTag>
              <InfoTag type="tip">🌮 Must-try: Tacos de Humo on the island</InfoTag>
              <InfoTag type="tip">⚠️ Avoid anyone who claims to "know you from your resort" - common scam</InfoTag>
            </ListItem>
            
            <ListItem icon="🌴" title="Cozumel:">
              <span className="text-base md:text-lg">Take a ferry from Playa del Carmen to this larger island known for gorgeous snorkeling and world-class diving. Consider adding a tequila tour!</span>
            </ListItem>
          </ul>

          <SectionHeading>Snorkeling & Marine Life</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🐢" title="Akumal Bay - Swim with Sea Turtles:">
              <span className="text-base md:text-lg">Snorkel alongside gentle sea turtles in their natural habitat. One of the most magical experiences in the Riviera Maya. <a href="https://rivieramaya.mx/en/travel-guide-akumal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Akumal travel guide</a>.</span>
              <InfoTag type="tip">Highly recommended combo: Tulum ruins, cenote, and turtle snorkeling (available from Cancun Adventures)</InfoTag>
            </ListItem>
            
            <ListItem icon="🤿" title="Xel-Ha Natural Aquarium:">
              <span className="text-base md:text-lg">All-inclusive eco-park with natural inlet for snorkeling, cliff jumping, and floating down lazy rivers. Has its own bus transportation from hotels. <a href="https://xelha.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Visit Xel-Há website</a>.</span>
              <InfoTag type="inclusion">Includes food, drinks, snorkel gear, and life jackets</InfoTag>
            </ListItem>
            
            <ListItem icon="🤿" title="Snorkeling Off Your Resort:">
              <span className="text-base md:text-lg">Many resorts offer great snorkeling right from the beach - ask your concierge about equipment rentals. <a href="https://www.fodors.com/world/mexico-and-central-america/mexico/cancun/experiences/news/photos/best-things-to-do-in-cancun" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Best things to do in Cancun</a>.</span>
            </ListItem>
            
            <ListItem icon="🤿" title="Scuba Diving:">
              <span className="text-base md:text-lg">For certified divers or those wanting to learn - Cancun and Cozumel offer world-class diving experiences. <a href="https://travel.com/regions/north-america/mexico/cancun-mexico-best-things-to-do-top-picks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Explore diving options</a>.</span>
            </ListItem>
          </ul>

          <SectionHeading>Adventure Parks</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🎢" title="Xcaret Park:">
              <span className="text-base md:text-lg">Eco-archaeological park combining nature, culture, and entertainment. Has its own bus transportation from hotels. <a href="https://www.xcaret.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Visit Xcaret official site</a>.</span>
              <InfoTag type="inclusion">• Underground river swimming</InfoTag>
              <InfoTag type="inclusion">• Wildlife (butterfly pavilion, aviary, jaguars)</InfoTag>
              <InfoTag type="inclusion">• Cultural shows and traditional Mexican evening spectacular</InfoTag>
              <InfoTag type="inclusion">• Beach access and snorkeling</InfoTag>
              <InfoTag type="tip">🎉 Special Events: Festival de Tradiciones de Vida y Muerte (Day of the Dead celebration)</InfoTag>
            </ListItem>
            
            <ListItem icon="🪂" title="Xplor Adventure Park:">
              <span className="text-base md:text-lg">Adrenaline-packed park for thrill-seekers. Popular for couples seeking adventure. <a href="https://www.xplor.travel/en/xplor-admission/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Book Xplor admission</a>.</span>
              <InfoTag type="inclusion">• Zip lines through the jungle</InfoTag>
              <InfoTag type="inclusion">• Underground cave and cenote swimming</InfoTag>
              <InfoTag type="inclusion">• Rappelling from high towers</InfoTag>
              <InfoTag type="inclusion">• Amphibious vehicle circuits</InfoTag>
              <InfoTag type="tip">⚠️ Physically demanding - some activities may be challenging</InfoTag>
            </ListItem>
            
            <ListItem icon="🌙" title="Xplor Fuego (Night Version):">
              <span className="text-base md:text-lg">Same as Xplor but at night with torches and fire - many travelers say it's better than the daytime version! <a href="https://www.xplor.travel/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Learn about Xplor Fuego</a>.</span>
            </ListItem>
          </ul>

          <SectionHeading>Romantic Experiences</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="⛵" title="Sunset Love Cruise - HIGHLY RECOMMENDED:">
              <span className="text-base md:text-lg">Sail along the coast on a catamaran while watching the sunset. Perfect for couples and romance. Repeat customers always enjoy it! <a href="https://travel.com/regions/north-america/mexico/cancun-mexico-best-things-to-do-top-picks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Find cruise options</a>.</span>
              <InfoTag type="inclusion">Usually includes drinks, snacks, and sometimes snorkeling stops</InfoTag>
              <InfoTag type="tip">💡 Tip: Shop around for the best price and make sure to book the sunset timing</InfoTag>
            </ListItem>
          </ul>

          <SectionHeading>Day Trips & Local Experiences</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏖️" title="Playa del Carmen:">
              <span className="text-base md:text-lg">Charming beach town with Fifth Avenue (Quinta Avenida) - a pedestrian street full of shops, restaurants, and bars. <a href="https://luggageandlipstick.com/valladolid-yucatan/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Explore the area</a>.</span>
              <InfoTag type="tip">Take public vans, taxi, or Uber from hotel zone</InfoTag>
            </ListItem>
            
            <ListItem icon="🌿" title="Sian Ka'an Biosphere Reserve:">
              <span className="text-base md:text-lg">UNESCO World Heritage Site - pristine nature reserve with mangroves, wildlife, and ancient Mayan sites. <a href="https://www.visitsiankaan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Plan your visit</a>.</span>
            </ListItem>
            
            <ListItem icon="🏘️" title="Valladolid:">
              <span className="text-base md:text-lg">Colonial town often included on Chichen Itza tours. Colorful streets, local culture, and nearby cenotes. <a href="https://luggageandlipstick.com/valladolid-yucatan/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Discover Valladolid</a>.</span>
            </ListItem>
            
            <ListItem icon="🛍️" title="La Isla Shopping Mall:">
              <span className="text-base md:text-lg">Pretty fun outdoor mall with interesting attractions, shopping, and dining options in the hotel zone. <a href="https://islacancun.mx/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View mall directory</a>.</span>
            </ListItem>
            
            <ListItem icon="🏛️" title="Mayan Museum of Cancun:">
              <span className="text-base md:text-lg">More mellow cultural experience. Walk outdoor grounds with remains of old buildings and temples, plus indoor exhibits. <a href="https://en.wikipedia.org/wiki/Mayan_Museum_of_Canc%C3%BAn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Learn more</a>.</span>
              <InfoTag type="tip">⚠️ Check hours - may be closed to tourists on Sundays</InfoTag>
            </ListItem>
            
            <ListItem icon="🌿" title="Oculta Selva Tours:">
              <span className="text-base md:text-lg">Visit national parks and protected natural areas. Personal one-on-one guided experiences including snorkel, food, and drinks. Great prices and local tips.</span>
              <InfoTag type="inclusion">Find them on Instagram @ocultaselva or their webpage</InfoTag>
            </ListItem>
            
            <ListItem icon="🍽️" title="Dining Off-Resort:">
              <span className="text-base md:text-lg">Consider walking to nearby non-resort restaurants for authentic local experiences. <a href="https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-cancun" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Travel tips for Cancun</a>.</span>
            </ListItem>
          </ul>

          <SectionHeading>Nightlife & Entertainment</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🎭" title="Coco Bongos:">
              <span className="text-base md:text-lg">Famous nightclub with acrobatic shows, live performances, and open bar. A must if you're into nightlife! <a href="https://travel.com/regions/north-america/mexico/cancun-mexico-best-things-to-do-top-picks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Nightlife guide</a>.</span>
            </ListItem>
            
            <ListItem icon="🍸" title="Mezcalitos:">
              <span className="text-base md:text-lg">Local favorite for drinks and atmosphere. <a href="https://travel.com/regions/north-america/mexico/cancun-mexico-best-things-to-do-top-picks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">More nightlife options</a>.</span>
            </ListItem>
          </ul>

          <SectionHeading>Important Tips</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="⚠️" title="Do NOT Rent a Car:">
              <span className="text-base md:text-lg text-red-600">Multiple travelers report frequent police stops with bribe requests. Use tour transportation instead. <a href="https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-cancun" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Important travel warnings</a>.</span>
            </ListItem>
            
            <ListItem icon="🚕" title="Transportation Options:">
              <span className="text-base md:text-lg">• <strong>Uber:</strong> Works well in Cancun - easy to use and reliable</span>
              <span className="text-base md:text-lg">• <strong>Hotel Zone Buses:</strong> Very easy to navigate - one way going, one way back</span>
              <span className="text-base md:text-lg">• <strong>Resort Transportation:</strong> Ask if your resort has mobility service to other areas</span>
              <span className="text-base md:text-lg">• <strong>Pre-paid Transfers:</strong> Book airport and activity transfers in advance to save money</span>
              <span className="text-base md:text-lg text-amber-700">💡 Many parks (Xcaret, Xel-Ha) have their own bus services from hotels</span>
            </ListItem>
            
            <ListItem icon="🎫" title="Booking Options:">
              <span className="text-base md:text-lg">• Hotel concierge (tour reps available at most resorts)</span>
              <span className="text-base md:text-lg">• Viator or TripAdvisor for online booking</span>
              <span className="text-base md:text-lg">• Cancun Adventures for combo tours</span>
              <span className="text-base md:text-lg">• Private tour guides for customized experiences (Oculta Selva)</span>
              <span className="text-base md:text-lg text-amber-700">💰 Buy activities in advance online - often better prices</span>
            </ListItem>
            
            <ListItem icon="💡" title="General Advice:">
              <span className="text-base md:text-lg">• Book early for popular tours and special events</span>
              <span className="text-base md:text-lg">• Bring biodegradable sunscreen (required at many eco-parks)</span>
              <span className="text-base md:text-lg">• Wear water shoes for cenotes and rocky beaches</span>
              <span className="text-base md:text-lg">• Bring cash for tips and small purchases</span>
              <span className="text-base md:text-lg">• Pack light for tours - waterproof bag recommended</span>
              <span className="text-base md:text-lg">• Balance activity days with relaxing resort days</span>
              <span className="text-base md:text-lg text-amber-700">☀️ Pro tip: "Sunshine, food, drink, repeat" - don't over-schedule!</span>
            </ListItem>
            
            <ListItem icon="🍽️" title="Food on Tours:">
              <span className="text-base md:text-lg">Many full-day tours include authentic Mexican lunch buffets in jungle settings</span>
            </ListItem>
          </ul>

          <SectionHeading>What to Skip</SectionHeading>
          <ul className="list-none ml-0 space-y-3">
            <ListItem icon="🐬" title="Swimming with Dolphins:">
              <span className="text-base md:text-lg text-zinc-600">Widely considered overpriced and overrated by travelers</span>
            </ListItem>
          </ul>
        </ContentCard>
      </main>
    </>
  );
}