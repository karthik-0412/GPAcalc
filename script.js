document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const subCredit1 = parseFloat(document.getElementById("sub_credit1").value);
        const gradePoint1 = parseFloat(document.getElementById("grade_point1").value);

        const subCredit2 = parseFloat(document.getElementById("sub_credit2").value);
        const gradePoint2 = parseFloat(document.getElementById("grade_point2").value);

        const subCredit3 = parseFloat(document.getElementById("sub_credit3").value);
        const gradePoint3 = parseFloat(document.getElementById("grade_point3").value);

        const subCredit4 = parseFloat(document.getElementById("sub_credit4").value);
        const gradePoint4 = parseFloat(document.getElementById("grade_point4").value);

        const subCredit5 = parseFloat(document.getElementById("sub_credit5").value);
        const gradePoint5 = parseFloat(document.getElementById("grade_point5").value);

        const subCredit6 = parseFloat(document.getElementById("sub_credit6").value);
        const gradePoint6 = parseFloat(document.getElementById("grade_point6").value);

        const subCredit7 = parseFloat(document.getElementById("sub_credit7").value);
        const gradePoint7 = parseFloat(document.getElementById("grade_point7").value);

        const subCredit8 = parseFloat(document.getElementById("sub_credit8").value);
        const gradePoint8 = parseFloat(document.getElementById("grade_point8").value);

        const totalSubCredits = (subCredit1 * gradePoint1) +
                               (subCredit2 * gradePoint2) +
                               (subCredit3 * gradePoint3) +
                               (subCredit4 * gradePoint4) +
                               (subCredit5 * gradePoint5) +
                               (subCredit6 * gradePoint6) +
                               (subCredit7 * gradePoint7) +
                               (subCredit8 * gradePoint8);
        
        if (totalSubCredits !== 0) {
            const totalGradePoints = subCredit1 + subCredit2 + subCredit3 + subCredit4 + subCredit5 + subCredit6 + subCredit7+ subCredit8;
            const gpa = (totalSubCredits / totalGradePoints);
            resultElement.innerText = `GPA: ${gpa.toFixed(2)}`;
        } 
        else {
            resultElement.innerText = "Total subject credits cannot be zero.";
        }
    });
});
