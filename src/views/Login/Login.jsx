import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { formState, handleFormStateChange } = useForm({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (event) => {
    event.preventDefault();
    const loginWasSuccessful = auth.login(formState.email, formState.password);

    !loginWasSuccessful
      ? setError(
          'whoops--looks like the login information you entered failed. Try again?'
        )
      : history.replace(from);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleFormStateChange}
        />{' '}
        <label hmtlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleFormStateChange}
        />
        <button type="submit" aria-label="Sign In">
          Sign In
        </button>
      </form>
      {error && <h1>{error}</h1>}
    </>
  );
}
