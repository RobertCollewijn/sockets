/**
 * Created by Robert on 26-9-2016.
 */

var moment = require('moment')
var now = moment();
console.log(now.format());

console.log(now.format('X'))
console.log(now.valueOf())
var timestamp = 1474898127793;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('HH:mm'));


//moment.locale('nl');
now.subtract(1,'year');
console.log(now.format('DD-MM-YYYY HH:mm:ss'))



