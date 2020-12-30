import React, {useState, useEffect} from 'react';
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    gridCard: {
        display: "grid",
        width: "70%",
        margin: theme.spacing(2, 'auto'),
      ['@media (max-width:780px)']: { 
        display: "block",
        width: "100%",
      },
    }
  }));

export default function Home(){
    const classes = useStyles();
    const [pictureDay, setPictureDay] = useState(0)

    useEffect(()=> {
        async function loadAPOD (){
            const image = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA}`)
            setPictureDay(image.data)
        }
        loadAPOD()
    }, [])

    return (
        <div className={classes.gridCard}>
            {pictureDay && <MediaCard info={pictureDay} />}
        </div>
    )
}