const ContactUs = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <form>
        <input className="border p-2 m-2" placeholder="name"></input>
        <input className="border p-2 m-2" placeholder="message"></input>
        <button className="border border-md p-2 my-2">Submit</button>
      </form>
    </>
  );
};

export default ContactUs;
