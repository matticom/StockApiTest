const moment = require('moment');

const thisHour = moment(1619845200000).utc();
const now = moment().utc();
console.log('now :>> ', now);
const nextHour = thisHour.clone().add(1, 'hour');
console.log('now1 :>> ', now.clone().startOf('week').toISOString());
console.log('now2 :>> ', now.clone().startOf('isoWeek').toISOString());
const timeDiff = nextHour.diff(now, 'seconds');

// console.log("thisHour :>> ", thisHour.toISOString());
// console.log("now :>> ", now.toISOString());
// console.log("timeDiff :>> ", timeDiff);

let cidrMask = [];
cidrMask['hallo'] = 255;
cidrMask[25] = 127;
cidrMask['126'] = 63;
cidrMask['27'] = 31;
cidrMask['28'] = 15;
cidrMask['29'] = 7;
cidrMask['30'] = 3;
cidrMask['31'] = 1;

console.log('cidrMask :>> ', cidrMask);
