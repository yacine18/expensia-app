import React, {useEffect, useState} from 'react';
import {
  VStack,
  Box,
  Divider,
  Text,
  Input,
  FormControl,
  Button,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/userActions';
import {RootState} from '../store';
import AlertMessages from '../components/AlertMessages';

export default function ({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const {userInfo, error}: any = userSignin;

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Dashboard');
    }
  }, [userInfo, navigation]);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <Box borderRadius="md" w="100%" marginTop="35%">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Sign In
          </Text>
          {error && <AlertMessages>{error}</AlertMessages>}
        </Box>
        <Box alignItems="center">
          <FormControl w="100%" maxW="300px">
            <Text fontSize="md">Email</Text>
            <Input
              placeholder="Enter Email"
              onChangeText={(text: string) => setEmail(text)}
            />
          </FormControl>
          <FormControl w="75%" marginTop="5%" maxW="300px">
            <Text fontSize="md">Password</Text>
            <Input
              placeholder="Enter password"
              secureTextEntry
              onChangeText={(text: string) => setPassword(text)}
            />
          </FormControl>
        </Box>
        <Box px="4" pb="4">
          <Button onPress={loginHandler}>
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
