import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export const Footer: FC = () => {
  const classes = useStyles();

  return <>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
        </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
        </Typography>
    </footer>
  </>
}
