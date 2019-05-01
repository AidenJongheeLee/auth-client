import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import SingupTextField from './SignupTextField';
import config from '../../config';

const fields = ['FirstName', 'LastName', 'Email', 'Password'];

const SingupContainer = React.memo(({ classes, history }) => {
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  });
  const [error, setError] = useState({});

  const handleChangeField = e => setUser({ ...user, [e.target.name]: e.target.value });
  const handleGoBack = () => history.push('/login');
  const handleValideInputs = () => {
    const validate = {};
    Object.keys(user).forEach((field) => {
      if (!user[field]) validate[field] = 'Field is required';
    });
    if (!isEmail(user.Email)) validate.Email = 'Email is not valid';
    setError(validate);
    return Object.values(validate).length === 0;
  };

  const handleSignup = async () => {
    if (!handleValideInputs()) return;
    const data = {
      ...user,
      Email: [{ Type: 'Primary', Value: user.Email }],
    };
    await axios.post(`${config.API}/email/signup`, data);
    history.push('/login');
  };

  return (
    <>
      <Typography variant="h2" className={classes.header} gutterBottom>
        Sign up
      </Typography>
      <Paper className={classes.paper}>
        {fields.map(field => (
          <SingupTextField
            key={field}
            field={field}
            value={user[field]}
            onChange={handleChangeField}
            error={error}
            setError={setError}
          />
        ))}

        <div className={classes.buttonContainer}>
          <Button variant="outlined" onClick={handleGoBack}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSignup}>
            Sign up
          </Button>
        </div>
      </Paper>
    </>
  );
});

SingupContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const styles = {
  paper: {
    padding: 16,
  },
  header: {
    textAlign: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 8,
  },
};

export default withStyles(styles)(withRouter(SingupContainer));
