import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="h-[30vh] flex justify-around items-center">
      <Image
        src="/img/nav-logo.png"
        height={100}
        width={100}
        alt="nav logo"
      ></Image>
      <div></div>
    </nav>
  );
};

export default Navbar;
