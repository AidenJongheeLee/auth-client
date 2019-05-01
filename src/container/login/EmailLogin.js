import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';

import config from '../../config';
import EmailTextField from './EmailTextField';
import EmailLoginActions from './EmailLoginActions';

const EmailLogin = ({ history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleLogin = setSnackbar => async () => {
    if (!user.email || !user.password || !isEmail(user.email)) return;
    try {
      const response = await axios.post(`${config.API}/email`, user);
      const { data } = response;
      Cookie.set('auth_token', data.access_token);
      history.push('/profile');
    } catch (err) {
      const { data } = err.response;
      setUser({ email: '', password: '' });
      setSnackbar({ open: true, message: data.Message });
    }
  };

  const handleForgotPwd = async (setSnackbar, email) => {
    try {
      await axios.post(`${config.API}/email/reset`, { email });
      setSnackbar({ open: true, message: `Email sent to ${email}` });
    } catch (err) {
      const { data } = err.response;
      setSnackbar({ open: true, message: data.Message });
    }
  };

  return (
    <Grid container spacing={16}>
      <EmailTextField email={user.email} password={user.password} onChange={handleChange} />

      <EmailLoginActions login={handleLogin} forgotPwd={handleForgotPwd} />
    </Grid>
  );
};

EmailLogin.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(EmailLogin);
