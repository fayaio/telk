import Link from 'next/link';
import React, { useState } from 'react';
// import Image from "next/image";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navContainer">
        <nav className="navbar">
          <Link href="/">
            <img className="navbar-logo" src="/bjflog.svg" alt="BJF logo" />
          </Link>
          {/* <FontAwesomeIcon className="nav-close" icon={faXmark}></FontAwesomeIcon> */}
          <div className={click ? 'navitems active' : 'navitems'}>
            <div className="navlink">
              <Link onClick={closeMobileMenu} href="/">
                <a>Home</a>
              </Link>
            </div>

            <div className="navlink">
              <Link onClick={closeMobileMenu} href="/about">
                <a>About Us</a>
              </Link>
            </div>
            <div className="navlink">
              <Link onClick={closeMobileMenu} href="/contact">
                <a>Contact Us</a>
              </Link>
            </div>

            <div className="navlink">
              <Link onClick={closeMobileMenu} href="/properties">
                <a>Properties</a>
              </Link>
            </div>
          </div>
          <FontAwesomeIcon
            onClick={handleClick}
            className="menu-icon"
            icon={faBars}
            width={22}
          ></FontAwesomeIcon>
        </nav>
      </div>
    </>
  );
};

export default Nav;
