import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

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
            <Grid container alignItems="center" style={{height: "100%"}}>
                <Grid container justify="center">
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
                <Grid container justify="center">
                    <Grid item xs={10} sm={2}>
                        <Typography variant="display1" color="secondary" gutterBottom>
                            SKILLS
                        </Typography>
                    </Grid>
                    <Grid container xs={10} sm={6}>
                        <Grid item>
                            <ul className="skills">
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </Grid>
                        <Grid item>
                            <ul className="skills">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Native</li>
                            </ul>
                        </Grid>
                        <Grid item>
                            <ul className="skills">
                                <li>Python</li>
                            </ul>
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