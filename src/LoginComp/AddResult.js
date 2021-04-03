import { TextField } from "@material-ui/core";
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
    
    let getScores = document.getElementById("scores").value;
    let getSubj = document.getElementById('subject').value
    
    var data = JSON.stringify({
      subject: getSubj,
      score: parseInt(getScores)
      
    });
    console.log(data);
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};

const AddResult = (props) => {
    const subjValue = JSON.parse(localStorage.getItem('auth'))
    const subjet = subjValue.speciality
  return (
    <SaveContextProvider>
      <Create {...props} title="Добавить участника">
        <SimpleForm redirect="/admin" save={CreateRequest}>
          <TextInput id="id" source="id" label='Номер'/>
          <TextField
          id="subject"
          label="Предмет"
          defaultValue={subjet}
          InputProps={{
            readOnly: true,
          }}
        />
          <TextInput id="scores" source='score' label="Баллы" />
        </SimpleForm>
      </Create>
    </SaveContextProvider>
  );
};

export default AddResult;
