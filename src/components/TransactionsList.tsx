import {
  Box,
  FlatList,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'Buy Book',
    amount: '-50',
    date: '16-03-2022',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Receive Money',
    amount: '500',
    date: '11-03-2022',
  },
];

const TransactionsList = () => {
  return (
    <Box>
      <Heading fontSize="xl" p="2" pb="3">
        Transactions
      </Heading>

      <FlatList
        data={data}
        renderItem={({item}: any) => (
          <Box
            borderBottomWidth="1"
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text fontSize="lg" color="coolGray.800" bold>
                  {item.label}
                </Text>
                <Text>{item.date}</Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xl"
                alignSelf="flex-start"
                bold
                color={item.amount > 0 ? 'green.500' : 'red.500'}>
                ${item.amount}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default TransactionsList;
