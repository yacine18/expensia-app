import {
  Center,
  HStack,
  VStack,
  Alert,
  Text,
  IconButton,
  CloseIcon,
} from 'native-base';
import React from 'react';

const AlertMessages = (props: any) => {
  return (
    <Center>
      <Alert
        w="90%"
        maxW="400"
        marginTop="3%"
        status="info"
        colorScheme="danger">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="red.800">
                {props.children}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="red.600" />}
            />
          </HStack>
        </VStack>
      </Alert>
    </Center>
  );
};

export default AlertMessages;
