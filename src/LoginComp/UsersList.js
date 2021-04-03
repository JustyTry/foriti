import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  Pagination,TopToolbar,SortButton,CreateButton,ExportButton
} from "react-admin";
import PostBulkActionButtons from './PostCreate'
import simpleRestProvider from "ra-data-simple-rest";
import myDataProvider from './Admin'
////////////////////////////////////////
const ListActions = (props) => (
    <>
    <TopToolbar>
        <SortButton label='Параметры' {...props}/>
        <CreateButton label='Добавить участника' {...props}/>
    </TopToolbar>
    </>
);

////////////////////////////////////
simpleRestProvider("http://localhost:5000/delete_user");
const xhr = new XMLHttpRequest();
const url = "http://localhost:5000/delete_user";

const DeleteRequest = (gets) => {
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {};
  try {
    let hek = document.querySelector("#Uid");
    let textid = hek.textContent;
    var data = JSON.stringify({

      "id":parseInt(textid),
    });
    console.log(data);
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};


const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Искать" source="q" alwaysOn />
    <ReferenceInput label="User" source="name" reference="users" allowEmpty>
      <SelectInput optionText="class_letter" />
    </ReferenceInput>
  </Filter>
);

const UsersList = (props) => {

  return (
      
    <List
      filters={<PostFilter />}
      title="Список участников"
      exporter={false}
      bulkActionButtons={false}
      {...props}
    >
       
      <Datagrid>
      
        <TextField label="Номер" id="Uid" source="id" />
        <TextField label="Имя" source="name" />
        <TextField label="Класс" source="class" />
        <TextField label="Буква" source="class_letter" />
        <EditButton label="Изменить" basePath="/users" />
        
        <DeleteButton
          label="Удалить"
          basePath="/users"
          
          onClick={DeleteRequest}
        />
      </Datagrid>
    </List>
  );
};

export default UsersList;
