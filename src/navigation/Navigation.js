import { Routes, Route } from 'react-router-dom';

import useMember from '../hooks/useMember';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const Navigation = () => {
  const { member } = useMember();

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      {member ? (
        <Route exact path='/profile' element={<ProfilePage />} />
      ) : (
        <Route exact path='/login' element={<LoginPage />} />
      )}
    </Routes>
  );
};

export default Navigation;
