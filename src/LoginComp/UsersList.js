import React, {useEffect, useState} from "react";
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
  TopToolbar,
  SortButton,
  CreateButton,
  useQuery, useGetList ,useTranslate, SearchInput
} from "react-admin";

import myDataProvider from './testadmin'
import { Button, Chip, useMediaQuery } from '@material-ui/core';
import simpleRestProvider from "ra-data-simple-rest";
import { makeStyles } from '@material-ui/core/styles';
import {TextField as TextFieldOne} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
////////////////////////////////////////
const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};

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
      id: parseInt(textid),
    });
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }
};

const PostFilter = props => {
    const [todo, settodo] = useState({users:[]})
    const fetchtodo = async() => fetch('http://localhost:5000/sum').then((response) => response.json())
    .then((json) => {
      settodo(json);
    });
    useEffect(() => {
        fetchtodo(todo);
        return 0;
      }, []);
      console.log(todo)
      
    return (
        <>
        <Autocomplete
          id="searchadmin"
        options={todo.users}
          getOptionLabel={(option) => option.id.toString()}
          style={{ width: 300 }}
          renderInput={(params) => <TextFieldOne {...params} label="Введите номер" variant="outlined" />}
        />
        <Button 
        onClick={() => 
            window.location.replace(`http://localhost:3000/admin#/users/${document.getElementById('searchadmin').value}`)
        }
        style={{'display': 'flex', 'width': '35%', 'background-color': '#237BFF', 'color': '#fff'}}>Найти</Button>
        </>
      );
}


const UsersList = (props) => {
    useGetList(
        'sum',
        { page: 1, perPage: 10 },
        { field: 'id', order: 'DESC' }
    );
      
  return (
      <>
    <PostFilter/>
    <List
      title="Список участников"
      exporter={false}
      bulkActionButtons={false}
      sort={{ field: 'id', order: 'DESC' }}
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
    </>
  );
};

export default UsersList;
