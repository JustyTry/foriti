import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title="Добавить участника" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" />
        <TextInput label="Published" source="userId" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
