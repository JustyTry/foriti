import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import auth from '../LoginComp/Auth'
const Login = props => {
  let history = useHistory()
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 400,
    margin: "20px auto",
    align: 'center'
  };
  const ButPar = {
    height: "30",
    width: 100,
    margin: "20px auto",
    left: '50%',
    right: '50%'
  };
  return (
    <Router>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center"></Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <Link to='/adminch'>
          <Button
            variant="contained"
            color="primary"
            style={ButPar}
            onClick={() => {
              if(history !== 'undefiend')
              auth.login(() => {
                history.push("/admin");
              
              });
            }}
          >
            Войти
          </Button>
          </Link>
          <Typography>
          </Typography>
        </Paper>
      </Grid>
    </Router>
  );
};

export default Login;
