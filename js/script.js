$(document).ready(function () {

    $(".add").click(function () {
        alert("Click 'OK' to confirm!");
    });

    //me to pathma tou add tha anoigei to pedio me ta inputs kai me to submit tha kanei refresh

    // $(".add").click(function(){
    //     $("table2").toggle(1000);
    // });
});

function listCourses() {
    //buttons
    document.querySelector("#courses").style.border = "outset";
    document.querySelector("#trainers").style.border = "none";
    document.querySelector("#students").style.border = "none";
    document.querySelector("#assignments").style.border = "none";
    //visibility of buttons
    document.querySelector(".coursetable").style.visibility = "visible";
    document.querySelector(".trainertable").style.visibility = "hidden";
    document.querySelector(".studenttable").style.visibility = "hidden";
    document.querySelector(".assignmenttable").style.visibility = "hidden";
}

function listTrainers() {
    //buttons
    document.querySelector("#courses").style.border = "none";
    document.querySelector("#trainers").style.border = "outset";
    document.querySelector("#students").style.border = "none";
    document.querySelector("#assignments").style.border = "none";
    //visibility of buttons
    document.querySelector(".coursetable").style.visibility = "hidden";
    document.querySelector(".trainertable").style.visibility = "visible";
    document.querySelector(".studenttable").style.visibility = "hidden";
    document.querySelector(".assignmenttable").style.visibility = "hidden";
}

function listStudents() {
    //buttons
    document.querySelector("#courses").style.border = "none";
    document.querySelector("#trainers").style.border = "none";
    document.querySelector("#students").style.border = "outset";
    document.querySelector("#assignments").style.border = "none";
    //visibility of buttons
    document.querySelector(".coursetable").style.visibility = "hidden";
    document.querySelector(".trainertable").style.visibility = "hidden";
    document.querySelector(".studenttable").style.visibility = "visible";
    document.querySelector(".assignmenttable").style.visibility = "hidden";
}

function listAssignments() {
    //buttons
    document.querySelector("#courses").style.border = "none";
    document.querySelector("#trainers").style.border = "none";
    document.querySelector("#students").style.border = "none";
    document.querySelector("#assignments").style.border = "outset";
    //visibility of buttons
    document.querySelector(".coursetable").style.visibility = "hidden";
    document.querySelector(".trainertable").style.visibility = "hidden";
    document.querySelector(".studenttable").style.visibility = "hidden";
    document.querySelector(".assignmenttable").style.visibility = "visible";
}

function listTrainerspercourse() {
    //buttons
    document.querySelector("#trainerspercourse").style.border = "outset";
    document.querySelector("#studentspercourse").style.border = "none";
    document.querySelector("#assignmentspercourse").style.border = "none";
    document.querySelector("#assignmentsperstudent").style.border = "none";
    //visibility of buttons
    document.querySelector(".trainerspercoursetable").style.visibility = "visible";
    document.querySelector(".studentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentsperstudenttable").style.visibility = "hidden";
}

function listStudentspercourse() {
    //buttons
    document.querySelector("#trainerspercourse").style.border = "none";
    document.querySelector("#studentspercourse").style.border = "outset";
    document.querySelector("#assignmentspercourse").style.border = "none";
    document.querySelector("#assignmentsperstudent").style.border = "none";
    //visibility of buttons
    document.querySelector(".trainerspercoursetable").style.visibility = "hidden";
    document.querySelector(".studentspercoursetable").style.visibility = "visible";
    document.querySelector(".assignmentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentsperstudenttable").style.visibility = "hidden";
}

function listAssignmentspercourse() {
    //buttons
    document.querySelector("#trainerspercourse").style.border = "none";
    document.querySelector("#studentspercourse").style.border = "none";
    document.querySelector("#assignmentspercourse").style.border = "outset";
    document.querySelector("#assignmentsperstudent").style.border = "none";
    //visibility of buttons
    document.querySelector(".trainerspercoursetable").style.visibility = "hidden";
    document.querySelector(".studentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentspercoursetable").style.visibility = "visible";
    document.querySelector(".assignmentsperstudenttable").style.visibility = "hidden";
}

function listAssignmentsperstudent() {
    //buttons
    document.querySelector("#trainerspercourse").style.border = "none";
    document.querySelector("#studentspercourse").style.border = "none";
    document.querySelector("#assignmentspercourse").style.border = "none";
    document.querySelector("#assignmentsperstudent").style.border = "outset";
    //visibility of buttons
    document.querySelector(".trainerspercoursetable").style.visibility = "hidden";
    document.querySelector(".studentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentspercoursetable").style.visibility = "hidden";
    document.querySelector(".assignmentsperstudenttable").style.visibility = "visible";
}

