import React from 'react';

function Message({ message: { name, message } }) {
  return (
    <>
      <h3 className="name">{name}</h3>
      <p>{message}</p>
    </>
  );
}

export default Message;
