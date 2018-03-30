import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ProjectCard from './ProjectCard';

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
            <Grid container justify="center" style={{height: "100%"}}>
                <Grid item xs={10} sm={3}>
                    <Typography variant="display1" color="secondary" gutterBottom>
                        Blah blah blah
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Grid container>
                        <Grid item xs={10} sm={3} md={2}>
                            <ProjectCard/>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2}>
                            <ProjectCard/>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2}>
                            <ProjectCard/>
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