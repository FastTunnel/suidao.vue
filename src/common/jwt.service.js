const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  var token = window.localStorage.getItem(ID_TOKEN_KEY);
  console.log('token', token);
  return token;
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const destroyItem = (key) => {
  window.localStorage.removeItem(key);
};

export const getItem = (key) => {
  var item = window.localStorage.getItem(key);
  console.log('item', item);
  if (item && item.indexOf('{') > -1) {
    return JSON.parse(item);
  }
  return item;
};

export const saveItem = (key, value) => {
  if (value instanceof Object) {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(key, value);
};

export default { getToken, saveToken, destroyToken, destroyItem, getItem, saveItem };
