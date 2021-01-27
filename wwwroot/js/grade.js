$("#submitbutton").click( function () {
    //bring in all of the values from the input boxes
    var assignments = $("#assignments").val();
    var projects = $("#projects").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();

    //calculate grade for each category and weight
    var pct = (assignments * .01 * 50) + (projects * .01 * 10) + (quizzes * .01 * 10) + (exams * .01 * 20) + (intex * .01 * 10);

    //determine overall letter grade based on percentage
    var grade = "E";
    if (pct < 60) {
        grade = "E";
    } else if (pct >= 60 & pct < 64) {
        grade = "D-";
    } else if (pct >= 64 & pct < 67) {
        grade = "D";
    } else if (pct >= 67 & pct < 70) {
        grade = "D+";
    } else if (pct >= 70 & pct < 74) {
        grade = "C-";
    } else if (pct >= 74 & pct < 77) {
        grade = "C";
    } else if (pct >= 77 & pct < 80) {
        grade = "C+";
    } else if (pct >= 80 & pct < 84) {
        grade = "B-";
    } else if (pct >= 84 & pct < 87) {
        grade = "B";
    } else if (pct >= 87 & pct < 90) {
        grade = "B+";
    } else if (pct >= 90 & pct < 94) {
        grade = "A-";
    } else if (pct >= 94) {
        grade = "A";
    } else {
        grade = "error";
    }


    alert("Your percentage is " + pct + "% and your grade is: " + grade);
});