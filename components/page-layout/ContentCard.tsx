import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <section className="w-full pt-12 pb-20 relative">
      <div className="relative w-full px-6 md:px-12 z-10">
        <div className={`mt-8 text-lg md:text-xl text-zinc-800 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#b49900] ${className}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
