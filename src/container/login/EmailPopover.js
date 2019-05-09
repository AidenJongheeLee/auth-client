import React from 'react';
import PropTypes from 'prop-types';

import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const EmailPopover = React.memo(({
  anchorEl, onClose, classes, email, onChange, onClick,
}) => (
  <Popover
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
    classes={{
      paper: classes.popover,
    }}
  >
    <TextField label="Email" value={email} onChange={onChange} variant="outlined" />
    <Button color="primary" onClick={onClick}>
      Send
    </Button>
  </Popover>
));

EmailPopover.propTypes = {
  anchorEl: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  email: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

EmailPopover.defaultProps = {
  anchorEl: null,
  email: '',
};

const styles = {
  popover: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
  },
};

export default withStyles(styles)(EmailPopover);
