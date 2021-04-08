import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export interface ServiceInfoType {
  name: string;
  intro: string;
  url: string;
}


export const ServiceCard: FC<{ service: ServiceInfoType }> = ({ service: { name, intro, url } }) => {
  const classes = useStyles();
  const history = useHistory();
  
  return <>
    <Grid item key={name} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
          <Typography>{intro}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => history.push(url)}>View</Button>
        </CardActions>
      </Card>
    </Grid>
  </>
}
