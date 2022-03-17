import React from 'react';
import {
  VStack,
  Box,
  Divider,
  Text,
  Input,
  FormControl,
  WarningOutlineIcon,
  Button,
} from 'native-base';

export default function ({navigation}: any) {
  return (
    <Box borderRadius="md" w="100%" marginTop="35%">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Sign In
          </Text>
        </Box>
        <Box alignItems="center">
          <FormControl w="100%" maxW="300px">
            <Text fontSize="md">Email</Text>
            <Input placeholder="Enter Email" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Wrong Email.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl w="75%" marginTop="5%" maxW="300px">
            <Text fontSize="md">Password</Text>
            <Input placeholder="Enter password" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Wrong Password.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box px="4" pb="4">
          <Button onPress={() => navigation.navigate('Dashboard')}>
            <Text fontSize="xl" color="white">
              Login
            </Text>
          </Button>
        </Box>
        <Box px="4" pb="4" marginTop="40%">
          <Button
            variant="outline"
            colorScheme="success"
            onPress={() => navigation.navigate('Register')}>
            <Text fontSize="xl" color="green.300">
              Create Account
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
