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
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AlertMessages from '../components/AlertMessages';
import {newTransaction} from '../actions/transactionActions';
import {RootState} from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTransactionScreen = ({navigation}: any) => {
  const [label, setLabel] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const addTransaction = useSelector(
    (state: RootState) => state.addTransaction,
  );
  const {error}: any = addTransaction;

  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      let userData = await AsyncStorage.getItem('userInfo');
      userData ? JSON.parse(userData) : null;
    };

    getToken();
  }, []);

  const submitHandler = () => {
    dispatch(newTransaction(label, amount));
    navigation.navigate('Dashboard');
  };

  return (
    <>
      <Box borderRadius="md" w="100%" marginTop="35%">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">
              Add Transaction
            </Text>
          </Box>
          <Box px="4" pt="4">
            {error && <AlertMessages>{error}</AlertMessages>}
          </Box>
          <Box alignItems="center">
            <FormControl w="100%" maxW="300px">
              <Text fontSize="md">Label</Text>
              <Input
                placeholder="Enter Label"
                onChangeText={text => setLabel(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Label Required.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl w="100%" maxW="300px">
              <Text fontSize="md">Amount</Text>
              <Input
                placeholder="Enter Amount"
                onChangeText={text => setAmount(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Amount Required.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box px="4" pb="4">
            <Button onPress={submitHandler}>
              <Text fontSize="md" color="white">
                Submit
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Dashboard')}
              variant="outline"
              marginTop="5%"
              colorScheme="danger">
              <Text fontSize="md" color="red.500">
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
