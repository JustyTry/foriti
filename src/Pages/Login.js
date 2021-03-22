import React from "react";
import './login.css'
import { useHistory} from "react-router-dom";
import auth from '../LoginComp/Auth'
const Login = props => {
  let history = useHistory()
  
  return (
    <div className="login-box">
        <h2>Вход</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Login</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <button onClick={() => {
              if(history !== 'undefiend')
              auth.login(() => {
                history.push("/admin");
              
              });
            }}>
            <span />
            <span />
            <span />
            <span />
            Войти
          </button>
        </form>
      </div>
  );
};

export default Login;
