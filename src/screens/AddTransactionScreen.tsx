import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  VStack,
  WarningOutlineIcon,
  Text,
} from 'native-base';
import React from 'react';

const AddTransactionScreen = ({navigation}: any) => {
  return (
    <>
      <Box borderRadius="md" w="100%" marginTop="35%">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Add Transaction
            </Text>
          </Box>
          <Box alignItems="center">
            <FormControl w="100%" maxW="300px">
              <Text fontSize="md">Label</Text>
              <Input placeholder="Enter Label" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Wrong Label.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl w="100%" maxW="300px">
              <Text fontSize="md">Amount</Text>
              <Input placeholder="Enter Amount" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Wrong Email.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box px="4" pb="4">
            <Button>
              <Text fontSize="lg" color="white">
                Submit
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Dashboard')}
              variant="outline"
              marginTop="5%"
              colorScheme="danger">
              <Text fontSize="lg" color="red.500">
                Cancel
              </Text>
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default AddTransactionScreen;
