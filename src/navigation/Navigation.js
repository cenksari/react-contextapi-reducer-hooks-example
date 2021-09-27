import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MemberContext } from '../contexts/MemberContext';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const Navigation = () => {
  const { member } = useContext(MemberContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {member ? (
          <Route exact path='/profile' component={ProfilePage} />
        ) : (
          <Route exact path='/login' component={LoginPage} />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
