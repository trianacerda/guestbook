import React from 'react';
import { useContext, createContext, useState } from 'react';

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessages = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error(
      'useMessages hook must be used withing a MessageContext Provider parent tag'
    );
  }

  return context;
};

export { MessageProvider, useMessages };
