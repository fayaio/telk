// import Link from "next/link";
// import Image from "next/image";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/bjflog.svg" alt="" width={180} height={140} />
      </div>

      <ul className="footer-right">
        <li>
          <h2>CONTACT</h2>
          <ul className="box">
            <li>
              <a href="#">info@bjfpropertiesltd.com</a>
            </li>
            <li>
              <a href="#">(+234) 7069917936</a>
            </li>
            <li>
              <a href="#">(+234) 9153866716</a>
            </li>
          </ul>
        </li>

        <li>
          <h2>ADDRESS</h2>
          <ul className="box">
            <li>
              {' '}
              <a href="#">
                2nd floor, 67 Obafemi Awolowo Way, Ikeja Lagos, Nigeria
              </a>
            </li>
          </ul>
        </li>

        <li className="socials">
          <h2>SOCIALS</h2>
          <a href="https://www.facebook.com/Bjf-Properties-and-Development-Company-Limited-104684919018924/">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="https://instagram.com/bjf_properties?igshid=YmMyMTA2M2Y=">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          {/* <a href="#">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a> */}
        </li>
      </ul>

      <div className="footerbottom">
        <div className="line"></div>
        <p> All Right reserved by &copy;bjfproperty 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
