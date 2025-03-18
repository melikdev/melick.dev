'use client';

import useScroll from '@/hooks/useScroll';
import Projects from '../components/Projects';
import { cn } from '@/lib/utils';
import Resume from '../components/Resume';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

const Section = ({ children, id, className }: SectionProps) => {
  const { scrolled } = useScroll();

  return (
    <main
      id={id}
      className={cn(
        className,
        `flex flex-col gap-5 transition-all duration-300 ease-in-out mt-40 scroll-m-20 ${
          scrolled ? '' : 'opacity-0'
        }`
      )}
    >
      {children}
    </main>
  );
};

const Main = () => {
  return (
    <main className="flex flex-col">
      <section
        id="intro"
        className="flex justify-center flex-col gap-5 text-white scroll-mt-10"
      >
        <h1 className="text-5xl font-bold">Hi, I&apos;m Melik.</h1>
        <h1 className="text-5xl font-bold">a Frontend Developer</h1>
        <h1 className="text-5xl font-bold">who loves coding.</h1>
      </section>
      <section>
        <Button asChild className="md:hidden text-white mt-10">
          <Link href="#about-me">
            About Me <ArrowDown />
          </Link>
        </Button>
      </section>
      <Section id="about-me">
        <h1 className="text-md font-bold text-gray-500">About me</h1>
        <p className="text-white leading-8">
          I’m a curious and ambitious frontend developer who loves building
          clean, efficient, and user-friendly interfaces. I enjoy solving
          problems, optimizing performance, and learning new technologies to
          improve the way users interact with digital products. My experience
          with React, Next.js, and modern UI libraries helps me craft seamless
          and scalable applications. I thrive on challenges, constantly pushing
          myself to grow.
        </p>
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="resume">
        <Resume />
      </Section>
    </main>
  );
};

export default Main;
