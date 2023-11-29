import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            provident similique deleniti doloribus. Odit error officia
            voluptatum, placeat temporibus libero aspernatur sapiente assumenda
            mollitia quod aliquid facere quisquam numquam, impedit natus sequi
            ad repellendus, quos recusandae quia alias cupiditate. Voluptas, id
            consequatur veniam, cum omnis ut voluptates quam necessitatibus in
            molestias, asperiores facilis. Quo ex fugit unde, ducimus eveniet
            doloribus odio minus consectetur nam voluptas facere perferendis,
            obcaecati, sit distinctio quia. Distinctio totam quae veniam ipsam
            sapiente. Aperiam recusandae modi quo iste consectetur tenetur
            magnam labore maiores quasi minus voluptate quisquam at, odit a
            expedita maxime tempora esse et reprehenderit.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    interval={1000}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Infinite Horizon
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
