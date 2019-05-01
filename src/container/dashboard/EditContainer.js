import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import Cookie from 'js-cookie';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import config from '../../config';
import SignupTextField from '../signup/SignupTextField';

const fields = ['FirstName', 'LastName', 'Email', 'Password'];

const EditContainer = ({
  firstName, email, lastName, classes, cancel, uid, updateCurrent,
}) => {
  const [user, updateUser] = useState({
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Password: '',
    uid,
  });
  const [error, setError] = useState({});

  const handleChange = e => updateUser({ ...user, [e.target.name]: e.target.value });

  const handleValideInputs = () => {
    const validate = {};
    const valideField = user.password
      ? Object.keys(user)
      : Object.keys(user).filter(field => field !== 'Password');
    valideField.forEach((field) => {
      if (!user[field]) validate[field] = 'Field is required';
    });
    if (!isEmail(user.Email)) validate.Email = 'Email is not valid';
    setError(validate);
    return Object.values(validate).length === 0;
  };

  const handleSave = async () => {
    if (!handleValideInputs()) return;
    try {
      const token = Cookie.get('auth_token');
      const userData = { ...user, Email: [{ Type: 'Primary', Value: user.Email }] };
      const response = await axios.put(`${config.API}/me/update`, userData, { params: { token } });
      const { data } = response;
      updateCurrent({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Uid: data.Uid,
        CreatedDate: data.CreatedDate,
      });

      cancel();
    } catch (err) {
      const { data } = err.response;

      setError({ ...error, system: data.Description });
    }
  };

  return (
    <>
      <Typography variant="h3">Edit Profile</Typography>
      {fields.map(field => (
        <SignupTextField
          key={field}
          field={field}
          value={user[field]}
          onChange={handleChange}
          error={error}
          setError={setError}
        />
      ))}
      {error.system && (
        <Typography gutterBottom color="secondary">
          {error.system}
        </Typography>
      )}
      <div className={classes.buttonContainer}>
        <Button onClick={cancel}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </>
  );
};

EditContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  cancel: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
  updateCurrent: PropTypes.func.isRequired,
};

EditContainer.defaultProps = {
  email: '',
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default withStyles(styles)(EditContainer);
