import React, { useEffect, useState } from "react";
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


const SecondPage = () => {
  const classes = useStyles();
  const [todo, settodo] = useState([]);
  const fetchtodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => settodo(json));
  };

  useEffect(() => {
    fetchtodo(todo);
  }, [todo]);

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="left">ID участника</TableCell>
            <TableCell align="left">Предметы</TableCell>
            <TableCell align="left">Баллы</TableCell>
            <TableCell align="left">Чистые баллы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">4</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default SecondPage;
