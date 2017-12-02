var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Date Formatter</h2><p><a href='?year=___&&month=___&&day=___'>Click</a> to append a query string into the address bar<br>Edit the query in the address bar to your desired date.</p><hr><h3>Formatted Date:</h3>")

  var q = url.parse(req.url, true).query;
  var year = q.year
  var month = q.month;
  var day = q.day;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  if (day <= 31) {
    if (month <= 12) {
      month = month - 1
      data = day + " " + months[month] + " " + year;
      // if (month == 1){
      //   data = day + " " + "January" + " " + year;
      // } else
      // if (month == 2) {
      //   data = day + " " + "February" + " " + year;
      // } else
      // if (month == 3) {
      //   data = day + " " + "March" + " " + year;
      // } else
      // if (month == 4) {
      //   data = day + " " + "April" + " " + year;
      // } else
      // if (month == 5) {
      //   data = day + " " + "May" + " " + year;
      // } else
      // if (month == 6) {
      //   data = day + " " + "June" + " " + year;
      // } else
      // if (month == 7) {
      //   data = day + " " + "July" + " " + year;
      // } else
      // if (month == 8) {
      //   data = day + " " + "August" + " " + year;
      // } else
      // if (month == 9) {
      //   data = day + " " + "September" + " " + year;
      // } else
      // if (month == 10) {
      //   data = day + " " + "October" + " " + year;
      // } else
      // if (month == 11) {
      //   data = day + " " + "November" + " " + year;
      // } else
      // if (month == 12) {
      //   data = day + " " + "December" + " " + year;
      // }

    } else {data = 'Data either not provided or is invalid'}
  } else {data = 'Data either not provided or is invalid'}
  res.write("<input disabled size='50' value='");
  res.write(data);
  res.end("'></input>");
}).listen(8080);
