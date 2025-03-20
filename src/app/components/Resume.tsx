import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Resume = () => {
  return (
    <main className="mb-10">
      <h1 className="text-md font-bold text-gray-500 mt-20">Resume</h1>
      <Button asChild className="mt-5">
        <Link href={`/melik-unesi-cv.pdf`}>Click to see my CV</Link>
      </Button>
    </main>
  );
};

export default Resume;
