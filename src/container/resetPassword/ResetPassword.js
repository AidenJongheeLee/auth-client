import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import config from '../../config';

const ResetPassword = React.memo(({ classes, history }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const token = window.location.search
    .substring(1)
    .split('&')[1]
    .split('=')[1];

  const handleResetPassword = async () => {
    try {
      await axios.put(`${config.API}/password/reset`, { password, token });
      history.push('/login');
    } catch (err) {
      const { data } = err.response;
      setError(data.Description);
    }
  };

  const handleChangePwd = e => setPassword(e.target.value);

  return (
    <Paper className={classes.paper}>
      <Typography gutterBottom variant="h3">
        Reset password
      </Typography>

      <TextField
        label="password"
        fullWidth
        value={password}
        onChange={handleChangePwd}
        variant="outlined"
        margin="normal"
        error={Boolean(error)}
        helperText={error}
      />

      <Button color="primary" variant="contained" onClick={handleResetPassword}>
        Save
      </Button>
    </Paper>
  );
});

ResetPassword.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const styles = {
  paper: {
    padding: 16,
    width: '100%',
  },
};

export default withStyles(styles)(withRouter(ResetPassword));
