import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p="16" minH={'40'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter your email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button p={'0'} colorScheme="purple" borderRadius={'0 20px 20px 0'}>
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['0', '1px solid white']}
          borderRight={['0', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Swapnanil
          </Heading>
          <Text>All rights recieved</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>Social Media</Heading>
            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="https://facebook.com">FaceBook</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="https://youtube.com">Youtube</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="https://Github.com">GitHub</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
