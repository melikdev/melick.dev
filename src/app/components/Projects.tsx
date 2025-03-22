import Link from 'next/link';
import '@/app/App.css';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, LinkIcon } from 'lucide-react';

type ProjectProps = {
  tags?: string[];
  title?: string;
  source?: string;
  imgUrl?: string;
  demoUrl?: string;
};

const Project = ({ tags, title, source, imgUrl, demoUrl }: ProjectProps) => {
  return (
    <main className="w-[320px] h-[480px] rounded-lg relative">
      <section id="project" className="w-full h-[480px] rounded-lg"></section>
      <section className="text-white absolute bottom-5 left-5 flex flex-col gap-4">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Link
          target="_blank"
          className="flex gap-2 items-center text-sm"
          href={`${source}`}
        >
          <GithubIcon size={20} />
          Source code
        </Link>
        <Link
          target="_blank"
          className="flex gap-2 items-center text-sm"
          href={`${demoUrl}`}
        >
          <LinkIcon size={20} />
          Live demo
        </Link>
      </section>
      <Image
        className="absolute top-0 left-0 h-full object-cover rounded-lg -z-1"
        width={320}
        height={480}
        src={`${imgUrl}`}
        alt="Project gif"
      />
    </main>
  );
};

const Projects = () => {
  return (
    <main className="items-center md:items-baseline flex justify-center flex-col mt-30 scroll-mt-50">
      <h1 className="text-md font-bold text-gray-500 mb-5">Projects</h1>
      <section className="lg:grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <Project
            title="Coding Forum"
            tags={[
              'React',
              'Next.js',
              'Tailwind',
              'TypeScript',
              'ExpressJS',
              'MongoDB',
              'Shadcn',
              'Clerk Auth',
            ]}
            source="https://github.com/melikdev/melick.dev"
            demoUrl="https://melik.dev"
            imgUrl="/img/demo-nuance-small.gif"
          />
          <Project
            title="melik.dev Portfolio"
            tags={['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn']}
            source="https://github.com/melikdev/melick.dev"
            demoUrl="https://melik.dev"
            imgUrl="/img/demo-nuance-small.gif"
          />
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <Project
            title="Trackinvoice"
            tags={[
              'Next.js',
              'TypeScript',
              'TailwindCSS',
              'Clerk Auth',
              'Prisma',
            ]}
            source="https://github.com/melikdev/next-invoice-tracker"
            demoUrl="https://invoicetracker.melik.dev/"
            imgUrl="/img/demo-nuance-small.gif"
          />
        </div>
      </section>
    </main>
  );
};

export default Projects;
