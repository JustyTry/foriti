import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'
const UsersList= (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='userId' />
                <TextField source='id' />
                <TextField source='subjects' />
                <TextField source='body' />
                <EditButton basePath='/users'/>
                <DeleteButton basePath='/users'/>
            </Datagrid>
        </List>
    )
}

export default UsersList
