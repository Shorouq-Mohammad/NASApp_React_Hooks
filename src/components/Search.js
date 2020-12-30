import React, {useState} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import MediaCard from './MediaCard';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button:{
      margin: theme.spacing(1),
  },
  search: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gridGap: theme.spacing(1),
  },
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

export default function Search(){
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleClick = async() => {
        let results = await axios.get(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
        results = results.data.collection.items.map(i => {
            return {title: i.data[0].title,
                    url: i.links[0].href,
                    explanation: i.data[0].description
                    }
        })
        setSearchResults(results)
    }

    return (
        <div>
            <div className={classes.search}>
                <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    label="TextField"
                    value={searchInput}
                    onChange={(event)=>setSearchInput(event.target.value)}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start"><SearchIcon /></InputAdornment>
                    )}}/>
                <Button variant="contained" color="primary"  onClick={handleClick} className={classes.button}>
                Search
                </Button>
            </div>
            <div className={classes.gridCard}>
                {searchResults.map((r, i)=> <MediaCard info={r} key={i} />)}
            </div>
        </div>
    )

}