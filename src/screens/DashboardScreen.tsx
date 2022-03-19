import {Box, Divider, VStack, Text, Flex, Heading, Button} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AlertMessages from '../components/AlertMessages';
import Balance from '../components/Balance';
import {logout} from '../actions/userActions';
import IncomeExpense from '../components/IncomeExpense';
import TransactionsList from '../components/TransactionsList';
import {RootState} from '../store';

const DashboardScreen = ({navigation}: any) => {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const {userInfo, error}: any = userSignin;
  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigation.navigate('Login');
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box borderRadius="md" p="2">
      <VStack space="4" divider={<Divider />}>
        <Heading marginTop="8%" p="4">
          Dashboard
        </Heading>
        <Flex direction="row" px="4" pt="4">
          {error && <AlertMessages>{error}</AlertMessages>}
          <Flex direction="column">
            <Balance />
          </Flex>
          <Flex direction="column" marginLeft="auto">
            <Text fontSize="xl" bold>
              {userInfo ? userInfo?.name : 'John Doe'}
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
            <Text fontSize="lg" color="green.400">
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
