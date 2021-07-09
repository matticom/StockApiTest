const moment = require("moment");

const thisHour = moment(1619845200000).utc();
const now = moment().utc();
const nextHour = thisHour.clone().add(1, "hour");
console.log(
   "now1 :>> ",
   now.clone().startOf("week").toISOString()
);
console.log(
   "now2 :>> ",
   now.clone().startOf("isoWeek").toISOString()
);
const timeDiff = nextHour.diff(now, "seconds");

// console.log("thisHour :>> ", thisHour.toISOString());
// console.log("now :>> ", now.toISOString());
// console.log("timeDiff :>> ", timeDiff);
