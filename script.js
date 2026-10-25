function showtext() {

    let input1 = document.getElementById("num1").value
    let input2 = document.getElementById("num2").value
 

    
      if (input1 === "" || input2 === "") {
        document.getElementById("result").innerText =
              "Please enter both numbers";
        return;
      }
       
        let x = Number(input1) / 100;
        let y = Number(input2);

        let result = y / (x * x)
        let bmi = "";

        if (result < 18.5) {
            bmi = "Underweight";
         } else if (result < 25) {
            bmi = "Normal";
         } else if (result < 30) {
            bmi = "Overweight";
         } else if (result < 40) {
            bmi = "Obese";
         } else {
            bmi = "Extremely Obese";
}
        document.getElementById("result").innerHTML = 
         "Your BMI is: " + result.toFixed(2) +
         "<br><span class='bmi-status'>" + bmi + "</span>";

        document.getElementById("result").style.fontStyle = "italic";
    }
