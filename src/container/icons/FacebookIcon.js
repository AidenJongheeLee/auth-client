import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

const GoogleIcon = props => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
      <path
        d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5z"
        fill="#3f51b5"
      />
      <path
        d="M34.367 25H31v13h-5V25h-3v-4h3v-2.41c.004-3.508 1.46-5.59 5.594-5.59H35v4h-2.285c-1.61 0-1.715.602-1.715 1.723V21h4z"
        fill="#fff"
      />
    </svg>
  </SvgIcon>
);

GoogleIcon.propTypes = {};

export default GoogleIcon;
