import Head from 'next/head';
import styles from './properties.module.css';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const properties = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Properties() {
  return (
    <>
      <Head>
        <title>BJF Properties | Properties</title>

        <meta name="keywords" content="BJF Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello World</h1>
        <Banner
          purpose="Esta A PROPERTY"
          title1="Rental Homes For"
          title2="Everyone"
          desc1="Explore Estates, Homes, Factories"
          desc2="and more"
          buttonText="Explore"
        />
      </div>
    </>
  );
}
