/**
 * xss filter
 * @param {String} source source content
 * @returns {String} html safe content
 */
export const xssFilter = (source) => {
  return source
    .replace(/<script.*?>/g, "&lt;script&gt;")
    .replace(/<\/.*?script>/g, "&lt;/script&gt;");
};

export default {
  xssFilter,
};
