function showData() {

  let rank = document.getElementById("rank").value;
  let category = document.getElementById("category").value;
  let gender = document.getElementById("gender").value;
  let domicile = document.getElementById("domicile").value;
 
  let output = document.getElementById("output");

  output.innerHTML =
  "Rank: " + rank +
  " | Category: " + category +
  " | Gender: " + gender +
  " | Domicile: " + domicile;
}




