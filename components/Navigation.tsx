'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [corner, setCorner] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
  const navRef = useRef<HTMLDivElement>(null);

  // Initialize position to top-right corner
  useEffect(() => {
    setIsMounted(true);
    const updatePosition = () => {
      setPosition({ x: window.innerWidth - 80, y: 24 });
      setCorner('top-right');
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        const newX = e.clientX - dragStart.x - 28;
        const newY = e.clientY - dragStart.y - 28;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStart.x - 28;
        const newY = touch.clientY - dragStart.y - 28;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.overflow = '';
        document.body.style.userSelect = '';
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const centerX = position.x + 28;
        const centerY = position.y + 28;
        
        let newX: number;
        let newY: number;
        let newCorner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

        const isLeft = centerX < windowWidth / 2;
        const isTop = centerY < windowHeight / 2;

        if (isLeft && isTop) {
          newX = 24;
          newY = 24;
          newCorner = 'top-left';
        } else if (!isLeft && isTop) {
          newX = windowWidth - 80;
          newY = 24;
          newCorner = 'top-right';
        } else if (isLeft && !isTop) {
          newX = 24;
          newY = windowHeight - 80;
          newCorner = 'bottom-left';
        } else {
          newX = windowWidth - 80;
          newY = windowHeight - 80;
          newCorner = 'bottom-right';
        }

        setPosition({ x: newX, y: newY });
        setCorner(newCorner);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragStart, position]);

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      href: '/accommodations',
      label: 'Accommodations',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      href: '/travel',
      label: 'Travel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      ),
    },
    {
      href: '/activities',
      label: 'Activities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
      ),
    },
    {
      href: '/packing',
      label: 'Packing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
    },
  ];

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - buttonRect.left - buttonRect.width / 2;
    const offsetY = e.clientY - buttonRect.top - buttonRect.height / 2;
    setDragStart({ x: offsetX, y: offsetY });
    setIsDragging(true);
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const offsetX = touch.clientX - buttonRect.left - buttonRect.width / 2;
    const offsetY = touch.clientY - buttonRect.top - buttonRect.height / 2;
    setDragStart({ x: offsetX, y: offsetY });
    setIsDragging(true);
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed z-50 ${!isDragging ? 'transition-all duration-300' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div className="relative">
        <button
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onClick={(e) => {
            if (!isDragging) {
              setIsOpen(!isOpen);
            }
          }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-[#b49900]/30 text-[#b49900] hover:bg-[#b49900] hover:text-white transition-colors duration-300 active:scale-95"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <div
          className={`absolute bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#b49900]/30 transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          } ${
            corner === 'top-left' ? 'top-16 left-0' :
            corner === 'top-right' ? 'top-16 right-0' :
            corner === 'bottom-left' ? 'bottom-16 left-0' :
            'bottom-16 right-0'
          }`}
          style={{ cursor: 'default' }}
        >
          <ul className="flex flex-col items-center gap-2 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-all duration-300 group relative ${
                      isActive
                        ? 'bg-[#b49900] text-white shadow-lg'
                        : 'bg-transparent text-zinc-600 hover:bg-[#b49900]/10 hover:text-[#b49900]'
                    }`}
                    title={item.label}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
