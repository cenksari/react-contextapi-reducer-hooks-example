import { memo, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { MemberContext } from '../../contexts/MemberContext';

import Button from '../Forms/Button';

const Header = memo(() => {
  const history = useHistory();
  const { member, dispatch } = useContext(MemberContext);

  const logout = () => {
    dispatch({ type: 'REMOVE_MEMBER' });

    history.push('/');
  };

  return (
    <header>
      <div>
        <h1>Member context</h1>
      </div>
      <div>
        {member ? (
          <div className='member-area'>
            <span>@{member.username}</span>
            <Button type='button' title='Logout' onClick={() => logout()} />
          </div>
        ) : (
          <div className='member-area'>
            <Button type='button' title='Login' onClick={() => history.push('/login')} />
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
