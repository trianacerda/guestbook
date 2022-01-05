import React from 'react';
import { useState } from 'react';
import { useMessages } from '../../context/MessageContext';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function GuestBook() {
  const [guestMessage, setGuestMessage] = useState('');
  const { messages, setMessages } = useMessages();
  const history = useHistory();
  const { logout, user } = useAuth();

  function savedGuestName() {
    if (!guestMessage) return;
    setMessages([...messages, { name: user.email, message: guestMessage }]);
    setGuestMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    savedGuestName();
  };

  const handleLogOut = () => {
    logout(() => history.push('/'));
  };

  return (
    <>
      <h2 className="guest-book-message">{`Hey ${user.email}-- thanks for signing your message`}</h2>
      <form className="guestbook-form" onSubmit={handleSubmit}>
        <div className="message-field">
          <label>
            Message:
            <textarea
              className="message-text-area"
              value={guestMessage}
              id="guest-message"
              placeholder="Please leave a message..."
              onChange={(e) => setGuestMessage(e.target.value)}
            />
          </label>
        </div>
        <button className="button" type="submit">
          Submit && Sign
        </button>
        {user && (
          <button type="button" className="sign-out-btn" onClick={handleLogOut}>
            Not {user.email}? Click here to log out--
          </button>
        )}
      </form>
    </>
  );
}

export default GuestBook;