// editable/uneditable list

function editlist() {
    var div = document.querySelectorAll('.editcontent');
    [].forEach.call(div, function (div) {
        if (div.contentEditable == "true") {
            div.contentEditable = "false";
        } else {
            div.contentEditable = "true";
        }
    });
}

//validations
//form
function fValidation() {
    var title = document.form.title.value;
    var stream = document.form.stream.value;
    var t = document.form.type.value;
    var start = document.form.stardingdate.value;
    var end = document.form.endingdate.value;
    if (title == "") {
        alert('Please fill all fields');
        document.form.title.style.borderColor = "red";
        return false;
    } else {
        document.form.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form.title.style.borderColor = "red";
        return false;
    } else {
        document.form.title.style.borderColor = "green";
    }
    if (stream == "") {
        alert('Please fill all fields');
        document.form.stream.style.borderColor = "red";
        return false;
    } else {
        document.form.stream.style.borderColor = "green";
    }
    if (stream.length <= 2) {
        alert('Your text field is too short');
        document.form.stream.style.borderColor = "red";
        return false;
    } else {
        document.form.stream.style.borderColor = "green";
    }
    if (t === "Full time" || t === "full time" || t === "Full" || t === "full" || t === "Part time" || t === "part time" || t === "Part" || t === "part") {
        document.form.type.style.borderColor = "green";
    } else {
        alert("Please enter full/part time");
        document.form.type.style.borderColor = "red";
        return false;
    }
    if (start < end) {
        document.form.stardingdate.borderColor = "green";
        document.form.endingdate.borderColor = "green";
    } else {
        alert("Ending Date must be after starting Date!")
        document.form.stardingdate.borderColor = "red";
        document.form.endingdate.borderColor = "red";
        return false;
    }
}
//form1
function f1Validation() {
    var number = /[0-9]/g;
    var char = /[!@#$%^&*();:"`~{}_|]/g;
    var fname = document.form1.firstname.value;
    var lname = document.form1.lastname.value;
    var text = document.form1.subject.value;
    if (fname == "") {
        alert('Please enter first/last name');
        document.form1.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form1.firstname.style.borderColor = "green";
    }
    if (lname == "") {
        alert('Please enter first/last name');
        document.form1.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form1.lastname.style.borderColor = "green";
    }
    if (fname.match(number)) {
        alert("First/last name contains numbers!");
        document.form1.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form1.firstname.style.borderColor = "green";
    }
    if (lname.match(number)) {
        alert("First/last name contains numbers!");
        document.form1.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form1.lastname.style.borderColor = "green";
    }
    if (fname.match(char)) {
        alert("First/last name contains symbols!");
        document.form1.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form1.firstname.style.borderColor = "green";
    }
    if (lname.match(char)) {
        alert("First/last name contains symbols!");
        document.form1.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form1.lastname.style.borderColor = "green";
    }
    if (fname.length <= 2) {
        alert("Your name is too short");
        document.form1.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form1.firstname.style.borderColor = "green";
    }
    if (lname.length <= 2) {
        alert("Your name is too short");
        document.form1.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form1.lastname.style.borderColor = "green";
    }
    if (text == "") {
        alert('Please fill the field');
        document.form1.subject.style.borderColor = "red";
        return false;
    } else {
        document.form1.subject.style.borderColor = "green";
    }
    if (text.length <= 2) {
        alert('Your text field is too short');
        document.form1.subject.style.borderColor = "red";
        return false;
    } else {
        document.form1.subject.style.borderColor = "green";
    }

}
//form2
function f2Validation() {
    var number = /[0-9]/g;
    var char = /[!@#$%^&*();:"`~{}_|]/g;
    var fname = document.form2.firstname.value;
    var lname = document.form2.lastname.value;
    var fees = document.form2.tf.value;
    if (fname == "") {
        alert('Please enter first/last name');
        document.form2.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form2.firstname.style.borderColor = "green";
    }
    if (lname == "") {
        alert('Please enter first/last name');
        document.form2.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form2.lastname.style.borderColor = "green";
    }
    if (fname.match(number)) {
        alert("First/last name contains numbers!");
        document.form2.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form2.firstname.style.borderColor = "green";
    }
    if (lname.match(number)) {
        alert("First/last name contains numbers!");
        document.form2.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form2.lastname.style.borderColor = "green";
    }
    if (fname.match(char)) {
        alert("First/last name contains symbols!");
        document.form2.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form2.firstname.style.borderColor = "green";
    }
    if (lname.match(char)) {
        alert("First/last name contains symbols!");
        document.form2.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form2.lastname.style.borderColor = "green";
    }
    if (fname.length <= 2) {
        alert("Your name is too short");
        document.form2.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form2.firstname.style.borderColor = "green";
    }
    if (lname.length <= 2) {
        alert("Your name is too short");
        document.form2.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form2.lastname.style.borderColor = "green";
    }
    if (isNaN(fees)) {
        alert("Must input numbers");
        document.form2.tf.style.borderColor = "red";
        return false;
    } else {
        document.form2.tf.style.borderColor = "green";
    }

}
//form3
function f3Validation() {

    var title = document.form3.title.value;
    var oral = document.form3.oral.value;
    var total = document.form3.total.value;
    var description = document.form3.description.value;
    if (title == "") {
        alert('Please fill the field');
        document.form3.title.style.borderColor = "red";
        return false;
    } else {
        document.form3.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form3.title.style.borderColor = "red";
        return false;
    } else {
        document.form3.title.style.borderColor = "green";
    }
    if (isNaN(oral)) {
        alert("Must input numbers");
        document.form3.oral.style.borderColor = "red";
        return false;
    } else {
        document.form3.oral.style.borderColor = "green";
    }
    if (isNaN(total)) {
        alert("Must input numbers");
        document.form3.total.style.borderColor = "red";
        return false;
    } else {
        document.form3.total.style.borderColor = "green";
    }
    if (description == "") {
        alert('Please fill the field');
        document.form3.description.style.borderColor = "red";
        return false;
    } else {
        document.form3.description.style.borderColor = "green";
    }
    if (description.length <= 2) {
        alert('Your text field is too short');
        document.form3.description.style.borderColor = "red";
        return false;
    } else {
        document.form3.description.style.borderColor = "green";
    }
}

function f4Validation(){
    var number = /[0-9]/g;
    var char = /[!@#$%^&*();:"`~{}_|]/g;
    var fname = document.form4.firstname.value;
    var lname = document.form4.lastname.value;
    var title = document.form4.title.value;
    var stream = document.form4.stream.value;
    var t = document.form4.type.value;

    if (fname == "") {
        alert('Please enter first/last name');
        document.form4.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form4.firstname.style.borderColor = "green";
    }
    if (lname == "") {
        alert('Please enter first/last name');
        document.form4.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form4.lastname.style.borderColor = "green";
    }
    if (fname.match(number)) {
        alert("First/last name contains numbers!");
        document.form4.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form4.firstname.style.borderColor = "green";
    }
    if (lname.match(number)) {
        alert("First/last name contains numbers!");
        document.form4.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form4.lastname.style.borderColor = "green";
    }
    if (fname.match(char)) {
        alert("First/last name contains symbols!");
        document.form4.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form4.firstname.style.borderColor = "green";
    }
    if (lname.match(char)) {
        alert("First/last name contains symbols!");
        document.form4.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form4.lastname.style.borderColor = "green";
    }
    if (fname.length <= 2) {
        alert("Your name is too short");
        document.form4.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form4.firstname.style.borderColor = "green";
    }
    if (lname.length <= 2) {
        alert("Your name is too short");
        document.form4.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form4.lastname.style.borderColor = "green";
    }
    if (title == "") {
        alert('Please fill the field');
        document.form4.title.style.borderColor = "red";
        return false;
    } else {
        document.form4.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form4.title.style.borderColor = "red";
        return false;
    } else {
        document.form4.title.style.borderColor = "green";
    }
    if (stream == "") {
        alert('Please fill all fields');
        document.form4.stream.style.borderColor = "red";
        return false;
    } else {
        document.form4.stream.style.borderColor = "green";
    }
    if (stream.length <= 2) {
        alert('Your text field is too short');
        document.form4.stream.style.borderColor = "red";
        return false;
    } else {
        document.form4.stream.style.borderColor = "green";
    }
    if (t === "Full time" || t === "full time" || t === "Full" || t === "full" || t === "Part time" || t === "part time" || t === "Part" || t === "part") {
        document.form4.type.style.borderColor = "green";
    } else {
        alert("Please enter full/part time");
        document.form4.type.style.borderColor = "red";
        return false;
    }

}

//form5
function f5Validation(){

    var number = /[0-9]/g;
    var char = /[!@#$%^&*();:"`~{}_|]/g;
    var fname = document.form5.firstname.value;
    var lname = document.form5.lastname.value;
    var title = document.form5.title.value;
    var stream = document.form5.stream.value;
    var t = document.form5.type.value;

    if (fname == "") {
        alert('Please enter first/last name');
        document.form5.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form5.firstname.style.borderColor = "green";
    }
    if (lname == "") {
        alert('Please enter first/last name');
        document.form5.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form5.lastname.style.borderColor = "green";
    }
    if (fname.match(number)) {
        alert("First/last name contains numbers!");
        document.form5.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form5.firstname.style.borderColor = "green";
    }
    if (lname.match(number)) {
        alert("First/last name contains numbers!");
        document.form5.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form5.lastname.style.borderColor = "green";
    }
    if (fname.match(char)) {
        alert("First/last name contains symbols!");
        document.form5.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form5.firstname.style.borderColor = "green";
    }
    if (lname.match(char)) {
        alert("First/last name contains symbols!");
        document.form5.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form5.lastname.style.borderColor = "green";
    }
    if (fname.length <= 2) {
        alert("Your name is too short");
        document.form5.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form5.firstname.style.borderColor = "green";
    }
    if (lname.length <= 2) {
        alert("Your name is too short");
        document.form5.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form5.lastname.style.borderColor = "green";
    }
    if (title == "") {
        alert('Please fill the field');
        document.form5.title.style.borderColor = "red";
        return false;
    } else {
        document.form5.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form5.title.style.borderColor = "red";
        return false;
    } else {
        document.form5.title.style.borderColor = "green";
    }
    if (stream == "") {
        alert('Please fill all fields');
        document.form5.stream.style.borderColor = "red";
        return false;
    } else {
        document.form5.stream.style.borderColor = "green";
    }
    if (stream.length <= 2) {
        alert('Your text field is too short');
        document.form5.stream.style.borderColor = "red";
        return false;
    } else {
        document.form5.stream.style.borderColor = "green";
    }
    if (t === "Full time" || t === "full time" || t === "Full" || t === "full" || t === "Part time" || t === "part time" || t === "Part" || t === "part") {
        document.form5.type.style.borderColor = "green";
    } else {
        alert("Please enter full/part time");
        document.form5.type.style.borderColor = "red";
        return false;
    }

}

function f6Validation(){

    var title = document.form6.title.value;
    var cotitle = document.form6.cotitle.value;
    var stream = document.form6.stream.value;
    var t = document.form6.type.value;
    var description = document.form6.description.value;

    if (title == "") {
        alert('Please fill the field');
        document.form6.title.style.borderColor = "red";
        return false;
    } else {
        document.form6.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form6.title.style.borderColor = "red";
        return false;
    } else {
        document.form6.title.style.borderColor = "green";
    }
    if (cotitle == "") {
        alert('Please fill the field');
        document.form6.cotitle.style.borderColor = "red";
        return false;
    } else {
        document.form6.cotitle.style.borderColor = "green";
    }
    if (cotitle.length <= 2) {
        alert('Your text field is too short');
        document.form6.cotitle.style.borderColor = "red";
        return false;
    } else {
        document.form6.cotitle.style.borderColor = "green";
    }
    if (stream == "") {
        alert('Please fill all fields');
        document.form6.stream.style.borderColor = "red";
        return false;
    } else {
        document.form6.stream.style.borderColor = "green";
    }
    if (stream.length <= 2) {
        alert('Your text field is too short');
        document.form6.stream.style.borderColor = "red";
        return false;
    } else {
        document.form6.stream.style.borderColor = "green";
    }
    if (t === "Full time" || t === "full time" || t === "Full" || t === "full" || t === "Part time" || t === "part time" || t === "Part" || t === "part") {
        document.form6.type.style.borderColor = "green";
    } else {
        alert("Please enter full/part time");
        document.form6.type.style.borderColor = "red";
        return false;
    }
    if (description == "") {
        alert('Please fill the field');
        document.form6.description.style.borderColor = "red";
        return false;
    } else {
        document.form6.description.style.borderColor = "green";
    }
    if (description.length <= 2) {
        alert('Your text field is too short');
        document.form6.description.style.borderColor = "red";
        return false;
    } else {
        document.form6.description.style.borderColor = "green";
    }
}

function f7Validation(){

    var number = /[0-9]/g;
    var char = /[!@#$%^&*();:"`~{}_|]/g;
    var fname = document.form7.firstname.value;
    var lname = document.form7.lastname.value;
    var title = document.form7.title.value;
    var stream = document.form7.stream.value;
    var oral = document.form7.oral.value;
    var total = document.form7.total.value;
    var description = document.form7.description.value;

    if (fname == "") {
        alert('Please enter first/last name');
        document.form7.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form7.firstname.style.borderColor = "green";
    }
    if (lname == "") {
        alert('Please enter first/last name');
        document.form7.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form7.lastname.style.borderColor = "green";
    }
    if (fname.match(number)) {
        alert("First/last name contains numbers!");
        document.form7.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form7.firstname.style.borderColor = "green";
    }
    if (lname.match(number)) {
        alert("First/last name contains numbers!");
        document.form7.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form7.lastname.style.borderColor = "green";
    }
    if (fname.match(char)) {
        alert("First/last name contains symbols!");
        document.form7.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form7.firstname.style.borderColor = "green";
    }
    if (lname.match(char)) {
        alert("First/last name contains symbols!");
        document.form7.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form7.lastname.style.borderColor = "green";
    }
    if (fname.length <= 2) {
        alert("Your name is too short");
        document.form7.firstname.style.borderColor = "red";
        return false;
    } else {
        document.form7.firstname.style.borderColor = "green";
    }
    if (lname.length <= 2) {
        alert("Your name is too short");
        document.form7.lastname.style.borderColor = "red";
        return false;
    } else {
        document.form7.lastname.style.borderColor = "green";
    }
    if (title == "") {
        alert('Please fill the field');
        document.form7.title.style.borderColor = "red";
        return false;
    } else {
        document.form7.title.style.borderColor = "green";
    }
    if (title.length <= 2) {
        alert('Your text field is too short');
        document.form7.title.style.borderColor = "red";
        return false;
    } else {
        document.form7.title.style.borderColor = "green";
    }
    if (stream == "") {
        alert('Please fill all fields');
        document.form7.stream.style.borderColor = "red";
        return false;
    } else {
        document.form7.stream.style.borderColor = "green";
    }
    if (stream.length <= 2) {
        alert('Your text field is too short');
        document.form7.stream.style.borderColor = "red";
        return false;
    } else {
        document.form7.stream.style.borderColor = "green";
    }
    if (isNaN(oral)) {
        alert("Must input numbers");
        document.form7.oral.style.borderColor = "red";
        return false;
    } else {
        document.form7.oral.style.borderColor = "green";
    }
    if (isNaN(total)) {
        alert("Must input numbers");
        document.form7.total.style.borderColor = "red";
        return false;
    } else {
        document.form7.total.style.borderColor = "green";
    }
    if (description == "") {
        alert('Please fill the field');
        document.form7.description.style.borderColor = "red";
        return false;
    } else {
        document.form7.description.style.borderColor = "green";
    }
    if (description.length <= 2) {
        alert('Your text field is too short');
        document.form7.description.style.borderColor = "red";
        return false;
    } else {
        document.form7.description.style.borderColor = "green";
    }
}

//type input validation
//document.querySelector(".form").addEventListener("submit", function(){
////function typeValidation(){
//	var t = document.querySelectorAll(".type").value;
//	[].forEach.call(t, function(t){
//		if(t === "Full time" || t === "full time" || t === "Full" || t ==="full" ||t === "Part time" || t === "part time" || t === "Part" || t === 	"part"){
//			document.querySelector(".type").style.borderColor = "green";
//		}else{
//		    alert("Please Enter Full/Part time");
//            document.querySelector(".type").style.borderColor = "red";
//	      	return false;
//		}
//	});
//});

//rest text inputs validation

//function textValidation(){
//    //First Name Validation 
//    var text = document.querySelectorAll(".text");
//	[].forEach.call(text, function(text){
//    	if(text == ""){
//        	alert('Please Enter the Field');
//        	document.getElementsByClassName(".text").style.borderColor = "red";
//        	return false;
//    	}else{
//        	document.getElementByClassName(".text").style.borderColor = "green";
//    	}
//    	if(text.length <=2){
//        	alert('Your Text Field is Too Short');
//        	document.getElementByClassName(".text").style.borderColor = "red";
//        	return false;
//    	}else{
//        	document.getElementByClassName(".text").style.borderColor = "green";
//    	}
//	});
//}


//date validation
//
//function dateValidation(){
//	var start = document.getElementById("startingdate").value;
//	var end = document.getElementById("endingdate").value;
//	if(start < end){
//   //start is less than End
//		document.getElementById("startingdate").borderColor = "green";
//		document.getElementById("endingdate").borderColor = "green";
//}else{
//   //end is less than start
//	document.getElementById("startingdate").borderColor = "red";
//		document.getElementById("endingdate").borderColor = "red";
// }
//}

//integers validation

//function intValidation(){
//  var x = document.getElementById("int").value;
//  if (isNaN(x)) {
//    alert("Must input numbers");
//    return false;
//  }
//}




