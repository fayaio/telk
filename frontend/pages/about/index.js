import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>BJF Properties | About</title>

        <meta name="keywords" content="BJF Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.abtContainer}>
        <div className={styles.abtbanner}>
          <h1>About Us</h1>
        </div>

        <div className={styles.speech}>
         
            <div className={styles.spcontent}>
              <h4>Chairman's Speech</h4>
 
            <Image className={styles.speechimg} src="/chairmanpic.svg" alt="" width={800} height={600} />
      
              <h2>Samuel Jegede</h2>
              <h3 className={styles.hcm}>Chairman</h3>

              <p>
              <div  className={styles.paras}>
                While growing up, one of my dreams has been to build a company
                that offers trust-based services. Thus, further down the years,
                I developed an interest in the property development business.
                This interest was primarily due to my family's acquisition of
                some landed properties in Ajah, Lagos State, Nigeria. Indeed, my
                family was one of those to own land in the then developing area
                of Lagos State in the early 1990s.
                
                 However, my interest in
                Nigeria's property business nose-dived after my family lost the
                land due to ownership conflicts. This ugly experience made me
                sceptical about further involvement in the murky waters of
                property business in Nigeria.
               
                 Notwithstanding, in the year 2019,
                I had a renewed realization that only the involvement of
                visionary and virtuous entrepreneurs could sanitize the property
                development industry in Nigeria. This resolve led to the birth
                of bjfpropertiesltd. My participation in the industry is to
                deliver excellent and trust-based services that can be relied
                upon by Nigerians in diasporas and foreign nationals. 
                
                We currently have clients from Europe and other parts of the world.
                Our dream is to keep growing the Client's base and carve a niche
                for ourselves in the industry. With our team of dedicated and
                accountable professionals, we are your go-to company for
                property development and management in Nigeria.
                </div>

                <h5>You are welcome to give us a call today!</h5>
              </p>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default About;
