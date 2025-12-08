'use client';
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/page-layout/PageHeader";
import ContentCard from "@/components/page-layout/ContentCard";
import SectionHeading from "@/components/content/SectionHeading";
import ListItem from "@/components/content/ListItem";
import InfoTag from "@/components/content/InfoTag";

export default function TravelPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <PageHeader
          imageSrc="/images/travel.jpg"
          imageAlt="Travel Background"
          title="Travel"
        />
        
        <ContentCard>
          <SectionHeading>Flight Information</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="✈️" title="Departing Flight:">
              <a href="https://www.flightaware.com/live/flight/DAL627" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Delta 627</a>
              <br />
              <span className="text-base md:text-lg">April 22nd at 8:55am</span>
              <InfoTag type="info">Arrive at airport by 5:55am (3 hours early for international flights)</InfoTag>
            </ListItem>

            <ListItem icon="🛬" title="Return Flight:">
              <a href="https://www.flightaware.com/live/flight/DAL626" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Delta 626</a>
              <br />
              <span className="text-base md:text-lg">April 27th at 2:25pm</span>
            </ListItem>

            <ListItem icon="🧳">
              <span className="text-base md:text-lg">Carry-on included with flight</span>
            </ListItem>
          </ul>

          <SectionHeading>Airport Transfer</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🚗" title="Transfer Service:">
              <a href="https://usa-transfers.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">USA Transfers</a>
              <InfoTag type="tip">Remember to get cash or pay in advance for the driver</InfoTag>
            </ListItem>

            <ListItem icon="🏨">
              <span className="text-base md:text-lg">Resort check-in time is at 3:00pm</span>
            </ListItem>
          </ul>

          <SectionHeading>Required Items</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="📋" title="Passport">
              <span className="text-base md:text-lg">Required for international travel</span>
            </ListItem>

            <ListItem icon="🎫" title="Boarding passes">
              <span className="text-base md:text-lg">Print or save digitally</span>
            </ListItem>
          </ul>

          <SectionHeading>Travel Tips</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-3">
            <ListItem icon="⏰">
              <span className="text-base md:text-lg">Arrive at the airport 3 hours early for international flights</span>
            </ListItem>

            <ListItem icon="💵">
              <span className="text-base md:text-lg">Keep local currency (Mexican Pesos) for tips and small purchases</span>
            </ListItem>

            <ListItem icon="📱">
              <span className="text-base md:text-lg">Download boarding passes and important documents before leaving</span>
            </ListItem>
          </ul>

          <SectionHeading>Cellphone</SectionHeading>
          <ul className="list-none ml-0 space-y-3">
            <ListItem icon="📱">
              <a href="https://www.verizon.com/support/international-travel-faqs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Verizon International Travel Info</a>
            </ListItem>

            <ListItem icon="🌎">
              <a href="https://www.t-mobile.com/cell-phone-plans/international-roaming-plans/results/mexico" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">T-Mobile International Roaming (Mexico)</a>
            </ListItem>
          </ul>
        </ContentCard>
      </main>
    </>
  );
}
