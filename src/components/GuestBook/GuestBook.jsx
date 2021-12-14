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
        <label className="name-label" htmlFor="name-entry">
          Name:
          <input
            type="text"
            id="guest-name"
            value={name}
            className="name-input"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.event)}
          />
        </label>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            setName('');
          }}
        ></button>
      </form>
    </>
  );
}

export default GuestBook;
