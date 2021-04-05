import React, { useState, useEffect } from "react";
import { TopToolbar, CreateButton } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactLoading from "react-loading";
////////////////////////////////////////
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CutonAction = (props) => {
  return (
    <TopToolbar {...props}>
      <CreateButton label="добавить" basePath="/Админы" />
    </TopToolbar>
  );
};

////////////////////////////////////

const AddAdminList = (props) => {
  const classes = useStyles();
  const [todo, settodo] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchtodo = async () =>
    fetch(`http://localhost:5000/admins`)
      .then((response) => response.json())
      .then((json) => {
        settodo(json);
        setLoading(false);
      });

  useEffect(() => {
    fetchtodo(todo);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {loading ? (
        <ReactLoading
          className="loaderApplication"
          type={"bubbles"}
          color={"#"}
          height={100}
          width={100}
        />
      ) : (
        <>
          <CutonAction />
          <input
            placeholder="Введите номер"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TableContainer styles={Paper} className="page">
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Имя</TableCell>
                  <TableCell align="left">Логин</TableCell>
                  <TableCell align="left">Пароль</TableCell>
                  <TableCell align="left">Предмет</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo.data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.login}</TableCell>
                      <TableCell align="left">{row.password}</TableCell>
                      <TableCell align="left">{row.subject}</TableCell>
                      <TableCell align="left">{row.result}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default AddAdminList;
