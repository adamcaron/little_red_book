/* Vow Work */
const numberOfSessionsPerDay = 6
const vows = require('./vows.json')

const moment = require('moment')
const thisHour = moment().hour()

if ( moment(thisHour).isBetween(6,8,null,'[)') ) {
  console.log(vows['01'])
}
else if ( moment(thisHour).isBetween(8,10,null,'[)') ) {
  console.log(vows['02'])
}
else if ( moment(thisHour).isBetween(10,12,null,'[)') ) {
  console.log(vows['03'])
}
else if ( moment(thisHour).isBetween(12,15,null,'[)') ) {
  console.log(vows['04'])
}
else if ( moment(thisHour).isBetween(15,17,null,'[)') ) {
  console.log(vows['05'])
}
else if ( moment(thisHour).isBetween(17,19,null,'[)') ) {
  console.log(vows['06'])
}