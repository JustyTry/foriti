import React from "react";
import { SimpleForm, TextInput, Edit } from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit title="Изменить" {...props}>
      <SimpleForm >
        <TextInput disabled source="id"  />
        <TextInput source="name" />
        <TextInput multiline source="class" />
        <TextInput label="Published" source="class_letter" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
