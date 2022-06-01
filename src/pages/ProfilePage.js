import { useNavigate } from 'react-router-dom';

import useMember from '../hooks/useMember';

import Header from '../components/Header/Header';
import Button from '../components/Forms/Button';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { member } = useMember();

  return (
    <div>
      <Header />
      <section className='site'>
        <h1>Profile page</h1>

        <div className='content'>
          <p>
            Welcome <strong>@{member.username}</strong>
          </p>
        </div>

        <div className='content'>
          <Button type='button' title='Home page' onClick={() => navigate('/')} />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
