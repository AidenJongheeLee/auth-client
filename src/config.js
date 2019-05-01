const configuration = {
  development: {
    API: 'https://localhost:8080',
  },
};

const config = configuration[process.env.REACT_APP_ENV || process.env.NODE_ENV];
window.config = config;
export default config;
