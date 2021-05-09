export const CART_STATE_LOCAL_STORAGE_KEY = "CART_STATE";

const safelyStringifyJson = (data) => {
  try {
    return JSON.stringify(data);
  } catch (e) {
    console.error(e);
  }

  return JSON.stringify({});
};

const safelyParseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(e);
  }

  return {};
};

export const readFromLocalStorage = (key) => {
  try {
    const jsonData = localStorage.getItem(key);
    return safelyParseJson(jsonData);
  } catch (e) {
    console.error(e);
  }

  return {};
};

export const writeToLocalStorage = (key, objValue) => {
  try {
    const jsonData = safelyStringifyJson(objValue);
    localStorage.setItem(key, jsonData);
  } catch (e) {
    console.error(e);
  }
};
