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


const CreateRequest = (props) => {
    let getId = document.getElementById("id").value;
    var url = `http://localhost:5000/add_result/${getId}`;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {};
  try {
    
    let getLettr = document.getElementById("scores").value;
    var data = JSON.stringify({
      subject: 'математика',
      score: parseInt(getLettr)
      
    });
    console.log(data);
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};

const AddResult = (props) => {
  return (
    <SaveContextProvider>
      <Create {...props} title="Добавить участника">
        <SimpleForm redirect="/admin" save={CreateRequest}>
          <TextInput id="id" source="id" />
          <RadioButtonGroupInput
            className="subject"
            source="category"
            choices={[{ id: "maths", name: "Математика" }]}
          />
          <TextInput id="scores" source='score' label="Баллы" />
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};

export default AddResult;
