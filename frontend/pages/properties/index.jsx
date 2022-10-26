import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import styless from '../about/about.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Properties() {
  return (
    <>
      <Head>
        <title>BJF Properties | Properties</title>
      </Head>

      <div className={styless.abtBanner}>
        <h2 className={styless.bannerHeader}>Our Properties</h2>
        <p className={styless.bannersubH}> Explore Properties In Nigeria </p>
      </div>

      <div>
        <div className={styles.explore}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              <Card sx={{ maxWidth: 500 }} className={styles.egrid}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/estatecollage.svg"
                  alt="BJF mini estate for sale"
                />
                <CardContent>
                  {/* <Box component="div" className={styles.card__overlay}>
                    <Box component="div" className={styles.card__header}></Box>
                  </Box> */}
                  <img
                    src="/bjflog.svg"
                    alt="BJF Logo"
                    className={styles.card__thumb}
                  />
                  <Box component="div" className={styles.card__headertext}>
                    <h3 className={styles.card__title}>
                      MINI ESTATE <span>FOR SALE</span>
                    </h3>

                    <h5 className={styles.card__estatedetails}>
                      Housing 5Bungalows with 5numbers of 3bedroom 3 numbers of
                      <br></br> 2bedroom and 1 Room self-contain with a Security
                      house
                    </h5>

                    <li className={styles.card__status}>
                      <h4>
                        Title: <span>C OF O</span>
                      </h4>
                      <h4>
                        Size: <span>1287.6245sqms</span>
                      </h4>
                      <h4>
                        Property Location: <span>Lagos, Nigeria</span>
                      </h4>
                    </li>
                    <Box component="div" className={styles.asskingp__section}>
                      <Box
                        component="div"
                        className={styles.asskingpline1}
                      ></Box>
                      <h2 className={styles.asskingp}>
                        ASKING PRICE: <span>150M</span>
                      </h2>
                      <Box
                        component="div"
                        className={styles.asskingpline2}
                      ></Box>
                    </Box>
                  </Box>
                  <a className={styles.moredetails} href="/contact">
                    Give Us A Call
                  </a>
                </CardContent>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 500 }} className={styles.egrid}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/factorycollage.svg"
                  alt="alt='BJF factory for sale'"
                />
                <CardContent>
                  <img
                    src="/bjflog.svg"
                    alt="BJF Logo"
                    className={styles.card__thumb}
                  />
                  <Box component="div" className={styles.card__headertext}>
                    <h3 className={styles.card__title}>
                      FACTORY <span>FOR SALE</span>
                    </h3>

                    <h5 className={styles.card__estatedetails2}>
                      Housing 5Bungalows with 5numbers of 3bedroom 3 numbers of
                      <br></br> 2bedroom and 1 Room self-contain with a Security
                      house
                    </h5>
                    <li className={styles.card__status}>
                      <h4>
                        Title: <span>C OF O</span>
                      </h4>

                      <h4>
                        Size: <span>1287.6245sqms</span>
                      </h4>
                      <h4 className={styles.extra__padding}>
                        Property Location: <span> Lagos, Nigeria</span>
                      </h4>
                    </li>
                    <Box component="div" className={styles.asskingp__section}>
                      <Box
                        component="div"
                        className={styles.asskingpline1}
                      ></Box>
                      <h2 className={styles.asskingp}>
                        ASKING PRICE: <span>300M</span>
                      </h2>
                      <Box
                        component="div"
                        className={styles.asskingpline2}
                      ></Box>
                    </Box>
                  </Box>
                  <a className={styles.moredetails} href="/contact">
                    Give Us A Call
                  </a>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={styles.spacing}></div>
      </div>
    </>
  );
}
