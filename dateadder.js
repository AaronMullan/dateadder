const dateNow = Date.now();
console.log(dateNow);
const difference = '10d';
const coupleMinutesDifferent = '10m';
let newDate = dateAdder(dateNow, difference);

function dateAdder (date, diff) {
  const timeOperator = diff.slice(0, -1);
  const timeUnit = diff.slice(-1);
  switch (timeUnit){
    case 'd':
      let timeOperatorinMS = timeOperator * 1000 * 60 * 60 * 24;
      let newDate = date + timeOperatorinMS;
      return newDate;
    case 'm':
      timeOperatorinMs = timeOperator * 1000 * 60;
      newDate = date + timeOperatorinMs;
      return newDate;
 }
};

const dateMinusTenDays = dateAdder(dateNow, difference);
const dateMinusTenMinutes = dateAdder(dateNow, coupleMinutesDifferent);

console.log(dateMinusTenDays)
console.log(dateMinusTenMinutes)



