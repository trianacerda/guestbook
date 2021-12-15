import React from 'react';
import { useMessages } from '../../context/MessageContext';
import Message from '../Message/Message';

function MessageList() {
  const { messages } = useMessages();

  return (
    <>
      <ul>
        {messages.map((message) => {
          return (
            <li key={`${message.name}-${message.message}`}>
              <Message message={message} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MessageList;
