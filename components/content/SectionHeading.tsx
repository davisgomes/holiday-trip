import { tangerine } from "@/lib/fonts";

interface SectionHeadingProps {
  children: string;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-6xl font-light mb-6 text-[#b49900] ${tangerine.className} ${className}`}>
      {children}
    </h2>
  );
}
