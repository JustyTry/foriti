import { Button } from "@material-ui/core";
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SelectInput,
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
    let getSubject = document.getElementById("subject").value;
    var data = JSON.stringify({
      login: getLog,
      password: getPass,
      name: getName,
      subject: getSubject,
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
          <TextInput id="name" source="nam" label="Имя" />
          <TextInput id="log" source="lo" label="Логин" />
          <TextInput id="pass" source="pa" label="Пароль" />

          <SelectInput
            source="category"
            id="subject"
            label="Предмет"
            choices={[
              { id: "1", name: "История" },
              { id: "2", name: "ИЦН" },
              { id: "4", name: "Русский" },
              { id: "5", name: "Английский" },
              { id: "6", name: "Информатика" },
              { id: "7", name: "Математика" },
              { id: "8", name: "Литература" },
              { id: "9", name: "Естествознание" },
              { id: "10", name: "Обществознание" },
              { id: "11", name: "ИЗО" },
            ]}
          />
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};

export default AddAdmin;
