import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import isEmail from 'validator/lib/isEmail';

import TextField from '@material-ui/core/TextField';

const SignupTextField = React.memo(({
  field, onChange, value, error, setError,
}) => {
  const isValidEmail = (e) => {
    if (value) {
      setError({ ...error, [field]: '' });
    }
    if (field === 'Email') {
      if (!isEmail(e.target.value)) return setError({ ...error, Email: 'Email is not valid' });
      return setError({ ...error, Email: '' });
    }
    return null;
  };

  return (
    <TextField
      key={field}
      margin="normal"
      fullWidth
      label={capitalize(field)}
      name={field}
      variant="outlined"
      value={value}
      onChange={onChange}
      helperText={error[field]}
      error={Boolean(error[field])}
      type={field === 'Password' ? 'password' : 'text'}
      onBlur={isValidEmail}
    />
  );
});

SignupTextField.propTypes = {
  field: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.shape({}).isRequired,
  setError: PropTypes.func.isRequired,
};

SignupTextField.defaultProps = {
  value: '',
};

export default SignupTextField;
