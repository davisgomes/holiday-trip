'use client';
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/page-layout/PageHeader";
import ContentCard from "@/components/page-layout/ContentCard";
import SectionHeading from "@/components/content/SectionHeading";
import ListItem from "@/components/content/ListItem";
import { prefix } from "@/lib/prefix";

export default function AccommodationsPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <PageHeader
          imageSrc={`${prefix}/images/travel.jpg`}
          imageAlt="Accommodations Background"
          title="Accommodations"
        />
        
        <ContentCard>
          <SectionHeading>Hotel Information</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏨" title="Hotel:">
              <a href="https://www.riu.com/en/hotel/mexico/cancun/hotel-riu-palace-las-americas#hotel-facilities" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hotel Riu Palace Las Americas</a>
              <br />
              <span className="text-base md:text-lg text-zinc-600">All-inclusive luxury resort in Cancun</span>
            </ListItem>
          </ul>

          <SectionHeading>Restaurants</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🍽️" title="Don Roberto - Main Restaurant">
              <span className="text-base md:text-lg">Buffet breakfasts, lunches and dinners with live cooking stations, fruits, juices, sparkling wine and desserts. Features 3 special nights a week.</span>
            </ListItem>
            
            <ListItem icon="🏊" title="El Romero - Poolside Restaurant">
              <span className="text-base md:text-lg">Continental breakfast buffet and varied snacks with hot and cold dishes for lunch.</span>
            </ListItem>
            
            <ListItem icon="🇮🇹" title="Los Arcos - Italian Restaurant">
              <span className="text-base md:text-lg">Buffet lunches and à la carte dinners.</span>
            </ListItem>
            
            <ListItem icon="🍱" title="Sakura - Asian Restaurant">
              <span className="text-base md:text-lg">Authentic recipes from across Asia.</span>
            </ListItem>
            
            <ListItem icon="✨" title="Krystal - Gourmet Restaurant">
              <span className="text-base md:text-lg">Fusion dishes and gourmet menu.</span>
            </ListItem>
            
            <ListItem icon="🇲🇽" title="Fiesta Mexicana - Mexican Restaurant">
              <span className="text-base md:text-lg">The best traditional recipes from Mexico.</span>
            </ListItem>
            
            <ListItem icon="👔" title="Dress Code:">
              <span className="text-base md:text-lg">Gentlemen must wear shirts with sleeves for dinner at the main restaurant and themed restaurants.</span>
            </ListItem>
          </ul>

          <SectionHeading>Bars</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏊‍♂️" title="Cun - Swim-up Bar">
              <span className="text-base md:text-lg">Enjoy drinks without leaving the pool.</span>
            </ListItem>
            
            <ListItem icon="🍹" title="Can - Pool Bar with Terrace">
              <span className="text-base md:text-lg">Poolside refreshments in a relaxed atmosphere.</span>
            </ListItem>
            
            <ListItem icon="🎭" title="Art Deco - Lobby Bar">
              <span className="text-base md:text-lg">Sophisticated atmosphere in the hotel lobby.</span>
            </ListItem>
            
            <ListItem icon="🍰" title="Capuchino - Pastry Shop & Ice Cream Parlor">
              <span className="text-base md:text-lg">Indulge in sweet treats and ice cream.</span>
            </ListItem>
            
            <ListItem icon="☕" title="Lounge 24 - 24-Hour Bar">
              <span className="text-base md:text-lg">Open space available all day long.</span>
            </ListItem>
            
            <ListItem icon="🎪" title="La Terraza - Plaza Bar">
              <span className="text-base md:text-lg">Outdoor atmosphere with a stage for live shows and entertainment.</span>
            </ListItem>
          </ul>

          <SectionHeading>All-Inclusive</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="⭐">
              <span className="text-base md:text-lg">Most exclusive RIU service providing the greatest well-being without any worries</span>
            </ListItem>
            
            <ListItem icon="🤿">
              <span className="text-base md:text-lg">Wide range of activities including diving, kayaking, bodyboarding, and much more!</span>
            </ListItem>
          </ul>

          <SectionHeading>Beach & Pools</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏖️" title="Beach:">
              <span className="text-base md:text-lg">White sand beach with reserved area for guests, free sun loungers, and stunning views of the Mexican Caribbean.</span>
            </ListItem>
            
            <ListItem icon="♾️" title="Infinity Pools:">
              <span className="text-base md:text-lg">Two spectacular infinity pools heated in winter with breathtaking ocean views, plus a third pool for a more tranquil experience. Surrounded by sun loungers and umbrellas with complimentary towels.</span>
            </ListItem>
          </ul>

          <SectionHeading>RIU Party</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="🎉" title="Themed Parties:">
              <span className="text-base md:text-lg">Join exciting themed parties several times a week at Hotel Riu Caribe with transportation included. Enjoy music, lights, and shows in a festive atmosphere.</span>
              <br />
              <a href="https://www.riu.com/en/riu-party" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Discover more about RIU Party</a>
            </ListItem>
          </ul>

          <SectionHeading>Fitness & Sports</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="💪" title="Gym:">
              <span className="text-base md:text-lg">Complimentary access with cardio and weight training equipment</span>
            </ListItem>
            
            <ListItem icon="🧘" title="RIU Fit:">
              <span className="text-base md:text-lg">Cardiovascular exercises, yoga, stretching, step classes, TRX, aqua gym and more</span>
            </ListItem>
            
            <ListItem icon="⛳" title="Golf:">
              <span className="text-base md:text-lg">Nearby golf courses available for guests in a tropical setting</span>
            </ListItem>
          </ul>

          <SectionHeading>Spa & Wellness</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="💆" title="Renova Spa:">
              <span className="text-base md:text-lg">Dedicated wellness and relaxation space offering massages, hairdressing, and beauty services to rejuvenate body and mind.</span>
            </ListItem>
          </ul>

          <SectionHeading>Entertainment</SectionHeading>
          <ul className="list-none ml-0 space-y-3">
            <ListItem icon="🎭">
              <span className="text-base md:text-lg">Daily entertainment program with recreational activities throughout the day</span>
            </ListItem>
            
            <ListItem icon="🎵">
              <span className="text-base md:text-lg">Evening live shows and musical performances ensuring fun every night</span>
            </ListItem>
          </ul>
        </ContentCard>
      </main>
    </>
  );
}
