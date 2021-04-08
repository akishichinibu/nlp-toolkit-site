import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Header } from './Header';
import { Footer } from './Footer';
import { ServiceInfoType, ServiceCard } from './ServiceCard';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


export const serviceInfos: Array<ServiceInfoType> = [
  {
    name: "Bert",
    intro: "Simple Bert",
    url: "/bert",
  },
]


interface EntryPropsType {
  services: Array<ServiceInfoType>;
  title: string;
  description: string;
}


export const Entry: FC<EntryPropsType> = ({ services, title, description }) => {
  const classes = useStyles();

  return <>
    <CssBaseline />
    <Header />

    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>{title}</Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>{description}</Typography>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Main call to action</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Secondary action</Button>
              </Grid>
            </Grid>
          </div>

        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {services.map((s) => <ServiceCard service={s} />)}
        </Grid>
      </Container>
    </main>

    <Footer />
  </>;
}
