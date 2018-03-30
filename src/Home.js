import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import profile_image from './profile.jpg';
import github_logo from './img/GitHub-Mark-120px-plus.svg';
import linkedin_logo from './img/LinkedIn-logo.ico';
import Avatar from 'material-ui/Avatar';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    profile: {
        width: 300,
        height: 300,
    },
};

function Home(props) {
    const { classes } = props;
    return (
        <div className="main-content">
            <Grid container justify="center" alignItems="center" style={{height: "100%"}}>
                <Grid item xs={10} sm={3}>
                    <Avatar alt="Picture of Nathan" src={profile_image} className={classes.profile} />
                </Grid>
                <Grid item xs={10} sm={4}>
                    <Typography variant="display3" color="secondary" style={{textAlign: "center"}} gutterBottom>
                        NATHAN MUNDO
                    </Typography>
                    <Typography variant="headline" gutterBottom style={{textAlign: "center"}}>
                        Charlotte based Front End Developer looking to make the world a better place one web app at a time.
                    </Typography>
                    <Grid container justify="center">
                        <Grid item>
                            <a href="https://github.com/nmundo">
                                <img src={github_logo} className="social-icon"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.linkedin.com/in/hmundo/">
                                <img src={linkedin_logo} className="social-icon"/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);