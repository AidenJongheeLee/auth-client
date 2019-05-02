import React, { useEffect, Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const VerifyMessage = React.memo(({ setSnackbar, message, history }) => {
  const handleRedirect = useCallback(() => {
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }, [history]);
  useEffect(() => {
    setSnackbar({ open: true, message });
    handleRedirect();
  }, [message, setSnackbar, handleRedirect]);

  return <Fragment />;
});

VerifyMessage.propTypes = {
  setSnackbar: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(VerifyMessage);
