import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router';
import isEmpty from 'lodash/isEmpty';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { UserContext } from '../AuthContainer';
import ProfileContainer from './ProfileContainer';
import EditContainer from './EditContainer';

const Dashboard = React.memo(({ classes, history }) => {
  const { user, setUser } = useContext(UserContext);

  const [openEdit, setOpen] = useState(false);
  const handleLogOut = () => {
    Cookie.set('auth_token', '');
    history.push('/login');
  };

  const toggleButton = useCallback(() => {
    setOpen(!openEdit);
  }, [openEdit]);

  const name = `${user.FirstName} ${user.LastName}`;
  const email = !isEmpty(user.Email) ? user.Email[0].Value : undefined;

  return (
    <Paper className={classes.paper}>
      {!openEdit ? (
        <ProfileContainer
          name={name}
          email={email}
          created={user.CreatedDate}
          logout={handleLogOut}
          onClick={toggleButton}
        />
      ) : (
        <EditContainer
          uid={user.Uid}
          firstName={user.FirstName}
          lastName={user.LastName}
          email={email}
          cancel={toggleButton}
          updateCurrent={setUser}
        />
      )}
    </Paper>
  );
});

Dashboard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const styles = {
  paper: {
    width: '100%',
    padding: 24,
  },
  header: {
    textAlign: 'center',
  },
  iconBtn: {
    float: 'right',
  },
};

export default withStyles(styles)(withRouter(Dashboard));
