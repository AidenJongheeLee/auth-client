import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router';

import IconButton from '@material-ui/core/IconButton';

import config from '../../config';
import { GoogleIcon, FacebookIcon, TwitterIcon } from '../icons';

let popup;
const SocialLogin = ({ provider, socket, history }) => {
  useEffect(() => {
    socket.on(provider, (user) => {
      Cookie.set('auth_token', user.access_token);
      popup.close();
      history.push('/profile');
    });
  });

  const checkPopup = () => {
    const check = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
      }
    }, 1000);
  };

  const openPopup = () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${config.API}/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`,
    );
  };

  const startAuth = () => {
    popup = openPopup();
    checkPopup();
  };

  return (
    <>
      <IconButton onClick={startAuth}>
        {(() => {
          switch (provider) {
            case 'google':
              return <GoogleIcon />;
            case 'facebook':
              return <FacebookIcon />;
            case 'twitter':
              return <TwitterIcon />;
            default:
              return null;
          }
        })()}
      </IconButton>
    </>
  );
};

SocialLogin.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(SocialLogin);
