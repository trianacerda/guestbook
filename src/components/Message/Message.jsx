function Message({ message: { name, message } }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{message}</p>
    </>
  );
}

export default Message;
