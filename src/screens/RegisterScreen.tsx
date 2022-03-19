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
import {RootState} from '../store';
import {register} from '../actions/userActions';
import AlertMessages from '../components/AlertMessages';

export default function ({navigation}: any) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userRegister = useSelector((state: RootState) => state.userRegister);
  const {userInfo, error}: any = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Dashboard');
    }
  }, [userInfo, navigation]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(register(name, email, password));
  };

  return (
    <>
      <Box borderRadius="md" w="100%" marginTop="35%">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Create Account
            </Text>
            {error && <AlertMessages>{error}</AlertMessages>}
          </Box>
          <Box alignItems="center">
            <FormControl isInvalid={!name} w="100%" maxW="300px">
              <Text fontSize="md">Name</Text>
              <Input
                placeholder="Enter Name"
                onChangeText={text => setName(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Name Required.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={!email} w="100%" maxW="300px">
              <Text fontSize="md">Email</Text>
              <Input
                placeholder="Enter Email"
                onChangeText={text => setEmail(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Email Required.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!password}
              w="75%"
              marginTop="5%"
              maxW="300px">
              <Text fontSize="md">Password</Text>
              <Input
                placeholder="Enter password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Password Required.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box px="4" pb="4">
            <Button onPress={submitHandler}>
              <Text fontSize="xl" color="white">
                Register
              </Text>
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
