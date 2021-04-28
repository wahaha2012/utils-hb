/**
 * xss filter
 * @param {String} source source content
 * @returns {String} html safe content
 */
export const xssFilter = (source) => {
  return source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export default {
  xssFilter,
};
