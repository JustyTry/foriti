import React from "react";
import { SimpleForm, TextInput, Edit} from "react-admin";

var xhr = new XMLHttpRequest();

const EditRequest = (props) => {
  let getid = document.getElementById("id").value;
  xhr.open("PATCH", `http://localhost:5000/users/${getid}`, true);
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
    
    return Promise.resolve({});
};


const PostEdit = (props) => {
  return (
    <Edit title="Изменить" {...props}>
      <SimpleForm save={EditRequest}>
        <TextInput disabled source="id" id='id' />
        <TextInput source="name" />
        <TextInput multiline source="class" />
        <TextInput label="Published" source="class_letter" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
