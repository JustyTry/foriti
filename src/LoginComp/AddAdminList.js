import React, {useState, useEffect} from "react";
import {
  List,
  Datagrid,
  TextField,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  TopToolbar,SortButton,CreateButton, ReferenceField, FunctionField
} from "react-admin";

////////////////////////////////////////


////////////////////////////////////

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Искать" source="id" alwaysOn />
    <ReferenceInput label="User" source="name" reference="users" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

const AddResultList = (props) => {
    const [todo, settodo] = useState({'admins':[{}, {}, {}]});

  const fetchtodo = async () =>
    fetch(`http://localhost:5000/admins`,{
        method: "get",
      header: { "Content-Type": "application/json" }
    })
      .then((response) => 
      response.json())
      .then((json) => {
        settodo(json);
        
      });

  useEffect(() => {
    fetchtodo(todo);
  }, [todo]);

  return (
    <List
      filters={<PostFilter />}
      title="Список участников"
      exporter={false}
      {...props}
    >
        
      <Datagrid>
      {todo.admins.map((row) => (
        <FunctionField id='id' render={w => `${row.password} ${row.login}`}/>
        ))}
      </Datagrid>
      
    </List>
  );
};

export default AddResultList;
