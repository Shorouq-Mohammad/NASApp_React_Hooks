import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
import ReactPlayer from 'react-player'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function MediaCard(props) {
    const location = useLocation().pathname
    const {url, title, media_type, explanation, id} = props.info
    const classes = useStyles();
    const [like, setLike] = useState(false)
    const [snackbarVars, setSnackbarVars] = useState({open: false, message: "", severity: "success"})
    const history = useHistory()

    useEffect(()=>{
        if(location.includes("/favorite")){
            setLike(true)
        }
    }, [])

    const addToDB = async () =>{
        const image = {title, imgUrl: url, description: explanation}
        let message, severity
        try{
            message= await axios.post("http://localhost:4200/image", image)
            message = message.data
            severity = "success"
            setLike(true)
        }catch(err){
            message = "The image wasn't added"
            severity = "error"
        }
        setSnackbarVars({severity, open: true, message})
    }

    const removeFromDB = async () => {
        let message, severity
        try {
            message= await axios.delete(`http://localhost:4200/image/${id}`)
            message = message.data
            setLike(false)
            severity = "success"
        } catch (err) {
            message = "The image wasn't deleted"
            severity = "error"
        }finally{
            const obj = {severity, message, open: true}
            setSnackbarVars(obj)
        }
    }

    const checkDescriptionAppearance = () => location.length > 12 || location === "/home"

    const handleCardClick = () => {
        if(location === "/favorites"){
            history.push(`/favorite/${id}`)
        }
    }
    
    const handleClose = (event) => setSnackbarVars({...snackbarVars, open:false})
    
    return (
        <div className="mediaCardDiv" >
            <Card className={classes.root} >
                <CardActionArea style={{justifyContent: 'center'}} onClick={handleCardClick}>
                    {media_type === "video" ? <ReactPlayer url={url} style={{maxWidth: "100%"}}/> : 
                    <CardMedia component="img" alt="photo" width="100%" image={url} title={title} /> }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                        {checkDescriptionAppearance() && <Typography variant="body2" color="textSecondary" component="p">{explanation}</Typography>} 
                    </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" color="primary" >
                        {location !== "/home" && (like ? 
                        <FavoriteIcon color="action" fontSize="large" style={{ color: red[500] }} onClick={removeFromDB} /> : 
                        <FavoriteBorderIcon color="action" fontSize="large" style={{ color: red[500] }} onClick={addToDB} />)}
                    </Button>
                </CardActions>
            </Card>
            <Snackbar open={snackbarVars.open} autoHideDuration={6000} onClose={handleClose} >
                <Alert elevation={6} variant="filled" onClose={handleClose} severity={snackbarVars.severity} >{snackbarVars.message}</Alert>
            </Snackbar>
        </div> 
    );
}
