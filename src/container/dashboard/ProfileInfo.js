import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const fields = ['name', 'email', 'created'];

const ProfileInfo = React.memo(({ classes, ...props }) => (
  <>
    {fields.map(field => (
      <Fragment key={field}>
        <Typography variant="h5" className={classes.label}>
          {field}
        </Typography>
        <Typography variant="h6">{props[field]}</Typography>
      </Fragment>
    ))}
  </>
));

ProfileInfo.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  created: PropTypes.string.isRequired,
};

ProfileInfo.defaultProps = {
  email: 'N/A',
};

const styles = {
  label: {
    textTransform: 'capitalize',
  },
};

export default withStyles(styles)(ProfileInfo);
