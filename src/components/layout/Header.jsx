import React from 'react';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>
          You're Signing Guestbook as: <p className="header-user">{user}</p>
        </p>
      ) : (
        <p>Aw Shucks-- Please Sign In!</p>
      )}
    </header>
  );
};

export default Header;
