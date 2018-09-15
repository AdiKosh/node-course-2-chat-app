// Jan 1st 1970 00:00:00

let moment = require("moment");

let date = moment();
date.add(100, "year").subtract(9, "months");

console.log(date.format("MMM Do, YYYY"));

let someTimestamp = moment().valueOf();

let date2 = moment(someTimestamp);
console.log(date2.format("h:mm a"));
