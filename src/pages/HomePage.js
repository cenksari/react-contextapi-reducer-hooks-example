import { useNavigate } from 'react-router-dom';

import useMember from '../hooks/useMember';

import Header from '../components/Header/Header';
import Button from '../components/Forms/Button';

const HomePage = () => {
  const navigate = useNavigate();
  const { member } = useMember();

  return (
    <div>
      <Header />
      <section className='site'>
        <h1>Home page</h1>

        <div className='content'>
          {member ? (
            <Button type='button' title='Profile' onClick={() => navigate('/profile')} />
          ) : (
            <Button type='button' title='Login' onClick={() => navigate('/login')} />
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
