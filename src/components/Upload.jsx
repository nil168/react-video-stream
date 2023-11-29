import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  backgroundColor: 'white',
                  border: 'none',
                  marginLeft: '-18px',
                  color: 'purple',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  cursor: 'pointer',
                },
              }}
            />
            <Button color={'purple'} type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
