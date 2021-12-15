import GuestBook from '../../components/GuestBook/GuestBook';
import { MessageProvider } from '../../context/MessageContext';

const Home = () => {
  return (
    <MessageProvider>
      <GuestBook />
    </MessageProvider>
  );
};

export default Home;
