import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useMember from '../hooks/useMember';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const Navigation = () => {
  const { member } = useMember();

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
