
const setCookie = (value) => {
  const inFifteenMinutes = new Date(Date.now() + (15 * 60 * 1000));
  const expires = inFifteenMinutes.toUTCString();
  document.cookie = `token=${value}; expires=${expires}`;
};

export default setCookie;