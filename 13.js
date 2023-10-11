//import { a }form "./12.js";
//import { text }form "./12.js";

/*模組:
1.要在瀏覽器中運行，我們需先在 HTML 加上模組類型

<script type="module">
  // import要匯入的檔案
</script>
2.在12.js的第2行具名匯出一個變數,13.js使用import匯入變數,之後印出結果
*/
import { a,text } from"./12.js";

console.log(a)
console.log(text)

import asdfqer from "./12.js"; //asdfqer為變數,可更改
console.log(asdfqer)