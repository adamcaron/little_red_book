
/* Vow Work */
const numberOfSessionsPerDay = 6
<<<<<<< HEAD
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
=======
const rotation = require('./rotation')
const sessions = [
  {
    startTime: 6,
    endTime: 8
  },
  {
    startTime: 8,
    endTime: 10
  },
  {
    startTime: 10,
    endTime: 12
  },
  {
    startTime: 12,
    endTime: 15
  },
  {
    startTime: 15,
    endTime: 17
  },
  {
    startTime: 17,
    endTime: 19
  }
]

const moment = require('moment')
const thisHour = moment().hour()
for (session of sessions) {
  if (moment(thisHour).isBetween(session.startTime, session.endTime, null, '[)')) {
    console.log(rotation.currentVow)
  }
}

// Days have sessions
// sessions have startTimes, endTimes, and vows
// session needs to know what the last vow was or be told what it's current vow is.
>>>>>>> c4aef7215494d8041fca50983609dea11352c3ac
