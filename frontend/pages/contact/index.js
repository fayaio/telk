import Head from 'next/head';
import styles from './contact.module.css';
import abstyle from '../about/about.module.css';
import styless from '../../styles/Home.module.css';
import Image from 'next/image';
import ContactForm from '../../comp/contactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCircleEnvelope,
  faEnvelope,
  faEnvelopeCircleCheck,
  faEnvelopeSquare,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Head>
        <title>BJF Properties | Contact</title>
      </Head>

      <div className={abstyle.abtBanner}>
        <h2 className={abstyle.bannerHeader}>CONTACT US</h2>
        <p className={abstyle.bannersubH}>Let's Get In Touch </p>
      </div>

      <ContactForm />

      <div className={styles.contactsContainer}>
        <h3 className={styles.contactHeader}>Get To Know us More !</h3>
        <hr style={{ borderColor: '#00325a', width: '10%' }}></hr>

        <div className={styles.contactItems}>
          <div className={styles.contactC}>
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: '#5f5c5c' }}
                width={50}
              ></FontAwesomeIcon>
            </div>
            <h4 className={styles.iconDes}>Email</h4>

            <p className={styles.contactO}>
              <br></br> info@bjfpropertiesltd.com
            </p>
          </div>

          <div className={styles.contactC}>
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: '#5f5c5c' }}
                width={50}
              ></FontAwesomeIcon>
            </div>
            <h4 className={styles.iconDes}>Phone</h4>
            <p className={styles.contactO}>
              <br></br> (+234) 7069917936 <br></br> <br></br> (+234) 9153866716
            </p>
          </div>
          <div className={styles.contactC}>
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: '#5f5c5c' }}
                width={40}
              ></FontAwesomeIcon>
            </div>
            <h4 className={styles.iconDes}>Address</h4>
            <p className={styles.contactO}>
              <br></br> 2nd floor, 67 Obafemi Awolowo Way,<br></br> Ikeja Lagos,
              Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
