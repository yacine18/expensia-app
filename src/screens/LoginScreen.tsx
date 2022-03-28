import React, {useEffect, useState} from 'react';
import {
  VStack,
  Box,
  Divider,
  Text,
  Input,
  FormControl,
  Button,
  WarningOutlineIcon,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/userActions';
import AlertMessages from '../components/AlertMessages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../store';

export default function ({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [userInfo, setUserInfo] = useState<any>({});
  // console.warn(userInfo.token);

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const {error}: any = userSignin;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let abortController = new AbortController();
    const getToken = async () => {
      try {
        let userData = await AsyncStorage.getItem('userInfo');
        let userInfo = userData ? JSON.parse(userData) : {};
        console.log(userInfo);
        if (userInfo.token) {
          navigation.navigate('Dashboard');
        }
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getToken();

    return () => {
      abortController.abort();
    };
  }, [navigation]);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <Box borderRadius="md" w="100%" marginTop="5%">
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
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Email Required
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl w="100%" marginTop="5%" maxW="300px">
            <Text fontSize="md">Password</Text>
            <Input
              placeholder="Enter password"
              secureTextEntry
              onChangeText={(text: string) => setPassword(text)}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {!password && 'Password Required.'}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box px="4" pb="4">
          <Button onPress={loginHandler}>
            <Text fontSize="md" color="white">
              Login
            </Text>
          </Button>
        </Box>
        <Box px="4" pb="4" marginTop="20%">
          <Button
            variant="outline"
            colorScheme="success"
            onPress={() => navigation.navigate('Register')}>
            <Text fontSize="md" color="green.300">
              Create Account
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
