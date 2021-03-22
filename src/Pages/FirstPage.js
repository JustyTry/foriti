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
  const classes = useStyles();
  const [todo, settodo] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchtodo = async () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        settodo(json);
        setLoading(false);
        
      });

  useEffect(() => {
    fetchtodo(todo);
  }, [todo]);

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
   
          
        
        <TableContainer styles={Paper} className='page'>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          
        >
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
      )}
    </>
  );
}
