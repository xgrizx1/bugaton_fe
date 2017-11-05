import baseConfig from './base';

const config = {
  appEnv: 'dist',
  apiUrl: 'https://salty-ridge-53939.herokuapp.com/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
