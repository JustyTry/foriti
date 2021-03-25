import React from "react";
import { Admin, Resource, Filter, Datagrid, SearchInput, List ,TextInput, ChipField} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UsersList from "./UsersList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";



const AdminPage = (props) => {
  return (
    
    <Admin dataProvider={simpleRestProvider("http://localhost:3000")}>
      
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
