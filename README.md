# utils-hb
utils collection for projects

## Usage

### Install
```bash
npm install utils-hb
# or
yarn add utils-hb
```

### Import Module
```js
// import all utils
import utils from "utils-hb";

utils.format.getSign(1); // return "+1"

// import single module
import { format } from "utils-hb";
format.getSign(1); // return "+1"

// import ES6 source module
import format from "utils-hb/format";

// import single method from ES6 source module
import { getSign } from "utils-hb/format";
getSign(1); // return "+1"

// import UMD module
import format from "utils-hb/dist/format";
```

### - format
> formatTimeDiff(dateTime)
* @method formatTimeDiff
* @param dateTime {String | Number | Date}
* @return {String}
```js
format.formatTimeDiff(Date.now() - 2000); // return "2秒前"
format.formatTimeDiff(Date.now() - 2000 * 60); // return "2分钟前"
format.formatTimeDiff(Date.now() - 2000 * 60 * 60); // return "2小时前"
format.formatTimeDiff(Date.now() - 2000 * 60 * 60 * 24); // return "2天前"
```
> getSign(number)
* @method getSign
* @param number {String | Number}
* @return {String | Number}
```js
format.getSign(1); // return "+1"
format.getSign(0); // return 0
format.getSign(-1); // return -1
```

> getSignColor(number)
* @method getSignColor
* @param number {String | Number}
* @return {String}
```js
format.getSignColor(1); // return "color-red"
format.getSign(0); // return "color-gray"
format.getSign(-1); // return "color-green"
```
  
> highlightText(source, keywords = [])
* @method highlightText
* @param source {String | Number}
* @param keywords {String | Array}
* @return {String}
```js
format.highlightText("Good Boy", "Boy"); // return 'Good <span class="highlight">Boy</span>'
```

> numberUnitFormat(num, precision = 2)
* @method numberUnitFormat
* @param num {Number}
* @param precision {Integer}
* @return {String}
```js
format.numberUnitFormat(100000); // return "10.00万";
format.numberUnitFormat(100000000); // return "1.00亿";
```
> thousandsSeparatorFormat(number)
* @method thousandsSeparatorFormat
* @param number {Number}
* @return {String} 
```js
format.thousandsSeparatorFormat(-1234567.89); // return "-1,234,567.89";
```

### - queue
> debounce(func, wait, immediate)
* @method debounce
* @param {Function} func
* @param {Integer} wait debounce wait time in milliseconds
* @param {Boolean} immediate
* @returns {Function} new Function
```js
queue.debounce(() => {}, 300);
```

### - safe
> xssFilter(source)
* @method xssFilter
* @param {String} source source content
* @returns {String} html safe content
```js
safe.xssFilter("<script></script>"); // return "&lt;script&gt;&lt;/script&gt;"
```

### - transform
> data2Set(data)
* @method data2Set
* @param {Any} data
* @return {Set | Any} Set object or source data\
```js
transform.data2Set(1); // Set(1) {1}
transform.data2Set([1,2,3]); // Set(3) {1,2,3}
```

> getQueryString(queryString, searchString)
* @method getQueryString
* @param queryString {String}
* @param searchString {String}
* @return {String}
```js
transform.getQueryString("a", "url?a=1&c=2"); // return "1"
```