import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const EmailTextField = React.memo(({ email, password, onChange }) => {
  const [error, setError] = useState('');

  const validateEmail = (e) => {
    const { value } = e.target;
    if (!isEmail(value)) return setError('Email is not valid');
    return setError('');
  };
  return (
    <>
      <Grid item sm={12}>
        <TextField
          name="email"
          variant="outlined"
          value={email}
          onChange={onChange}
          fullWidth
          placeholder="Email"
          error={Boolean(error)}
          helperText={error}
          onBlur={validateEmail}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          placeholder="Password"
          name="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={onChange}
          fullWidth
        />
      </Grid>
    </>
  );
});

EmailTextField.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

EmailTextField.defaultProps = {
  email: '',
  password: '',
};

export default EmailTextField;
