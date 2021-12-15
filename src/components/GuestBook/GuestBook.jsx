import { useState } from 'react';
import { useMessages } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';

function GuestBook() {
  const [name, setName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const { messages, setMessages } = useMessages('');
  const { user, setUser } = useUser();

  function updateGuestName() {
    if (!guestMessage) return;
    setMessages([...messages, { name, message: guestMessage }]);
    setGuestMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuestName();
  };

  const guestNameEntry = (
    <div className="name-field">
      <label className="name-label" htmlFor="name-entry">
        Name:
        <input
          type="text"
          id="guest-name"
          value={name}
          className="name-input"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );

  const guestBookMessage = user
    ? `Hey ${name}, thanks for signing your message`
    : `Please sign the guest book, ${name}`;

  return (
    <>
      <h1 className="guest-book-message">{guestBookMessage}</h1>
      <form className="guestbook-form" onSubmit={handleSubmit}>
        {user ? null : guestNameEntry}
        <div className="message-field">
          <label>
            Message:
            <textarea
              className="message-text-area"
              value={guestMessage}
              id="guest-message"
              placeholder="Please leave a message..."
            >
              onChange={(e) => setGuestMessage(e.target.value)}
            </textarea>
          </label>
        </div>
        <button className="button" type="submit">
          Submit && Sign
        </button>
        {user && (
          <button
            type="button"
            className="sign-out-btn"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            Not {user} ??
          </button>
        )}
      </form>
    </>
  );
}

export default GuestBook;
