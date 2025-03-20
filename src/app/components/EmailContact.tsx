const EmailContact = () => {
  return (
    <main className="">
      <form action="/api/send" method="post">
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default EmailContact;
