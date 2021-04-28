import dayjs from "dayjs";
import { xssFilter } from "./safe";

/**
 * format datetime with dayjs
 * @param {Any} time
 * @param {String} format
 * @returns {String} time string formatted
 */
export const formatTime = (time, format = "YYYY-MM-DD HH:mm:ss") => {
  const temp = new Date(time);
  return temp.getTime() ? dayjs(temp).format(format) : "";
};

/**
 * format number with chinese number unit
 * @param {Number} num
 * @returns {String | Any} result formatted
 */
export const numberUnitFormat = (num, precision = 2) => {
  if (!num) {
    return num;
  } else if (num >= 100000000) {
    return (num / 100000000).toFixed(precision) + "亿";
  } else if (num >= 10000) {
    return (num / 10000).toFixed(precision) + "万";
  } else {
    return num;
  }
};

/**
 * format time diff string
 * @param {String | Number | Date} time
 * @returns {String} time diff formatted string
 */
export const formatTimeDiff = (time) => {
  const timeStamp = new Date(time).getTime();
  if (!timeStamp) {
    return "";
  }

  const diff = (Date.now() - timeStamp) / 1000;
  if (diff < 60) {
    return Math.round(diff) + "秒前";
  } else if (diff >= 60 && diff < 3600) {
    return Math.floor(diff / 60) + "分钟前";
  } else if (diff >= 3600 && diff < 3600 * 24) {
    return Math.floor(diff / 3600) + "小时前";
  } else {
    return Math.floor(diff / (3600 * 24)) + "天前";
  }
};

/**
 * get number sign
 * @param {Number | String} num
 * @returns {String | Number} signed number
 */
export const getSign = (num) => {
  return Number(num) > 0 ? `+${num}` : num;
};

/**
 * get number sign color
 * @param {Number | String} num
 * @returns {String} number sign color
 */
export const getSignColor = (num) => {
  const n = Number(num);

  if (n > 0) {
    return "color-red";
  } else if (n < 0) {
    return "color-green";
  } else {
    return "color-gray";
  }
};

/**
 * highlight text with keywords
 * @param {String} source source content to highlight
 * @param {Array} highlights highlight keywords
 * @returns {String | Any} string with highlight keyword
 */
export const highlightText = (source, highlights = []) => {
  if (!source) {
    return source;
  }

  let result = xssFilter(source);

  if (highlights) {
    if (!Array.isArray(highlights)) {
      highlights = [highlights];
    }

    highlights.forEach((key) => {
      const reg = new RegExp(key, "g");
      result = result.replace(reg, `<span class="highlight">${key}</span>`);
    });
  }

  return result;
};

/**
 * Thousands Separator Formatter
 * @param {Number | String} number
 * @return { String } formatted number string
 */
export const thousandsSeparatorFormat = (number) => {
  const num = parseFloat(number);
  if (typeof Number.prototype.toLocaleString === "function") {
    return num.toLocaleString();
  }

  let result = num ? "" : String(num);

  if (num) {
    const reverseString = (str) => str.split("").reverse().join("");
    const arr = String(Math.abs(num)).split(".");
    arr[0] = reverseString(arr[0]);
    arr[0] = arr[0].replace(/(\d{3})/g, "$1,").replace(/,$/, "");
    arr[0] = reverseString(arr[0]);
    result = arr.join(".");
  }
  return num < 0 ? `-${result}` : result;
};

export default {
  formatTime,
  formatTimeDiff,
  getSign,
  getSignColor,
  highlightText,
  numberUnitFormat,
  thousandsSeparatorFormat,
};
