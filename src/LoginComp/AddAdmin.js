import { Button, MenuItem, Select,  } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SelectInput,
  SaveContextProvider,
} from "react-admin";

var xhr = new XMLHttpRequest();



const AddAdmin = (props) => {
    const [value, setValue] = useState("")
    const [todo, settodo] = useState({data: []});
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
            subject: value,
          });
          console.log(data);
          xhr.send(data);
        } catch (e) {
          console.log(e);
        }
      };
  const fetchtodo = async () =>
  
    await fetch(`http://localhost:5000/subjects`)
      .then((response) => response.json() )
      .then((json) => {
        settodo(json);
      })    ;

  useEffect(() => {
    fetchtodo(todo);
  }, []);
  console.log(todo)
  const handleChange = e => setValue(e.target.value)
  return (
      
    <SaveContextProvider>
       
      <Create {...props} title="Добавить Админа">
        <SimpleForm redirect="/admin" save={CreateRequest}>
          <TextInput id="name" source="nam" label="Имя" />
          <TextInput id="log" source="lo" label="Логин" />
          <TextInput id="pass" source="pa" label="Пароль" />
          
          <Select onChange={handleChange} defaultValue="математика" id="grouped">
          {todo.data.map(row => 
          <MenuItem value={row}>{row}</MenuItem>
          )}
        </Select>
 
        </SimpleForm>
      </Create>
       
    </SaveContextProvider>
  );
};

export default AddAdmin;
