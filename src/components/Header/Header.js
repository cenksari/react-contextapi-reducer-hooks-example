import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import useMember from '../../hooks/useMember';

import Button from '../Forms/Button';

const Header = memo(() => {
  const navigate = useNavigate();
  const { member, removeMember } = useMember();

  const logout = () => {
    removeMember();

    navigate('/');
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
            <Button type='button' title='Login' onClick={() => navigate('/login')} />
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
