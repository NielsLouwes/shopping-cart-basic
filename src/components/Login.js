import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const [invalidPassword, setInvalidPassword] = useState(false);
  // const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();

  // const onSubit = ({ password, email }) => {
  //   setInvalidPassword(false);
  //   const myStorage = window.localStorage;
  //   if (password === 'password' && email === 'email.nl') {
  //     myStorage.setItem('loggedIn', 'true');
  //   }
  // };

  return (
    <div className="form-body">
      <div className="form-main">
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>

        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form>
            {/* <label htmlFor="chk" aria-hidden="true">
              Login
            </label> */}
            <input
              type="email"
              {...register('password', { required: true })}
              placeholder="Password"
            />
            <input type="password" name="pswd" placeholder="Password" required="true" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
