import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useMember from '../hooks/useMember';

import Header from '../components/Header/Header';
import Input from '../components/Forms/Input';
import Button from '../components/Forms/Button';

const LoginPage = () => {
  const history = useHistory();
  const { addMember } = useMember();

  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    const { username, password } = formValues;

    if (username === '') {
      setError('Please enter your username.');
    } else if (password === '') {
      setError('Please enter your password.');
    } else {
      addMember({ username });

      history.push('/profile');
    }
  };

  return (
    <div>
      <Header />
      {error && <div className='error'>{error}</div>}
      <section className='site'>
        <h1>Login page</h1>

        <div className='content'>
          <div className='form'>
            <form onSubmit={handleSubmit} noValidate>
              <div className='form-elements'>
                <div className='form-line'>
                  <label htmlFor='username'>Username</label>
                  <Input
                    type='text'
                    name='username'
                    value={formValues.username}
                    placeholder='Please enter your username'
                    onChange={handleChange}
                    maxLength={30}
                  />
                </div>
                <div className='form-line'>
                  <label htmlFor='password'>Password</label>
                  <Input
                    type='password'
                    name='password'
                    value={formValues.password}
                    placeholder='Please enter your password'
                    onChange={handleChange}
                    maxLength={30}
                  />
                </div>
                <div className='form-buttons'>
                  <Button type='submit' title='Login' onClick={handleSubmit} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
