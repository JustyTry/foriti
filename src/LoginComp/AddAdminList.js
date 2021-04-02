import React, {useState, useEffect} from "react";
import {
  List,
  Datagrid,
  TopToolbar,CreateButton, FunctionField
} from "react-admin";

////////////////////////////////////////

const CutonAction = (props) =>{
    return (
        <TopToolbar>
        <CreateButton label='добавить' basePath="/users"/>
    </TopToolbar>
    );
}

////////////////////////////////////



const AddResultList = (props) => {
    const [todo, settodo] = useState({'data':[{}, {}, {}]});
    
  const fetchtodo = async () =>
      setTimeout(() => {
        
      
    fetch(`http://localhost:5000/admins`,{
        method: "get",
      header: { "Content-Type": "application/json" }
      
    })
      .then((response) => 
      response.json())
      
      .then((json) => {
        settodo(json);
        
      })}, 1000);

  useEffect(() => {
    
    fetchtodo(todo);
  }, [todo]);

  return (
    
    <List
      title="Список участников"
      exporter={false}
      actions={<CutonAction/>}
      {...props}
    >
        
      <Datagrid>
        
      {
      todo.data.map((row) => (
        <FunctionField id='id' render={w => `${row.password} ${row.login}`}/>
        ))}
      </Datagrid>
      
    </List>
  );
};

export default AddResultList;
