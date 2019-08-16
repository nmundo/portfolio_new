import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import html_logo from './img/html.png';
import react_logo from './img/react.png';
import python_logo from './img/python.png';
import css_logo from './img/css.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};

function About(props) {
    const { classes } = props;
    return (
        <div className="main-content">
            <Grid container alignItems="center" style={{height: "100%"}} spacing={0}>
                <Grid container justify="center" spacing={0}>
                    <Grid item xs={10} sm={2}>
                        <Typography variant="display1" color="secondary" gutterBottom>
                            ABOUT ME
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={6}>
                        <Typography variant="headline" gutterBottom>
                            Full stack developer. Mainly working with React and Oracle PL/SQL. Like to play with Python. Over 5 years of experience as a developer.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={0}>
                    <Grid item xs={10} sm={2}>
                        <Typography variant="display1" color="secondary" gutterBottom>
                            SKILLS
                        </Typography>
                    </Grid>
                    <Grid container xs={10} sm={6}>
                        <Grid item xs={4}>
                            <Typography variant='headline'>HTML</Typography>
                            <Typography variant='headline'>CSS</Typography>
                            <Typography variant='headline'>JavaScript</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='headline'>React</Typography>
                            <Typography variant='headline'>Node</Typography>
                            <Typography variant='headline'>Flask</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='headline'>Oracle SQL</Typography>
                            <Typography variant='headline'>PL/SQL</Typography>
                            <Typography variant='headline'>Python</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);