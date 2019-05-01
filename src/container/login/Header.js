import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Header = ({ classes }) => (
  <Typography className={classes.header} variant="h2" gutterBottom>
    Welcome
  </Typography>
);

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const styles = {
  header: {
    textAlign: 'center',
  },
};

export default withStyles(styles)(Header);
