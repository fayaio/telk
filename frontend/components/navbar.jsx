import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    
    <>

   
      <nav>
        <FontAwesomeIcon className="nav-close" icon={faXmark}></FontAwesomeIcon>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/properties">
          <a>Properties</a>
        </Link>
        <Image className="logo" src="/bjflogo.svg" width={120} height={77} />
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>

        <FontAwesomeIcon className="nav-toggle" icon={faBars}></FontAwesomeIcon>
      </nav>
    
      </>
    
  );
};

export default Nav;
