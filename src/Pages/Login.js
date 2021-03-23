import React from "react";
import './login.css'
import { useHistory } from "react-router-dom";
import auth from '../LoginComp/Auth';


const Login = props => {
  let history = useHistory()

  return (
    <div className="login-box">
      <h2>Вход</h2>
      <form>
        <div className="user-box">
          <input type="text" name required id='log' />
          <label>Логин</label>
        </div>
        <div className="user-box">
          <input type="password" name required id='pass' />
          <label>Пароль</label>
        </div>
        <button onClick={() => {
          let el1 = document.getElementById('log').value
          let el2 = document.getElementById('pass').value
          console.log(el1, el2)
          if (el1 === 'user' && el2 === 'user'){
            if (history !== 'undefiend')
              auth.login(() => {
                history.push("/admin");

              })
       } }}>
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
