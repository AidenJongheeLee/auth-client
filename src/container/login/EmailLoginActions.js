import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { SnackbarContext } from '../../App';
import EmailPopover from './EmailPopover';

const EmailLoginActions = React.memo(({ login, forgotPwd, history }) => {
  const { setSnackbar } = useContext(SnackbarContext);
  const [reset, setReset] = useState({
    anchorEl: null,
    email: '',
  });

  const handleOpenPopover = e => setReset({ ...reset, anchorEl: e.currentTarget });
  const handleClosePopover = () => setReset({ anchorEl: null, email: '' });
  const handleSendReset = () => {
    forgotPwd(setSnackbar, reset.email);
    handleClosePopover();
  };

  const handleChangeEmail = e => setReset({ ...reset, email: e.target.value });
  const toggleSignup = () => history.push('/signup');
  return (
    <>
      <Grid item sm={12}>
        <Button color="primary" variant="contained" fullWidth onClick={login(setSnackbar)}>
          Login
        </Button>
      </Grid>
      <Grid item sm={6}>
        <Button onClick={toggleSignup}>Sign up</Button>
      </Grid>
      <Grid item sm={6}>
        <Button color="primary" onClick={handleOpenPopover}>
          Forgot password?
        </Button>
      </Grid>

      <EmailPopover
        anchorEl={reset.anchorEl}
        email={reset.email}
        onChange={handleChangeEmail}
        onClose={handleClosePopover}
        onClick={handleSendReset}
        setSnackbar={setSnackbar}
      />
    </>
  );
});

EmailLoginActions.propTypes = {
  login: PropTypes.func.isRequired,
  forgotPwd: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(EmailLoginActions);
