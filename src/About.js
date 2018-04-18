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
import javascript_logo from './img/javascript.png';

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
                            Almost 3 years of experience working with web technologies in corporate environments;
                            a lifetime of experience working with web technologies elsewhere.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={0}>
                    <Grid item xs={10} sm={2}>
                        <Typography variant="display1" color="secondary" gutterBottom>
                            SKILLS
                        </Typography>
                    </Grid>
                    <Grid container xs={10} sm={6} justify="center">
                        <Grid item>
                            <img src={html_logo} className="skill-icon"/>
                        </Grid>
                        <Grid item>
                            <img src={css_logo} className="skill-icon"/>
                        </Grid>
                        <Grid item>
                            <img src={javascript_logo} className="skill-icon"/>
                        </Grid>
                        <Grid item>
                            <img src={react_logo} className="skill-icon"/>
                        </Grid>
                        <Grid item>
                            <img src={python_logo} className="skill-icon"/>
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