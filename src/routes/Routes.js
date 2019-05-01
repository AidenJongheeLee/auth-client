import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import MainContainer from '../container/MainContainer';
import AuthContainer from '../container/AuthContainer';
import LoginContainer from '../container/login';
import SingupContainer from '../container/signup';
import VerifyEmail from '../container/verifyEmail';
import ResetPassword from '../container/resetPassword';
import Dashboard from '../container/dashboard';

const Routes = (
  <Route
    render={() => (
      <App>
        <MainContainer>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SingupContainer} />
            <Route path="/verify" component={VerifyEmail} />
            <Route path="/reset" component={ResetPassword} />
            <AuthContainer>
              <Route path="/profile" component={Dashboard} />
            </AuthContainer>

            <Redirect from="*" to="/login" />
          </Switch>
        </MainContainer>
      </App>
    )}
  />
);

export default Routes;
