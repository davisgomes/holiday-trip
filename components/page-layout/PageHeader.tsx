'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { tangerine } from "@/lib/fonts";
import styles from "@/app/title-animation.module.scss";
import { prefix } from '@/lib/prefix';

interface PageHeaderProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

export default function PageHeader({ imageSrc, imageAlt, title }: PageHeaderProps) {
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
    <div className="relative h-96 w-full flex items-end mt-6 md:mt-12">
      <div className={`relative w-full h-full mx-6 md:mx-12 rounded-3xl overflow-hidden drop-shadow-2xl border-4 border-[#b49900] transition-all duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white drop-shadow-lg bg-transparent text-center ${tangerine.className} ${styles.title} ${showTitle ? styles["title--visible"] : styles["title--hidden"]}`}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
