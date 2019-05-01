import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import config from '../../config';
import SocialLogin from './SocialLogin';
import EmailLogin from './EmailLogin';
import Header from './Header';

const providers = ['google', 'facebook', 'twitter'];
const socket = io(config.API);

const LoginContainer = ({ classes }) => (
  <Grid item sm={12}>
    <Header />
    <Paper className={classes.paper}>
      <EmailLogin />

      {providers.map(provider => (
        <SocialLogin key={provider} provider={provider} socket={socket} />
      ))}
    </Paper>
  </Grid>
);

LoginContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const styles = {
  paper: {
    padding: 16,
  },
};

export default withStyles(styles)(LoginContainer);
