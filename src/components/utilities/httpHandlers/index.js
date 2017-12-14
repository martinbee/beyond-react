import axios from 'axios';

// Add to config file or constants
const BASE_URL = 'http://localhost:3000';

function get(dataUrl, successCallback, errorCallback) {
  axios.get(BASE_URL + dataUrl)
    .then(successCallback)
    .catch(errorCallback);
}

function post(dataUrl, successCallback, errorCallback) {
  // do post
}

export {
  get,
  post,
};
