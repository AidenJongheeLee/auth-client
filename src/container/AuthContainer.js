import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import axios from 'axios';
import { withRouter } from 'react-router';

import config from '../config';

export const UserContext = React.createContext();

const AuthContainer = React.memo(({ children, history }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const getUser = async (token) => {
    try {
      const response = await axios.get(`${config.API}/me`, { params: { token } });
      const { data } = response;
      const {
        Email, FirstName, LastName, CreatedDate, Uid,
      } = data;
      setUser({
        Email,
        FirstName,
        LastName,
        CreatedDate,
        Uid,
      });
      setAuth(true);
    } catch (err) {
      history.push('/login');
    }
  };

  useEffect(() => {
    const token = Cookie.get('auth_token');
    if (token) {
      getUser(token);
    } else {
      setAuth(false);
      history.push('/login');
    }
  }, [auth]);

  return (
    <>{auth && <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>}</>
  );
});

AuthContainer.propTypes = {
  children: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(AuthContainer);
