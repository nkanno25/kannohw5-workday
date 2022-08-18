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
};

function currentCalendar () {
    currentDate.textContent = now
};

$('.saveBtn').click(function () {
    var work = document.getElementById('1').value
    localStorage.setItem('work9', work)

    var work = document.getElementById('2').value
    localStorage.setItem('work10', work)

    var work = document.getElementById('3').value
    localStorage.setItem('work11', work)

    var work = document.getElementById('4').value
    localStorage.setItem('work12', work)

    var work = document.getElementById('5').value
    localStorage.setItem('work13', work)

    var work = document.getElementById('6').value
    localStorage.setItem('work14', work)

    var work = document.getElementById('7').value
    localStorage.setItem('work15', work)

    var work = document.getElementById('8').value
    localStorage.setItem('work16', work)

    var work = document.getElementById('9').value
    localStorage.setItem('work17', work)
});

function storeIt() {
    $("#1").val(localStorage.getItem("work9"));
    $("#2").val(localStorage.getItem("work10"));
    $("#3").val(localStorage.getItem("work11"));
    $("#4").val(localStorage.getItem("work12"));
    $("#5").val(localStorage.getItem("work13"));
    $("#6").val(localStorage.getItem("work14"));
    $("#7").val(localStorage.getItem("work15"));
    $("#8").val(localStorage.getItem("work16"));
    $("#9").val(localStorage.getItem("work17"));
};



currentCalendar();
storeIt();