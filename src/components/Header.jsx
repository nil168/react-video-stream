import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>SWAPNANIL</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                    <Link to={'/'}>HOME</Link>
                </Button>
                <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                    <Link to={'/videos'}>VIDEOS</Link>
                </Button>
                <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                    <Link to={'/videos?category=free'}>FREE VIDEOS</Link>
                </Button>
                <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                    <Link to={'/upload'}>UPLOAD</Link>
                </Button>
            </VStack>
            <HStack pos={'absolute'} bottom={'10'} left={'16'} >
                <Button colorScheme='purple' onClick={onClose}>
                    <Link to={'/login'}>LOGIN</Link>
                </Button>
                <Button colorScheme='purple' variant={"outline"} onClick={onClose}>
                    <Link to={'/signup'}>SIGN UP</Link>
                </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
