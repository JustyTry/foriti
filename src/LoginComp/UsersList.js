import React, {useEffect, useState} from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, ReferenceInput, SelectInput, TextInput, Pagination} from 'react-admin'
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import dataProvider from 'ra-data-simple-rest';


const xhr = new XMLHttpRequest();
const url = "/delete_user"

const DeleteRequest = () => {
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json)
    }
  };
  let getID = JSON.parse(document.getElementById('Uid').value);
  const data = JSON.stringify({
    id: getID,
  })
  xhr.send(data);
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="subjects" reference="users" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
    </Filter>
);

const PostPagination = ({ page, perPage, total, setPage }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    
    return (
        nbPages > 1 &&
            <Toolbar>
                {page > 1 &&
                    <Button color="primary" key="prev" icon={<ChevronLeft />} onClick={() => setPage(page - 1)}>
                        Prev
                    </Button>
                }
                {page !== nbPages &&
                    <Button color="primary" key="next" icon={<ChevronRight />} onClick={() => setPage(page + 1)} labelPosition="before">
                        Next
                    </Button>
                }
            </Toolbar>
    );
}

const UsersList= (props) => {
    
    return (
        
        <List filters={<PostFilter />} {...props} pagination={<PostPagination />}>
            
            <Datagrid>
                <TextField id = 'Uid' source='id'/>
                <TextField source='name' />
                <TextField source='class' />
                <TextField source='class_letter'/>
                <EditButton basePath='/users'/>
                <DeleteButton basePath='/users' onClick={<DeleteRequest />}/>
            
            </Datagrid>
            
        </List>
    )
}

export default UsersList
