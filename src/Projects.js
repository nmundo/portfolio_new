import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ProjectCard from './ProjectCard';
import construction_icon from './img/GitHub-Mark-120px-plus.svg';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};

function Projects(props) {
    const { classes } = props;
    return (
        <div className="main-content">
            <Grid container justify="center" alignItems="center" style={{height: "100%"}} spacing={0}>
                <Grid item xs={10} sm={4}>
                    <Typography variant="headline" gutterBottom style={{textAlign: "center"}}>
                        Working on it
                    </Typography>
                    <Grid container justify="center">
                        <Grid item>
                            <a href="https://github.com/nmundo">
                                <img src={construction_icon} className="social-icon"/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);