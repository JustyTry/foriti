import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactLoading from "react-loading";
import './PageStyles.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FirstPage() {
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", `http://localhost:5000/change_day`, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  try {
    var data = JSON.stringify({
      "new_day": 0,
    });
    console.log(data)
    xhr.send(data);
    
  } catch (e) {
     
        console.log(e);
    }

  const classes = useStyles();
  const [todo, settodo] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchtodo = async () =>
  
    fetch(`http://localhost:5000/sum`)
      .then((response) => response.json() )
      .then((json) => {
        settodo(json);
        setLoading(false);
        
      });

  useEffect(() => {
    fetchtodo(todo);
    return 0
  }, []);
  console.log(todo)
 
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <>
      {loading ? (
        <ReactLoading  className='loaderApplication'
        type={"bubbles"}
        color={"#"}
        height={100}
        width={100}
        />
      ) : (
   
          
        <>
        <input placeholder='Введите номер' type='text' onChange={(e) => setSearchTerm(e.target.value)}/>
        <TableContainer styles={Paper} className='page'>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          
        >
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Класс</TableCell>
              <TableCell align="left">Буква</TableCell>
              <TableCell align="left">Баллы</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todo.users.filter((val) => {
              if(searchTerm === ''){
                return val
              }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            }).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.class}</TableCell>
              <TableCell align="left">{row.class_letter}</TableCell>
              <TableCell align="left">{row.result}</TableCell>
              <TableCell align="left"><a href={`http://localhost:3000/userinfo/${row.id}`}>Подробнее</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </>
      )}
    </>
  );
}
