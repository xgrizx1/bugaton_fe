import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyArfkN7ZVo4-ojP0MJasifCR6u4NtoXJ1A',
  authDomain: 'test-cdf02.firebaseapp.com',
  databaseURL: 'https://test-cdf02.firebaseio.com'
};

firebase.initializeApp(config);

export default firebase;
