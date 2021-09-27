import { useHistory } from 'react-router-dom';

import useMember from '../hooks/useMember';

import Header from '../components/Header/Header';
import Button from '../components/Forms/Button';

const HomePage = () => {
  const history = useHistory();
  const { member } = useMember();

  return (
    <div>
      <Header />
      <section className='site'>
        <h1>Home page</h1>

        <div className='content'>
          {member ? (
            <Button type='button' title='Profile' onClick={() => history.push('/profile')} />
          ) : (
            <Button type='button' title='Login' onClick={() => history.push('/login')} />
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
