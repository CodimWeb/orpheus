const compileUrl = (base, params) => {
  const keys = Object.keys(params)
    .filter((k) => params[k] !== null && typeof params[k] !== 'undefined');
  const query = keys.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return `${base}?${query}`;
};

export default compileUrl;
