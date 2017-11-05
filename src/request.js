/**
 * Created by aleksandarogrizovic on 3/13/17.
 */
require('whatwg-fetch');

const config = require('config');

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.text().then(text => (text ? JSON.parse(text) : {}));
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({data}));
  // .catch((error) => ({ error }));
}

export function postRequest(url, body) {
  const fullUrl = config.default.apiUrl + url;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return request(fullUrl, options);
}

export function getRequest(url) {
  const fullUrl = config.default.apiUrl + url;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return request(fullUrl, options);
}
