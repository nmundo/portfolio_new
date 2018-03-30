import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};

function Contact(props) {
    const { classes } = props;
    return (
        <div className="main-content">
            <Grid container justify="center">
                <Grid item xs={10} sm={6}>
                    Talk 2 me pls
                </Grid>
            </Grid>
        </div>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);