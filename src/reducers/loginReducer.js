import { LOG_USER, SEND_TOKEN } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_USER:
    return {
      ...state,
      name: action.userInfo.name,
      email: action.userInfo.email,
      picture: action.userInfo.picture,
    };
  case SEND_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  case 'SEND_QUESTIONS':
    return {
      ...state,
      questions: action.questions,
    };
  default:
    return state;
  }
};

export default loginReducer;
