import MemberProvider from './contexts/MemberContext';

import Navigation from './navigation/Navigation';

const App = () => (
  <MemberProvider>
    <Navigation />
  </MemberProvider>
);

export default App;
