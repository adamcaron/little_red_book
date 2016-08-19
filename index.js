
/* Vow Work */
const numberOfSessionsPerDay = 6
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
