import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserInfo = () => {
    var hash = window.location.href.replace(window.location.hash, '');
    hash = hash.split("/")
    console.log(hash)
    hash = parseInt(hash[4])
    const[todo, setTodo] = useState({data: {}})
    const[data, setData] = useState({users: []})
    const fetchtodo = async() => {
        fetch(`http://localhost:5000/get_user/${hash}`)
        .then(respone => respone.json())
        .then(json => setTodo(json))
    }
    const lenghtfetch = async() => {
        fetch(`http://localhost:5000/sum`)
        .then(respone => respone.json())
        .then(json => setData(json))
        .catch(e => Promise.reject)
    }
    useEffect(() => {
        
         fetchtodo()
         lenghtfetch()
       
    }, [])
    const classes = useStyles();
    return(
        <>
        {todo.data.name}
        {parseInt(hash) - (hash - 1) <= data.users.length && todo.data.results !== 'undefiend'?(
            
         <TableContainer styles={Paper} className='page'>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          
        >
           
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="left">Класс</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              
              <TableRow key={todo.data.id}>
                <TableCell component="th" scope="row">
                  {todo.data.id}
                </TableCell>
              <TableCell align="left">{todo.data.class}</TableCell>
              {todo.data.results.map(row =>
              <TableCell align="left"> {row.subject}<br/>{row.value}</TableCell>)}
             
              </TableRow>
          </TableBody>
        </Table>
        </TableContainer>) : <div>Такого пользователя не существует</div>}
        </>
    )
}

export default UserInfo