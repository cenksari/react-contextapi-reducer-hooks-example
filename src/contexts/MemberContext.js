import { createContext, useReducer, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import memberReducer from '../reducers/memberReducer';

import Storage from '../tools/Storage';

export const MemberContext = createContext();

const MemberProvider = ({ children }) => {
  const [member, dispatch] = useReducer(memberReducer, null, () => Storage.getData('member'));

  useLayoutEffect(() => {
    if (!member) {
      Storage.removeData('member');
    } else {
      Storage.setData('member', member);
    }
  }, [member]);

  return <MemberContext.Provider value={{ member, dispatch }}>{children}</MemberContext.Provider>;
};

MemberProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemberProvider;
