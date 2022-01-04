import React from 'react';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <div>
          You're Signing Guestbook as:
          <p className="header-user">{user}</p>
        </div>
      ) : (
        <p>Aw Shucks-- Please Sign You Name and Enter a Message!</p>
      )}
    </header>
  );
};

export default Header;
