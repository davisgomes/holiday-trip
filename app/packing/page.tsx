'use client';
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/page-layout/PageHeader";
import ContentCard from "@/components/page-layout/ContentCard";
import SectionHeading from "@/components/content/SectionHeading";
import ListItem from "@/components/content/ListItem";
import InfoTag from "@/components/content/InfoTag";
import { prefix } from "@/lib/prefix";

export default function PackingPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <PageHeader
          imageSrc={`${prefix}/images/packing.jpg`}
          imageAlt="Packing Background"
          title="Packing Guide"
        />
        
        <ContentCard>
          <p className="mb-8 text-zinc-600">
            Pack smart for your Cancun vacation. Here's everything you need for a perfect trip!
          </p>

          <SectionHeading>Essential Documents</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="📋" title="Must Have:">
              <span className="text-base md:text-lg">• Valid passport (must be valid for 6+ months)</span>
              <br />
              <span className="text-base md:text-lg">• Flight confirmations and boarding passes</span>
              <br />
              <span className="text-base md:text-lg">• Hotel reservation confirmations</span>
              <br />
              <span className="text-base md:text-lg">• Travel insurance documents</span>
              <br />
              <span className="text-base md:text-lg">• Driver's license or ID</span>
              <br />
              <span className="text-base md:text-lg">• Copy of important documents (keep separate)</span>
              <InfoTag type="tip">💡 Take photos of all documents on your phone</InfoTag>
            </ListItem>

            <ListItem icon="💳" title="Money & Cards:">
              <span className="text-base md:text-lg">• Credit cards (Visa/Mastercard widely accepted)</span>
              <br />
              <span className="text-base md:text-lg">• Debit card for ATM withdrawals</span>
              <br />
              <span className="text-base md:text-lg">• Small USD bills ($1, $5, $10) for tips</span>
              <br />
              <span className="text-base md:text-lg">• Some Mexican pesos for local purchases</span>
              <InfoTag type="tip">💡 Notify your bank of travel dates to avoid card blocks</InfoTag>
            </ListItem>
          </ul>

          <SectionHeading>Beach & Pool Essentials</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="👙" title="Swimwear:">
              <span className="text-base md:text-lg">• 2-3 swimsuits (so one is always dry)</span>
              <br />
              <span className="text-base md:text-lg">• Cover-ups or sarongs</span>
              <br />
              <span className="text-base md:text-lg">• Rash guard for sun protection</span>
            </ListItem>

            <ListItem icon="☀️" title="Sun Protection - CRITICAL:">
              <span className="text-base md:text-lg">• Reef-safe/biodegradable sunscreen (required at cenotes and eco-parks)</span>
              <br />
              <span className="text-base md:text-lg">• High SPF (50+) for face and body</span>
              <br />
              <span className="text-base md:text-lg">• After-sun lotion or aloe vera</span>
              <br />
              <span className="text-base md:text-lg">• Wide-brimmed hat or baseball cap</span>
              <br />
              <span className="text-base md:text-lg">• Sunglasses with UV protection</span>
              <br />
              <span className="text-base md:text-lg">• Lip balm with SPF</span>
              <InfoTag type="warning">⚠️ Cancun sun is STRONG - reapply sunscreen every 2 hours!</InfoTag>
              <InfoTag type="tip">💡 Non-biodegradable sunscreen will be confiscated at many attractions</InfoTag>
            </ListItem>

            <ListItem icon="🏖️" title="Beach Accessories:">
              <span className="text-base md:text-lg">• Beach towel (most resorts provide, but good for excursions)</span>
              <br />
              <span className="text-base md:text-lg">• Waterproof phone case</span>
              <br />
              <span className="text-base md:text-lg">• Waterproof bag for valuables</span>
              <br />
              <span className="text-base md:text-lg">• Water shoes (for cenotes and rocky beaches)</span>
              <br />
              <span className="text-base md:text-lg">• Snorkel mask (optional, rentals available)</span>
              <br />
              <span className="text-base md:text-lg">• Beach bag</span>
            </ListItem>
          </ul>

          <SectionHeading>Clothing</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="👕" title="Daytime Casual:">
              <span className="text-base md:text-lg">• Lightweight shorts (5-7 pairs)</span>
              <br />
              <span className="text-base md:text-lg">• T-shirts and tank tops</span>
              <br />
              <span className="text-base md:text-lg">• Sundresses</span>
              <br />
              <span className="text-base md:text-lg">• Light cardigan or shawl (for A/C)</span>
              <InfoTag type="tip">💡 Pack breathable, quick-dry fabrics</InfoTag>
            </ListItem>

            <ListItem icon="👗" title="Evening/Dinner Wear:">
              <span className="text-base md:text-lg">• Resort casual outfits for nice restaurants</span>
              <br />
              <span className="text-base md:text-lg">• Dresses or nice pants/shirt</span>
              <br />
              <span className="text-base md:text-lg">• Closed-toe shoes (some restaurants require)</span>
              <InfoTag type="tip">💡 Check resort dress codes - some require long pants for men at dinner</InfoTag>
            </ListItem>

            <ListItem icon="👟" title="Footwear:">
              <span className="text-base md:text-lg">• Comfortable walking sandals</span>
              <br />
              <span className="text-base md:text-lg">• Flip-flops for beach/pool</span>
              <br />
              <span className="text-base md:text-lg">• Water shoes (rocky areas and cenotes)</span>
              <br />
              <span className="text-base md:text-lg">• Sneakers (for excursions and ruins)</span>
              <br />
              <span className="text-base md:text-lg">• Nicer shoes for evening dining</span>
            </ListItem>

            <ListItem icon="🧥" title="Light Layers:">
              <span className="text-base md:text-lg">• Light jacket for airplane and overly air-conditioned spaces</span>
              <br />
              <span className="text-base md:text-lg">• Long sleeves for sun protection</span>
            </ListItem>
          </ul>

          <SectionHeading>Toiletries & Personal Care</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🧴" title="Basics:">
              <span className="text-base md:text-lg">• Travel-size shampoo, conditioner, body wash</span>
              <br />
              <span className="text-base md:text-lg">• Deodorant</span>
              <br />
              <span className="text-base md:text-lg">• Toothbrush and toothpaste</span>
              <br />
              <span className="text-base md:text-lg">• Razor and shaving cream</span>
              <br />
              <span className="text-base md:text-lg">• Hair brush/comb</span>
              <br />
              <span className="text-base md:text-lg">• Feminine hygiene products</span>
              <InfoTag type="tip">💡 Most resorts provide basic toiletries</InfoTag>
            </ListItem>

            <ListItem icon="💊" title="Medications & First Aid:">
              <span className="text-base md:text-lg">• Prescription medications (in original containers)</span>
              <br />
              <span className="text-base md:text-lg">• Pain reliever (ibuprofen, acetaminophen)</span>
              <br />
              <span className="text-base md:text-lg">• Anti-diarrheal (Imodium)</span>
              <br />
              <span className="text-base md:text-lg">• Antacids</span>
              <br />
              <span className="text-base md:text-lg">• Antihistamine for allergies</span>
              <br />
              <span className="text-base md:text-lg">• Motion sickness medication</span>
              <br />
              <span className="text-base md:text-lg">• Band-aids and basic first aid supplies</span>
              <br />
              <span className="text-base md:text-lg">• Insect repellent (DEET-based)</span>
              <InfoTag type="tip">💡 Bring prescription meds for entire trip plus extras</InfoTag>
            </ListItem>

            <ListItem icon="💄" title="Beauty & Hair:">
              <span className="text-base md:text-lg">• Makeup and remover</span>
              <br />
              <span className="text-base md:text-lg">• Hair ties and clips</span>
              <br />
              <span className="text-base md:text-lg">• Leave-in conditioner (saltwater and chlorine are harsh)</span>
              <br />
              <span className="text-base md:text-lg">• Hair dryer (if not provided)</span>
            </ListItem>
          </ul>

          <SectionHeading>Electronics</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="📱" title="Devices:">
              <span className="text-base md:text-lg">• Phone and charger</span>
              <br />
              <span className="text-base md:text-lg">• Camera (waterproof recommended)</span>
              <br />
              <span className="text-base md:text-lg">• Tablet or e-reader</span>
              <br />
              <span className="text-base md:text-lg">• Power bank/portable charger</span>
              <br />
              <span className="text-base md:text-lg">• Headphones</span>
              <InfoTag type="tip">💡 Mexico uses same outlets as US/Canada - no adapter needed</InfoTag>
            </ListItem>

            <ListItem icon="🔌" title="Accessories:">
              <span className="text-base md:text-lg">• Universal power strip (charge multiple devices)</span>
              <br />
              <span className="text-base md:text-lg">• Extra charging cables</span>
              <br />
              <span className="text-base md:text-lg">• Memory cards for camera</span>
            </ListItem>
          </ul>

          <SectionHeading>Miscellaneous Essentials</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="🎒" title="Bags:">
              <span className="text-base md:text-lg">• Day backpack for excursions</span>
              <br />
              <span className="text-base md:text-lg">• Beach bag</span>
              <br />
              <span className="text-base md:text-lg">• Reusable shopping bag</span>
              <br />
              <span className="text-base md:text-lg">• Ziplock bags (for wet clothes, electronics)</span>
            </ListItem>

            <ListItem icon="📚" title="Entertainment:">
              <span className="text-base md:text-lg">• Books or e-reader</span>
              <br />
              <span className="text-base md:text-lg">• Playing cards</span>
              <br />
              <span className="text-base md:text-lg">• Travel journal</span>
            </ListItem>

            <ListItem icon="🔦" title="Other Useful Items:">
              <span className="text-base md:text-lg">• Travel umbrella (sudden rain showers)</span>
              <br />
              <span className="text-base md:text-lg">• Small flashlight</span>
              <br />
              <span className="text-base md:text-lg">• Laundry detergent packets (for longer stays)</span>
              <br />
              <span className="text-base md:text-lg">• Clothespins (for hanging swimsuits)</span>
              <br />
              <span className="text-base md:text-lg">• Reusable water bottle</span>
            </ListItem>
          </ul>

          <SectionHeading>What NOT to Pack</SectionHeading>
          <ul className="list-none ml-0 mb-8 space-y-4">
            <ListItem icon="❌" title="Leave at Home:">
              <span className="text-base md:text-lg">• Expensive jewelry (security risk)</span>
              <br />
              <span className="text-base md:text-lg">• Too many dressy outfits (resort casual is the vibe)</span>
              <br />
              <span className="text-base md:text-lg">• Hair dryer/straightener if resort provides</span>
              <br />
              <span className="text-base md:text-lg">• Too many shoes (2-3 pairs max)</span>
              <br />
              <span className="text-base md:text-lg">• Heavy toiletries (buy on arrival if needed)</span>
              <InfoTag type="tip">💡 Pack light - you can buy most items locally if needed</InfoTag>
            </ListItem>
          </ul>

          <SectionHeading>Packing Tips</SectionHeading>
          <ul className="list-none ml-0 space-y-4">
            <ListItem icon="🧳" title="Smart Packing:">
              <span className="text-base md:text-lg">• Roll clothes instead of folding to save space</span>
              <br />
              <span className="text-base md:text-lg">• Use packing cubes for organization</span>
              <br />
              <span className="text-base md:text-lg">• Pack one change of clothes in carry-on (in case luggage is delayed)</span>
              <br />
              <span className="text-base md:text-lg">• Keep medications, documents, and valuables in carry-on</span>
              <br />
              <span className="text-base md:text-lg">• Leave room in suitcase for souvenirs</span>
              <br />
              <span className="text-base md:text-lg">• Pack swimsuit and sunscreen in carry-on for immediate pool access</span>
              <InfoTag type="tip">💡 Take a photo of your luggage before checking it</InfoTag>
            </ListItem>

            <ListItem icon="⚖️" title="Baggage Allowances:">
              <span className="text-base md:text-lg">• Check your airline's baggage policy</span>
              <br />
              <span className="text-base md:text-lg">• Weigh luggage before leaving home</span>
              <br />
              <span className="text-base md:text-lg">• Consider carry-on only for shorter trips</span>
            </ListItem>
          </ul>
        </ContentCard>
      </main>
    </>
  );
}
