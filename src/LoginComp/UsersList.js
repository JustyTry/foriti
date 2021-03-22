import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin'
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="subjects" reference="users" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
    </Filter>
);

const UsersList= (props) => {
    return (
        <List filters={<PostFilter />} {...props}>
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
