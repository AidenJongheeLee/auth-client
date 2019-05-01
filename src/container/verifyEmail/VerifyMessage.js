import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const VerifyMessage = React.memo(({ setSnackbar, message, history }) => {
  const handleRedirect = () => {
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  };
  useEffect(() => {
    setSnackbar({ open: true, message });
    handleRedirect();
  }, [message]);

  return <Fragment />;
});

VerifyMessage.propTypes = {
  setSnackbar: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(VerifyMessage);
