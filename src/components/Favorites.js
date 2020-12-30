import React from 'react';
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridCard: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: theme.spacing(2),
        margin: theme.spacing(2),
      ['@media (max-width:780px)']: { 
        display: "block",
      }
    }
  }));

export default function Favorites(props){
    const classes = useStyles();
    return (
        <div className={classes.gridCard}>
            {props.favorites.map((f, i)=> <MediaCard info={{title: f.title, url:f.imgUrl, id: f._id, explanation: f.description}} key={i} />)}
        </div>
    )
}