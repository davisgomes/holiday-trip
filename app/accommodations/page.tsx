'use client';
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/page-layout/PageHeader";
import ContentCard from "@/components/page-layout/ContentCard";
import SectionHeading from "@/components/content/SectionHeading";
import ListItem from "@/components/content/ListItem";
import InfoTag from "@/components/content/InfoTag";

export default function AccommodationsPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <PageHeader
          imageSrc="/images/accommodations.jpg"
          imageAlt="Accommodations Background"
          title="Where to Stay"
        />
        
        <ContentCard>
          <p className="mb-8 text-zinc-600">
            Cancun offers everything from all-inclusive resorts to boutique hotels. The Hotel Zone is perfect for beach access and convenience.
          </p>

          <SectionHeading>All-Inclusive Resorts</SectionHeading>
          <p className="mb-4 text-zinc-600">
            Most popular choice for hassle-free vacations. Everything included: meals, drinks, entertainment, and activities.
          </p>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏨" title="Moon Palace Cancun - HIGHLY RECOMMENDED:">
              <span className="text-base md:text-lg">Massive all-inclusive resort with excellent food, multiple pools, and great activities. Perfect for couples and families.</span>
              <InfoTag type="inclusion">• Multiple restaurants and bars</InfoTag>
              <InfoTag type="inclusion">• Golf course and water park</InfoTag>
              <InfoTag type="inclusion">• Spa and fitness center</InfoTag>
              <InfoTag type="inclusion">• Nightly entertainment</InfoTag>
              <InfoTag type="tip">💡 Book directly or through travel agents for best rates</InfoTag>
            </ListItem>

            <ListItem icon="🏨" title="Hyatt Zilara Cancun:">
              <span className="text-base md:text-lg">Adults-only luxury resort in the heart of the Hotel Zone. Known for excellent service and beautiful beachfront.</span>
              <InfoTag type="inclusion">• Swim-up suites available</InfoTag>
              <InfoTag type="inclusion">• Multiple specialty restaurants</InfoTag>
              <InfoTag type="inclusion">• Premium drinks and top-shelf liquor</InfoTag>
            </ListItem>

            <ListItem icon="🏨" title="Hard Rock Hotel Cancun:">
              <span className="text-base md:text-lg">Music-themed resort with rock memorabilia. Great for younger crowds and partygoers.</span>
              <InfoTag type="inclusion">• Live music and entertainment</InfoTag>
              <InfoTag type="inclusion">• Multiple pools and swim-up bars</InfoTag>
              <InfoTag type="inclusion">• Kids Rock program for families</InfoTag>
            </ListItem>

            <ListItem icon="🏨" title="Excellence Playa Mujeres:">
              <span className="text-base md:text-lg">Upscale adults-only resort north of the Hotel Zone. More secluded and tranquil setting.</span>
              <InfoTag type="inclusion">• All suites with private terraces</InfoTag>
              <InfoTag type="inclusion">• 11 restaurants and 14 bars</InfoTag>
              <InfoTag type="inclusion">• World-class spa</InfoTag>
              <InfoTag type="tip">📍 About 30 minutes from airport, quieter location</InfoTag>
            </ListItem>
          </ul>

          <SectionHeading>Hotel Zone vs. Downtown</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏖️" title="Hotel Zone (Zona Hotelera):">
              <span className="text-base md:text-lg">The main tourist strip with resorts, beaches, restaurants, and nightlife.</span>
              <InfoTag type="tip">✅ Direct beach access</InfoTag>
              <InfoTag type="tip">✅ Walking distance to shops and restaurants</InfoTag>
              <InfoTag type="tip">✅ Easy access to activities and tours</InfoTag>
              <InfoTag type="tip">✅ Safe and well-patrolled</InfoTag>
              <InfoTag type="warning">❌ More expensive</InfoTag>
              <InfoTag type="warning">❌ Can feel touristy</InfoTag>
            </ListItem>

            <ListItem icon="🏙️" title="Downtown Cancun (El Centro):">
              <span className="text-base md:text-lg">Authentic local area with better prices but requires transportation to beaches.</span>
              <InfoTag type="tip">✅ More affordable</InfoTag>
              <InfoTag type="tip">✅ Authentic Mexican experience</InfoTag>
              <InfoTag type="tip">✅ Better local restaurants</InfoTag>
              <InfoTag type="warning">❌ No beach access from hotels</InfoTag>
              <InfoTag type="warning">❌ Need transportation to activities</InfoTag>
            </ListItem>
          </ul>

          <SectionHeading>What to Look For</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🏊" title="Beach Quality:">
              <span className="text-base md:text-lg">Check recent reviews for seaweed issues. Some beaches are better maintained than others.</span>
              <InfoTag type="tip">Northern beaches tend to have less seaweed</InfoTag>
            </ListItem>

            <ListItem icon="🍽️" title="Food Quality:">
              <span className="text-base md:text-lg">Read reviews about restaurant variety and quality. Some all-inclusives have better dining than others.</span>
              <InfoTag type="tip">Look for resorts with à la carte restaurants, not just buffets</InfoTag>
            </ListItem>

            <ListItem icon="🚌" title="Location:">
              <span className="text-base md:text-lg">Consider proximity to airport, activities, and nightlife based on your priorities.</span>
              <InfoTag type="tip">Central Hotel Zone offers best access to everything</InfoTag>
            </ListItem>

            <ListItem icon="🎭" title="Entertainment:">
              <span className="text-base md:text-lg">Check what activities and nightly shows are included.</span>
            </ListItem>

            <ListItem icon="👶" title="Family-Friendly vs. Adults-Only:">
              <span className="text-base md:text-lg">Adults-only resorts offer quieter, more romantic atmospheres. Family resorts have kids clubs and activities.</span>
            </ListItem>
          </ul>

          <SectionHeading>Booking Tips</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="💰" title="Best Prices:">
              <span className="text-base md:text-lg">• Book 3-6 months in advance for best rates</span>
              <br />
              <span className="text-base md:text-lg">• Compare Expedia, Booking.com, and direct resort websites</span>
              <br />
              <span className="text-base md:text-lg">• Consider travel agents for package deals</span>
              <br />
              <span className="text-base md:text-lg">• Look for all-inclusive packages including airfare</span>
            </ListItem>

            <ListItem icon="📅" title="Best Times to Visit:">
              <span className="text-base md:text-lg">• <strong>High Season (Dec-Apr):</strong> Best weather, higher prices</span>
              <br />
              <span className="text-base md:text-lg">• <strong>Shoulder Season (May, Nov):</strong> Good weather, better deals</span>
              <br />
              <span className="text-base md:text-lg">• <strong>Low Season (Jun-Oct):</strong> Hurricane season, best prices</span>
              <InfoTag type="warning">⚠️ Avoid September-October for hurricane risk</InfoTag>
            </ListItem>

            <ListItem icon="🔒" title="Travel Insurance:">
              <span className="text-base md:text-lg">Highly recommended, especially during hurricane season. Covers cancellations, medical emergencies, and lost luggage.</span>
            </ListItem>
          </ul>

          <SectionHeading>Resort Etiquette</SectionHeading>
          <ul className="list-none ml-0 space-y-4">
            <ListItem icon="💵" title="Tipping:">
              <span className="text-base md:text-lg">Even at all-inclusives, tipping is appreciated (but not required):</span>
              <br />
              <span className="text-base md:text-lg">• Bartenders: $1-2 per drink</span>
              <br />
              <span className="text-base md:text-lg">• Restaurant servers: $5-10 per meal</span>
              <br />
              <span className="text-base md:text-lg">• Housekeeping: $2-5 per day</span>
              <br />
              <span className="text-base md:text-lg">• Concierge: $5-20 for special help</span>
              <InfoTag type="tip">💡 Bring small USD bills for easy tipping</InfoTag>
            </ListItem>

            <ListItem icon="⏰" title="Reservations:">
              <span className="text-base md:text-lg">Make restaurant reservations early, especially for specialty restaurants. Some resorts book up quickly.</span>
            </ListItem>

            <ListItem icon="🎟️" title="Wristbands:">
              <span className="text-base md:text-lg">Keep your all-inclusive wristband on at all times - you'll need it for food, drinks, and activities.</span>
            </ListItem>
          </ul>
        </ContentCard>
      </main>
    </>
  );
}
