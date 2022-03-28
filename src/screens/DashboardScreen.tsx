import {Box, Divider, VStack, Text, Flex, Heading, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Balance from '../components/Balance';
import {logout} from '../actions/userActions';
import IncomeExpense from '../components/IncomeExpense';
import TransactionsList from '../components/TransactionsList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({navigation}: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      try {
        let userData = await AsyncStorage.getItem('userInfo');
        let user = userData ? JSON.parse(userData) : null;
        setUserInfo(user);
        // if (!userInfo.token) {
        //   navigation.navigate('Login');
        // }
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getToken();
  }, [userInfo, navigation]);

  const signoutHandler = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <Box borderRadius="md" p="1">
      <VStack space="4" divider={<Divider />}>
        <Heading marginTop="8%" fontSize="xl" p="4">
          Dashboard
        </Heading>
        <Flex direction="row" px="4" pt="4">
          <Flex direction="column">
            <Balance />
          </Flex>
          <Flex direction="column" marginLeft="auto">
            <Text fontSize="lg" bold>
              {userInfo ? userInfo?.name : null}
            </Text>
            <Button
              onPress={signoutHandler}
              variant="outline"
              colorScheme="danger">
              Log Out
            </Button>
          </Flex>
        </Flex>
        <Flex direction="row" px="4">
          <IncomeExpense />
        </Flex>
        <Box>
          <Button
            onPress={() => navigation.navigate('AddTransaction')}
            variant="outline"
            colorScheme="success">
            <Text fontSize="md" color="green.400">
              Add Transaction
            </Text>
          </Button>
        </Box>
        <Box px="4" pb="4">
          <TransactionsList />
        </Box>
      </VStack>
    </Box>
  );
};

export default DashboardScreen;
