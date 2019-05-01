import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

import ProfileInfo from './ProfileInfo';

const ProfileContainer = React.memo(({
  classes, name, email, created, logout, onClick,
}) => (
  <>
    <Typography className={classes.header} variant="h3" gutterBottom>
      {`Hello ${name}`}
    </Typography>
    <IconButton color="primary" className={classes.iconBtn} onClick={onClick}>
      <Edit />
    </IconButton>
    <ProfileInfo name={name} email={email} created={moment(created).format('YYYY-MM-DD')} />
    <Button color="secondary" onClick={logout}>
      log out
    </Button>
  </>
));

ProfileContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  created: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

ProfileContainer.defaultProps = {
  email: 'N/A',
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

export default withStyles(styles)(ProfileContainer);
