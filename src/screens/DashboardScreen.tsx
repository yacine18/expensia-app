import {Box, Divider, VStack, Text, Flex, Heading, Button} from 'native-base';
import React from 'react';
import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import TransactionsList from '../components/TransactionsList';

const DashboardScreen = ({navigation}: any) => {
  return (
    <Box borderRadius="md" p="2">
      <VStack space="4" divider={<Divider />}>
        <Heading marginTop="8%" p="4">
          Dashboard
        </Heading>
        <Flex direction="row" px="4" pt="4">
          <Flex direction="column">
            <Balance />
          </Flex>
          <Flex direction="column" marginLeft="auto">
            <Text fontSize="xl" bold>
              John Doe
            </Text>
            <Button
              onPress={() => navigation.navigate('Login')}
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
