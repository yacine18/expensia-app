import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
} from './../constants/transactionConstant';

export const transactionsListReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        loading: false,
        transactions: action.payload,
      };

    case GET_TRANSACTIONS_ERROR:
      return {
        loading: false,
        error: action.paylaod,
      };

    default:
      return state;
  }
};

export const addTransactionReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        loading: false,
      };
    case ADD_TRANSACTION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
