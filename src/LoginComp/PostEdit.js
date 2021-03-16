import React from "react";
import { SimpleForm, TextInput, Edit } from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit title="Изменить" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <TextInput label="Published" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
