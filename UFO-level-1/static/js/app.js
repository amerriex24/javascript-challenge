// from data.js
var tableData = data;

//Reference the table body 
var tbody = d3.select("tbody");

// YOUR CODE HERE!
var button=d3.select('#filter-btn');
var input1=d3.select('#datetime');
var input2=d3.select('#city');
var input3=d3.select('#state')
var cols=['datetime','city','state','country','shape','durationMinutes','comments']
var resetbtn=d3.select('#reset-btn');

function tblOn(dataObj){
    dataObj.forEach(line => {
    let row=tbody.append('tr');
    cols.forEach(col => row.append('td').text(line[col]))
    });

}
tblOn(data);





