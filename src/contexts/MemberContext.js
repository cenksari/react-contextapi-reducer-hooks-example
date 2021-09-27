import { createContext, useReducer, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import memberReducer from '../reducers/memberReducer';

export const MemberContext = createContext();

const MemberProvider = ({ children }) => {
  const [member, dispatch] = useReducer(memberReducer, null, () => {
    const localData = localStorage.getItem('member');

    return localData ? JSON.parse(localData) : null;
  });

  useLayoutEffect(() => {
    if (member) {
      localStorage.setItem('member', JSON.stringify(member));
    } else {
      localStorage.removeItem('member');
    }
  }, [member]);

  return <MemberContext.Provider value={{ member, dispatch }}>{children}</MemberContext.Provider>;
};

MemberProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemberProvider;
