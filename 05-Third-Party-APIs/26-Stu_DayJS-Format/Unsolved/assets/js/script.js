// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var gradDate = dayjs('2022-08-01').format('MMM D, YYYY');
$('#1a').text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var weekDay = dayjs('2027-01-01').format('dddd');
$('#2a').text(weekDay);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var time = dayjs().format('h:mm:ss');
$('#3a').text(time);

// TODO: 4. What is the current Unix timestamp?
var unix = dayjs().unix();
$('#4a').text(unix);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format('M/D/YYYY h:mm:ss');
$('#5a').text(unixFormat);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

// dayjs object for May 4, 2027
var targetDay = dayjs('2027-05-04');

// dayjs object for today
var today = dayjs();

// number of days between targetDay and today
var days = targetDay.diff(today, 'days');
$('#6a').text(days);
