import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import { Footer } from './Footer';
import { Header } from './Header';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  button: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export const ServicePageBase: FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return <>
    <CssBaseline />
    <Header />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
            className={classes.button}
          >
            Back
        </Button>
        </div>
        {children}
      </Paper>
    </main>
    <Footer />
  </>;
}
