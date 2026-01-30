let btn = document.querySelector("button");
let result = document.getElementById("result");
let input = document.getElementById("birthval");

btn.addEventListener("click", calculateAge);

function calculateAge() {
  let birthval = input.value;

  if (birthval === "") {
    result.innerText = "Please select your birth date";
    return;
  }

  let birthDate = new Date(birthval);
  let today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  result.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
}
