import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="mt-10 h-[80vh]">
      <h1 className="text-md font-bold text-gray-500">Contact</h1>
      <section className="flex flex-col gap-4 text-white mt-5 mb-5">
        <span className="flex gap-2 items-center">
          <Mail /> melikdev@gmail.com
        </span>
        <span className="flex gap-2 items-center">
          <GithubIcon />
          <Link href="https://github.com/melikdev">github.com/melikdev</Link>
        </span>
        <span className="flex gap-2 items-center">
          <LinkedinIcon />
          <Link href="https://www.linkedin.com/in/melik-unesi-a23379234/">
            linkedin.com
          </Link>
        </span>
      </section>
    </main>
  );
};

export default Contact;
