import { useState } from 'react';

function GuestBook() {
  const [name, setName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [messages, setMessages] = useState('');

  function updateGuestName() {
    if (!guestMessage) return;
    setMessages([...messages], { name, guestMessage });
    setGuestMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuestName();
  };

  return (
    <>
      <h1>Display Message to Guest</h1>
      <form>
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

        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            setName('');
          }}
        >
          Sign Your Message
        </button>
      </form>
    </>
  );
}

export default GuestBook;
