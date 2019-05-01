import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SnackbarContext = React.createContext();

const App = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });

  return (
    <>
      <SnackbarContext.Provider
        value={{
          snackbar,
          setSnackbar,
        }}
      >
        {children}
      </SnackbarContext.Provider>
    </>
  );
};

App.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default App;
