import React from 'react';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>
          You're Signing Guestbook as
          <span className="header-user">{user}</span>
        </p>
      ) : (
        <p>Aw Shucks-- Please Sign In!</p>
      )}
    </header>
  );
};

export default Header;
