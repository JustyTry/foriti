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
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
//Button components -------------------------------------------------
const MyLogoutButton = props => {
  
  const handleClick = () => authProvider.logout();
  return (
      <MenuItem
          onClick={() => {
            handleClick()
            document.location.href = 'http://localhost:3000'
          }}
         
      >
          <ExitToAppIcon /> Выйти
      </MenuItem>
  )
}


//API components ---------------------------------------------------
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
      
      const url = `${apiUrl}/sum?sort=['title','ASC']&range=[0, 24]&filter={title:'bar'}/${resource}?${stringify(query)}`;

      return httpClient(url).then(({ headers, json }) => ({
        data: json.users.slice((page-1) * 40, page * 40).map((record) => ({ id: record.id, ...record })),

        total: parseInt(json.users.length / perPage , 20),
        
      }));
      
    },
    
    getOne:     (resource, params) => { return httpClient(`${apiUrl}/users`).then(
      
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

const AdminPage = (props) => {
  const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');
  const Role = JSON.parse(localStorage.getItem('auth')).speciality
  return (
    
    <Admin i18nProvider={i18nProvider} dataProvider={myDataProvider} logoutButton={MyLogoutButton} authProvider={authProvider} loginPage={Login}>
    {Role === 'MainAdmin' ?  (
     <Resource
        name="users"
        list={UsersList}
        create={PostCreate}
        edit={PostEdit}
      />
  ): <div></div>}
  {Role === 'MainAdmin' ?  (
      <Resource
        name="Админы"
        list={AddAdminList}
        create={AddAdmin}
      />
      ): <div></div>}
    
      <Resource
      name="Результаты"
      list={AddResultList}
      create={AddResult}
    />
      
    </Admin>
    
  );
};

export default AdminPage;
