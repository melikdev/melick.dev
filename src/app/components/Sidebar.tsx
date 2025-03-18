'use client';

import { Button } from '@/components/ui/button';
import useScroll from '@/hooks/useScroll';
import Link from 'next/link';

type NavButtonProps = {
  bg: string;
  width: string;
  children: string;
  href: string;
  onScroll: boolean;
};

const NavButton = ({ bg, width, children, href, onScroll }: NavButtonProps) => {
  return (
    <Button
      asChild
      style={{
        background: bg,
        width: onScroll ? '100%' : width,
      }}
      className={`text-black text-lg h-10`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const Sidebar = () => {
  const { scrolled } = useScroll();

  return (
    <main className="max-w-md sticky top-[10vh]">
      <section
        className={`flex flex-col gap-3 justify-center transition-all duration-700 ease-in-out items-end`}
      >
        <NavButton bg="#D7C5DD" width="40%" href="#intro" onScroll={scrolled}>
          Intro
        </NavButton>
        <NavButton
          bg="#F7E8D4"
          width="60%"
          href="#about-me"
          onScroll={scrolled}
        >
          About me
        </NavButton>
        <NavButton
          bg="#CAE8E4"
          width="40%"
          href="#projects"
          onScroll={scrolled}
        >
          Projects
        </NavButton>
        <NavButton bg="#D5E3C3" width="50%" href="#resume" onScroll={scrolled}>
          Resume
        </NavButton>
        <NavButton bg="#E3C3C3" width="60%" href="#contact" onScroll={scrolled}>
          Contact
        </NavButton>
      </section>
    </main>
  );
};

export default Sidebar;
