import { ISDARK } from "../actions/action";


interface State {
  isDark: boolean;
}

interface Action {
  payload: any;
  type: string;
}

const initialState: State = {
  isDark: true,
};

const userReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ISDARK:
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
