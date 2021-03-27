import React, { useContext, useState, useEffect } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import Auth from "../LoginComp/Auth";
import Cookies from "js-cookie";

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
        <button
          onClick={() => {
            let el1 = document.getElementById("log").value;
            let el2 = document.getElementById("pass").value;
            
            if (el1 === "user" && el2 === "user") {
                
            
              if (history !== "undefiend")
                Auth.login(() => {
                  history.push("/admin");
                });
            }
          }}
        >
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
