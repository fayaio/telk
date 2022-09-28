import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
  Thumbs,
} from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles({});

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const classes = useStyles();
  return (
    <>
      <div className={styles.homeContainer}>
        {/* Banner Section */}
        <div className={styles.bannerContainer}>
          <div className={styles.bannercontent}>
            <h3 className={styles.bannerText}> YOU DREAM IT, WE BUILD IT</h3>
            <p className={styles.bannerp}>
              Materialize Your Ideal Property With Us
            </p>
          </div>
        </div>

        {/* Explore Section */}
        <div className={styles.explore}>
          <h3 className={styles.exploreheader}>
            Explore Properties In Nigeria
          </h3>

          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              <Card sx={{ maxWidth: 500 }} className={styles.egrid}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/estatecollage.svg"
                />
                <CardContent>
                  {/* <Box component="div" className={styles.card__overlay}>
                    <Box component="div" className={styles.card__header}></Box>
                  </Box> */}
                  <img
                    src="/bjflog.svg"
                    alt=""
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
                />
                <CardContent>
                  <img
                    src="/bjflog.svg"
                    alt=""
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

        {/* Who We Are */}
        <div className={styles.explore}>
          <h3 className={styles.exploreheader}>Who We Are</h3>
          <ul className={styles.cardss}>
            <li className={styles.cards_item}>
              <div className={styles.cardd}>
                <div className={styles.card_image}>
                  <img src="./exploreimg1.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>WHAT WE DO</h2>
                  <p className={styles.card_text}>
                    BJF Properties and Development Company Ltd. deals with
                    Property Development, Property Management, Buying and
                    Selling of property, Property Consultancy and much more.
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.cards_item}>
              <div className={styles.cardd}>
                <div className={styles.card_image}>
                  <img src="./exploreimg2.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>OUR VISION</h2>
                  <p className={styles.card_text}>
                    To be the Topmost property solution provider globally.
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.cards_item}>
              <div className={styles.cardd}>
                <div className={styles.card_image}>
                  <img src="./exploreimg3.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>OUR MISSION</h2>
                  <p className={styles.card_text}>
                    Our Mission is to provide both clients Locally and in
                    Diaspora with the property of their dreams without having to
                    go through family and friends' Trust issues.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.slidesSection}>
          <h3 className={styles.slidesHeader}>3D Hotel Proposed Development</h3>

          <Swiper
            style={{
              '--swiper-navigation-color': '#efefef',
              '--swiper-pagination-color': '#efefef',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.myhotelSwiper2}
          >
            <SwiperSlide>
              <img src="/hotel1.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel2.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel3.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel4.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel5.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel6.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel7.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel8.svg" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={90}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.myhotelSwiper}
          >
            <SwiperSlide>
              <img src="/hotel1.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel2.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel3.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel4.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel5.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel6.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel7.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel8.svg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
