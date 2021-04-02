import { Button } from "@material-ui/core";
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SaveContextProvider,
} from "react-admin";

var xhr = new XMLHttpRequest();

const CreateRequest = (props) => {
  var url = `http://localhost:5000/add_admin`;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {};
  try {
    let getName = document.getElementById("name").value;
    let getLog = document.getElementById("log").value;
    let getPass = document.getElementById("pass").value;
    var data = JSON.stringify({
      login: getLog,
      password: getPass,
      name: getName,
      subject: "физика",
    });
    console.log(data);
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};

const AddAdmin = (props) => {
    

  return (
    <SaveContextProvider>
      <Create {...props} title="Добавить Админа">
        <SimpleForm redirect="/admin" save={CreateRequest}>
          <TextInput id="name" source='nam' label="Имя" />
          <TextInput id="log" source='lo' label="Логин" />
          <TextInput id="pass" source='pa' label="Пароль" />
          
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};

export default AddAdmin;
