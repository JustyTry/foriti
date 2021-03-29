import React from "react";
import { Admin, Resource, fetchUtils, HttpError  } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UsersList from "./UsersList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import Login from "../Pages/Login";
import { stringify } from "query-string";


const apiUrl =
    "http://localhost:5000";
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
      const url = `${apiUrl}/users_sum?sort=['title','ASC']&range=[0, 24]&filter={title:'bar'}/${resource}?${stringify(query)}`;

      return httpClient(url).then(({ headers, json }) => ({
        data: json.users.filter((item, idx) => idx < 5).map((record) => ({ id: record.id, ...record })),

        total: parseInt(headers.get("content-range"), 10),
        
      }));
      
    },
    
    getOne:     (resource, params) => { return httpClient(`${apiUrl}/users`).then(
      console.log('nath')
      
    ).catch((e) =>{
      console.log(e)
      return Promise.reject()
    })},
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => {if (resource !== 'posts' || !params.data.pictures) {
      return restProvider.update(resource, params);
  }},
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => { return httpClient(`${apiUrl}/delete_user`).then()
    .catch((e) =>{
      console.log(e)
      return Promise.reject()
    })},
    deleteMany: (resource, params) => Promise,
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
