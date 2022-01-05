import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Login.css';

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
      <h1> Sign in here to access the guestbook</h1>
      <form onSubmit={handleLogin}>
        <label aria-label="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          value={formState.email}
          onChange={handleFormStateChange}
          required
        />{' '}
        <label aria-label="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={formState.password}
          onChange={handleFormStateChange}
          required
        />
        <button type="submit" aria-label="sign-in">
          Sign In
        </button>
      </form>
      {error && <h4>{error}</h4>}
    </>
  );
}
