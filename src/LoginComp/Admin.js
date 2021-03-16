import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UsersList from "./UsersList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";

function AdminPage() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="users"
        list={UsersList}
        create={PostCreate}
        edit={PostEdit}
      />
    </Admin>
  );
}

export default AdminPage;
