import { ADD_MEMBER, REMOVE_MEMBER } from './memberReducerTypes';

const memberReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_MEMBER:
      return null;
    default:
      return { ...state };
  }
};

export default memberReducer;
