import React, { useState } from 'react';

function Contact() {
  const [authorized, setAuthorized] = useState(false);
  const login = <h2>გთხოვ შეიყვანე პაროლი</h2>;
  const contactInfo = (
    <ul>
      <li>მეილი: kupatadze208@gmail.com</li>
      <li>ტელეფონი: 595313334</li>
    </ul>
  );
  function handleSubmit(event) {
    event.preventDefault(); 
    const password = event.target.elements.password.value;
    if (password === 'swordfish') {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }

  return (
    <div id="authorization">
      <h1>კონტაქტი</h1>
      {authorized ? contactInfo : login}
      <form onSubmit={handleSubmit}>
        <input type="password" name="password" placeholder="პაროლი" />
        <input type="submit" value="შესვლა" />
      </form>
    </div>
  );
}

export default Contact;
