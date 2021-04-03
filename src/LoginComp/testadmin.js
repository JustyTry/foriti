import React from "react";
import { Admin, Resource, fetchUtils} from "react-admin";
import restProvider from "ra-data-simple-rest";
import UsersList from "./UsersList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import Login from "../Pages/Login";
import { stringify } from "query-string";
import AddResultList from './AddResultList'
import AddResult from './AddResult'
import AddAdmin from "./AddAdmin";
import AddAdminList from './AddAdminList'
import authProvider from "./Authorizarion/mainAuth.jsx";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
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
    const httpClient = fetchUtils.fetchJson;
      const apiUrl =
    "http://localhost:5000";
      const url = `http://localhost:5000/${resource}`;

      return httpClient(url).then(({ headers, json }) => ({
        data: json.users.map((record) => ({ id: record.id, ...record })),

        total:parseInt(10, 20),
        
      }));
      
    },
    
    getOne:     (resource, params) => { return httpClient(`${apiUrl}/users`).then(
      console.log('nath')
      
    ).catch((e) =>{
      console.log(e)
      return Promise.reject()
    })},
    getMany:    (resource, params) => {return Promise.reject();},
    getManyReference: (resource, params) => {return Promise.resolve();},
    create:     (resource, params) => {return Promise.resolve();},
    update:     (resource, params) => {if (resource !== 'posts' || !params.data.pictures) {
      return restProvider.update(resource, params);
  }},
    updateMany: (resource, params) => {return Promise.resolve();},
    delete:     (resource, params) => { return httpClient(`${apiUrl}/delete_user`).then()
    .catch((e) =>{
      console.log(e)
      return Promise.reject()
    })},
    deleteMany: (resource, params) => {return Promise.resolve();},
  };

  export default myDataProvider