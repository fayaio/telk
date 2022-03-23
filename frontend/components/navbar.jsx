import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
      <Link href="/properties">
        <a>Properties</a>
      </Link>
      <Image src="/bjflogo.svg" width={120} height={77} />
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </nav>
  );
};

export default Nav;
