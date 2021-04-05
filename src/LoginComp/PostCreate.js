import { Button } from "@material-ui/core";
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SaveContextProvider,
} from "react-admin";
//add_user
var xhr = new XMLHttpRequest();
var url = "http://localhost:5000/add_user";

const CreateRequest = (props) => {
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {};
  try {
    let getName = document.getElementById("name").value;
    let getClass = document.getElementById("class").value;
    let getLettr = document.getElementById("class_letter").value;
    var data = JSON.stringify({
      name: getName,
      class: getClass,
      class_letter: getLettr,
      days: [],
    });
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};

const PostCreate = (props) => {
  return (
    <SaveContextProvider>
      <Create {...props} title="Добавить участника">
        <SimpleForm redirect="/admin" save={CreateRequest}>
          <TextInput id="name" label='Имя' source="uname" />
          <TextInput id="class" label='Класс' source="class" />
          <TextInput
            id="class_letter"
            label="Буква"
            source="class_letter"
          />
         <TextInput
            id="class_letter"
            label="Команда"
            source="class_letter"
          />
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};
const PostBulkActionButtons = (props) => <Button label="Добавить" {...props} />;
export default PostCreate;
