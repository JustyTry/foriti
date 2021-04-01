import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  TopToolbar,SortButton,CreateButton
} from "react-admin";

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

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Искать" source="id" alwaysOn />
    <ReferenceInput label="User" source="name" reference="users" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

const AddResultList = (props) => {
  return (
    <List
      filters={<PostFilter />}
      title="Список участников"
      
      exporter={false}
      {...props}
    >
      <Datagrid>
        <TextField label="Номер" id="Uid" source="id" />
        <TextField label="Имя" source="name" />
        <TextField label="Класс" source="class" />
      </Datagrid>
    </List>
  );
};

export default AddResultList;
