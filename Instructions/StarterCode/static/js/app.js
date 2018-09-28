// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

d3.select("#filter-btn").on("click", function() {
	d3.event.preventDefault();


	var dateValue = d3.select('#datetime').property('value');
	var city = d3.select('#city').property('value').toLowerCase();
	var state = d3.select('#state').property('value').toLowerCase();
	var country = d3.select('input[name="country"]:checked').node().value;
	console.log("Date"+dateValue + "City"+city + "State"+state + "Country"+country);
	var filteredValues = tableData;
	if(dateValue) {

		filteredValues = filteredValues.filter(ufo => ufo.datetime == dateValue);
		console.log(dateValue);
	}
	if(city) {
		filteredValues = filteredValues.filter(ufo => ufo.city == city);
		console.log(city);
	}
	if(state) {
		filteredValues = filteredValues.filter(ufo => ufo.state == state);
		console.log(state);
	}
	if(country) {
		filteredValues = filteredValues.filter(ufo => ufo.country == country);
		console.log(country);
	}

	var tbody = d3.select('tbody');
	tbody.html('');
	// console.log(filteredValues);
	filteredValues.forEach(ufo => {
		var row = tbody.append('tr');
		row.append('td').text(ufo['datetime']);
		row.append('td').text(ufo['city']);
		row.append('td').text(ufo['state']);
		row.append('td').text(ufo['country']);
		row.append('td').text(ufo['shape']);
		row.append('td').text(ufo['durationMinutes']);
		row.append('td').text(ufo['comments']);

	});
});

