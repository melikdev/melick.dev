import Link from 'next/link';
import '@/app/App.css';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

type ProjectProps = {
  tags?: string[];
  title?: string;
  source?: string;
  imgUrl?: string;
};

const Project = ({ tags, title, source, imgUrl }: ProjectProps) => {
  return (
    <main className="w-[320px] h-[480px] rounded-lg relative">
      <section
        className="w-[320px] h-[480px] rounded-lg"
        id="project"
      ></section>
      <section className="text-white absolute bottom-10 left-5 flex flex-col gap-4">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex gap-2">
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Link href={`${source}`}>Source</Link>
      </section>
      <Image
        className="absolute top-0 left-0 h-full object-cover rounded-lg -z-1"
        width={320}
        height={480}
        src={`${imgUrl}`}
        alt="demo-nuance"
      />
    </main>
  );
};

const Projects = () => {
  return (
    <main className="items-center md:items-baseline flex justify-center flex-col">
      <h1 className="text-md font-bold text-gray-500">Projects</h1>
      <section className="lg:grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <Project
            title="Project 1"
            tags={['React', 'Next.js', 'Tailwind']}
            source="#"
            imgUrl="/img/demo-nuance-small.gif"
          />
          <Project
            title="Project 2"
            tags={['React', 'Next.js', 'Tailwind']}
            source="#"
            imgUrl="/img/demo-nuance-small.gif"
          />
        </div>
        <div className="mt-20 flex flex-col gap-5">
          <Project
            title="Project 3"
            tags={['React', 'Next.js', 'Tailwind']}
            source="#"
            imgUrl="/img/demo-nuance-small.gif"
          />
          <Project
            title="Project 4"
            tags={['React', 'Next.js', 'Tailwind']}
            source="#"
            imgUrl="/img/demo-nuance-small.gif"
          />
        </div>
      </section>
    </main>
  );
};

export default Projects;
