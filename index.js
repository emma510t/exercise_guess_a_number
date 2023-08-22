let ranNum;

ranNum = Math.floor(Math.random() * 101);

document.querySelector("#button").addEventListener("click", getInputValue);

function getInputValue() {
  let inputVal = document.getElementById("input").value;
  let conInput = parseInt(inputVal);

  console.log(conInput);
  console.log(ranNum);
  /* document.querySelector("#number").textContent = ranNum; */

  if (ranNum === conInput) {
    alert("you won!");
    console.log("tillykke");
  } else if (ranNum > conInput) {
    alert("The number is higher");
  } else {
    alert("The number is lower");
  }
}

// function randomNumber() {
//   ranNum = Math.floor(Math.random() * 101);
//   console.log(ranNum);
//   document.querySelector("#number").textContent = ranNum;
// }
