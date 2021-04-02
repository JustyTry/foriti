import React, { useContext, useState, useEffect } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import Auth from "../LoginComp/Auth";
import authProvider from "../LoginComp/Authorizarion/mainAuth";

const Login = (props) => {

  let history = useHistory();


  return (
    <div className="login-box">
      <h2>Вход</h2>
      <form>
        <div className="user-box">
          <input type="text" name required id="log" />
          <label>Логин</label>
        </div>
        <div className="user-box">
          <input type="password" name required id="pass" />
          <label>Пароль</label>
        </div>
        <a href='#'
          onClick={() => {
            
            (async() => {
              let el1 = document.getElementById("log").value;
            let el2 = document.getElementById("pass").value;
              const result = await authProvider.login( el1, el2 );
              var a = result;
            
            if (a !== 0){

              if (history !== "undefiend")
                Auth.login(() => {
                  history.push("/admin");
                });
            }
          })();
          }}
          
        >
          <span />
          <span />
          <span />
          <span />
          Войти
        </a>
      </form>
    </div>
  );
};

export default Login;
