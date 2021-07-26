import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
 const Menu = () => {
    const classes = useStyles();
   
    return (
          <Typography className={classes.root}>
            <Link to="/" >
              Home
            </Link>
            <Link to="/about-us"  color="inherit">
              About Us
            </Link>
            <Link to="/about-us/history"  color="inherit">
              History
            </Link>
            <Link to="/contact-us"  variant="body2">
              Contact Us
            </Link>
            <Redirect to="/"></Redirect>
          </Typography>
        );
   
}
export default Menu;