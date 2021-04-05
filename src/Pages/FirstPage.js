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
import "./PageStyles.css";

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
      new_day: 0,
    });
    xhr.send(data);
  } catch (e) {
    console.log(e);
  }

  const classes = useStyles();
  const [todo, settodo] = useState();
  const [loading, setLoading] = useState(true);

  const fetchtodo = async () =>
    fetch(`http://localhost:5000/users/1`)
      .then((response) => response.json())
      .then((json) => {
        settodo(json);
        setLoading(false);
      });
     
      // fetch(`http://localhost:5000/users/betters/teams`)
      //   .then((response) => response.json())
      //   .then((json) => {
      //     settodo(json);
      //     setLoading(false);
  useEffect(() => {
    fetchtodo(todo);
    return 0;
  }, []);
  const [searchFind, setsearchFind] = useState("");
  const [searchTerm, setSearchTerm] = useState("5");
  const [searchTermsix, setSearchTermsix] = useState("6");
  const [searchTermseven, setSearchTermseven] = useState("7");
  const [searchTermeight, setSearchTermeight] = useState("8");
  const [searchTermnine, setSearchTermnine] = useState("9");
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
          <input
            id="find"
            type="text"
            placeholder="Введите код"
            onChange={(e) => setsearchFind(e.target.value)}
          />
          <input
            id="classfive"
            type="checkbox"
            defaultChecked={true}
            value={"5"}
            onChange={(props) => {
              console.log(document.getElementById("classfive"));
              if (document.getElementById("classfive").checked === true) {
                console.log(document.getElementById("classfive"));
                setSearchTerm(document.getElementById("classfive").value);
              } else {
                setSearchTerm(" ");
              }
            }}
          />
          5 Класс
          <input
            id="classsix"
            type="checkbox"
            defaultChecked={true}
            value={"6"}
            onChange={() => {
              console.log(document.getElementById("classsix"));
              if (document.getElementById("classsix").checked === true) {
                setSearchTermsix(document.getElementById("classsix").value);
              } else {
                console.log(document.getElementById("classsix"));
                setSearchTermsix(" ");
              }
            }}
          />
          6 Класс
          <input
            id="classseven"
            type="checkbox"
            defaultChecked={true}
            value={"7"}
            onChange={() => {
              if (document.getElementById("classseven").checked === true) {
                setSearchTermseven(document.getElementById("classseven").value);
              } else {
                setSearchTermseven(" ");
              }
            }}
          />
          7 Класс
          <input
            id="classseight"
            type="checkbox"
            defaultChecked={true}
            value={"8"}
            onChange={() => {
              if (document.getElementById("classseight").checked === true) {
                setSearchTermeight(
                  document.getElementById("classseight").value
                );
              } else {
                setSearchTermeight(" ");
              }
            }}
          />
          8 Класс
          <input
            id="classnine"
            type="checkbox"
            defaultChecked={true}
            value={"9"}
            onChange={() => {
              if (document.getElementById("classnine").checked === true) {
                setSearchTermnine(document.getElementById("classnine").value);
              } else {
                setSearchTermnine(" ");
              }
            }}
          />
          9 Класс
          {console.log(searchTerm, searchTermsix)}
          <TableContainer styles={Paper} className="page">
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
                {todo.users
                  .filter((val) => {
                    if (searchFind === "") {
                      if (
                        searchTerm === "" &&
                        searchTermsix === "" &&
                        searchTermseven === "" &&
                        searchTermeight === "" &&
                        searchTermnine === ""
                      ) {
                        return val;
                      } else if (
                        val.class
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        val.class
                          .toString()
                          .toLowerCase()
                          .includes(searchTermsix.toLowerCase()) ||
                        val.class
                          .toString()
                          .toLowerCase()
                          .includes(searchTermseven.toLowerCase()) ||
                        val.class
                          .toString()
                          .toLowerCase()
                          .includes(searchTermeight.toLowerCase()) ||
                        val.class
                          .toString()
                          .toLowerCase()
                          .includes(searchTermnine.toLowerCase())
                      ) {
                        return val;
                      } 
                    }else if (
                      val.id
                        .toString()
                        .toLowerCase()
                        .includes(searchFind.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.class}</TableCell>
                      <TableCell align="left">{row.class_letter}</TableCell>

                      <TableCell align="left">
                        <a href={`http://localhost:3000/userinfo/${row.id}`}>
                          Подробнее
                        </a>
                      </TableCell>
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
