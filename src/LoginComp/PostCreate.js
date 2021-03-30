import { Button } from "@material-ui/core";
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SaveContextProvider
} from "react-admin";
//add_user
var xhr = new XMLHttpRequest();
var url = "http://localhost:5000/add_user";

const CreateRequest = (props) => {
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  };
  try {
    let getName = document.getElementById("name").value;
    let getClass = document.getElementById("class").value;
    let getLettr = document.getElementById("class_letter").value;
    var data = JSON.stringify({
      
      "name": getName,
      "class": getClass,
      "class_letter": getLettr,
      "days": []
    });
    console.log(data)
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
          <TextInput id="name" source="uname" />
          <TextInput id="class" source="class" />
          <TextInput
            id="class_letter"
            label="Published"
            source="class_letter"
          />
          <RadioButtonGroupInput
            source="category"
            choices={[
              { id: "maths", name: "Programming" },
              { id: "lifestyle", name: "Lifestyle" },
              { id: "photography", name: "Photography" },
            ]}
          />
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};
const PostBulkActionButtons = props => (
      <Button label='Добавить' {...props}/>
      
);
export default PostCreate;
