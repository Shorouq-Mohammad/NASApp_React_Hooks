import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "9%",
    ['@media (max-width:780px)']: { 
      marginBottom: "20%",
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{position: 'fixed'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/home" color="inherit">
                Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/search" color="inherit">
                Search
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/favorites" color="inherit">
                Favorites
            </Link>
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            >
                <img src="https://assets.stickpng.com/images/58429400a6515b1e0ad75acc.png" alt="logo" id="logo"/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
