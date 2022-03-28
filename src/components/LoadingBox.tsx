import React from 'react';
import {Heading, HStack, Spinner} from 'native-base';

const LoadingBox = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

export default LoadingBox;
