import React from 'react';

function Message({ message: { name, message } }) {
  return (
    <>
      <div
        style={{
          borderStyle: 'solid',
          borderColor: 'purple',
          borderRadius: '20px',
        }}
      >
        <p className="name">{name}</p>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Message;
