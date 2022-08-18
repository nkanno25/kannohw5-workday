var now = moment();
var date = new Date();
var hour = date.getHours();
var currentDate = document.querySelector('#today')

for (i = 1; i < 10; i++) {
    var task = document.getElementById(i.toString());
    if (i < hour) {
        task.classList.add('past');
    } else if (i === hour) {
        task.classList.add('present');
    } else {
        task.classList.add('future');
    }
}