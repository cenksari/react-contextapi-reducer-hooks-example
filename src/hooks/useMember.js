import { useContext } from 'react';

import { MemberContext } from '../contexts/MemberContext';

const useMember = () => {
  const { member, memberDispatch } = useContext(MemberContext);

  const addMember = (payload) => memberDispatch({ type: 'ADD_MEMBER', payload });

  const removeMember = () => memberDispatch({ type: 'REMOVE_MEMBER' });

  return { member, addMember, removeMember };
};

export default useMember;
