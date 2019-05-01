import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

import { SnackbarContext } from '../App';

const MainContainer = ({ classes, children }) => {
  const handleCloseSnackbar = setSnackbar => () => {
    setSnackbar({ open: false, message: '' });
  };

  return (
    <>
      <Grid container className={classes.grid}>
        {children}
      </Grid>
      <SnackbarContext.Consumer>
        {({ snackbar, setSnackbar }) => (
          <Snackbar
            open={snackbar.open}
            message={snackbar.message}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar(setSnackbar)}
          />
        )}
      </SnackbarContext.Consumer>
    </>
  );
};

MainContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
};

const styles = {
  grid: {
    margin: 'auto',
    width: '50%',
    marginTop: 100,
  },
  paper: {
    padding: 16,
  },
};

export default withStyles(styles)(MainContainer);
