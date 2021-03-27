import React from "react";
import { Admin, Resource, fetchUtils, Pagination  } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UsersList from "./UsersList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import Login from "../Pages/Login";
import authProvider from "./authProvider";
import { stringify } from "query-string";
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';

const apiUrl =
    "http://localhost:5000/users_sum?sort=['title','ASC']&range=[0, 24]&filter={title:'bar'}&pagination[users 0-20/20]";
  const httpClient = fetchUtils.fetchJson;
  
  const myDataProvider = {
    ...restProvider,
    getList: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter),
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;

      return httpClient(url).then(({ headers, json }) => ({
        data: json.users.map((record) => ({ id: record.id, ...record })),

        total: parseInt(headers.get("content-range"), 10),
      }));
    },
  };

const AdminPage = (props) => {
  
  return (
    <Admin dataProvider={myDataProvider}  loginPage={Login}>
      <Resource
        name="users"
        list={UsersList}
        create={PostCreate}
        edit={PostEdit}
      />
    </Admin>
  );
};

export default AdminPage;
