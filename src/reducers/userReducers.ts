import {
  REGISTER_USER,
  REGISTER_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_ERROR,
  USER_SIGNOUT,
} from './../constants/userConstant';
export const userRegisterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case REGISTER_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case SIGNIN_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
