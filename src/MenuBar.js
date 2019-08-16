import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 0,
    },
    flex: {
        flex: 1,
    },
};

function MenuBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" style={{boxShadow: "none"}}>
                <Toolbar style={{justifyContent: "center"}}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);