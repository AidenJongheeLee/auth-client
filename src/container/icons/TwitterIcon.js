import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

const GoogleIcon = props => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
      <path
        d="M42 12.43a14.946 14.946 0 0 1-4.246 1.16 7.39 7.39 0 0 0 3.25-4.059 14.805 14.805 0 0 1-4.691 1.778A7.376 7.376 0 0 0 30.925 9c-4.078 0-7.387 3.277-7.387 7.32 0 .57.066 1.13.191 1.668a21.027 21.027 0 0 1-15.222-7.652 7.3 7.3 0 0 0 2.285 9.781 7.496 7.496 0 0 1-3.348-.914v.086c0 3.55 2.547 6.508 5.922 7.184a7.393 7.393 0 0 1-1.941.261c-.477 0-.942-.054-1.39-.136.937 2.902 3.663 5.023 6.898 5.086a14.936 14.936 0 0 1-10.938 3.03A21.125 21.125 0 0 0 17.32 38c13.586 0 21.02-11.156 21.02-20.836 0-.316-.012-.633-.028-.941A14.614 14.614 0 0 0 42 12.43"
        fill="#03a9f4"
      />
    </svg>
  </SvgIcon>
);

GoogleIcon.propTypes = {};

export default GoogleIcon;