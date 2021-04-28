/**
 * data2Set transform data to Set Object
 * @param {Any} data
 * @return {Set | Any} Set object or source data
 */
export const data2Set = (data) => {
  if (data instanceof Set) {
    return data;
  } else if (Array.isArray(data)) {
    return new Set(data);
  } else {
    return new Set().add(data);
  }
};

/**
 * transform params object to query string
 * @param {Object} params
 * @return { String } query string
 */
export const paramsToQueryString = (params) => {
  const queryArr = [];
  Object.entries(params).forEach(([k, v]) => {
    if (typeof v === "undefined") {
      return;
    }
    queryArr.push(`${k}=${encodeURIComponent(v)}`);
  });

  return queryArr.join("&");
};

/**
 *获取queryString
 *@method getQueryString
 *@param queryString {String}
 *@param searchString {String}
 *@return {String}
 */
export const getQueryString = (queryString, searchString) => {
  const p = new RegExp(`${queryString}=([^&=?]*)`);
  let result = "";

  const searchStr = searchString || window.location.search;

  const matches = searchStr.match(p);

  if (matches !== null) {
    result = decodeURIComponent(matches[1]);
  }

  return result;
};

export default {
  data2Set,
  paramsToQueryString,
  getQueryString,
};
