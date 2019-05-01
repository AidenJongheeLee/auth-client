import React, { useEffect, useState } from 'react';
import axios from 'axios';

import config from '../../config';
import { SnackbarContext } from '../../App';
import VerifyMessage from './VerifyMessage';

const VerifyEmail = React.memo(() => {
  const [message, setMessage] = useState('');
  const verifyEmail = async (token) => {
    if (!token) {
      return setMessage('Email token is not valid');
    }
    try {
      await axios.get(`${config.API}/email/verify`, { params: { token } });
      return setMessage('Verified Email');
    } catch (error) {
      return setMessage(error.response.data.Message);
    }
  };
  useEffect(() => {
    const token = window.location.search
      .substring(1)
      .split('&')[1]
      .split('=')[1];
    verifyEmail(token);
  }, []);

  return (
    <SnackbarContext.Consumer>
      {({ setSnackbar }) => <VerifyMessage setSnackbar={setSnackbar} message={message} />}
    </SnackbarContext.Consumer>
  );
});

VerifyEmail.propTypes = {};

export default VerifyEmail;
