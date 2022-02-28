import React from 'react';

function Login() {
  return (
    <div>
      <form action="/action_page.php" />
      <label htmlFor="fname">First name:</label>

      <input type="text" id="fname" name="fname" value="John" />
      <label htmlFor="lname">Last name:</label>

      <input type="text" id="lname" name="lname" value="Doe" />
      <input type="submit" value="Submit" />
    </div>
  );
}

export default Login;
