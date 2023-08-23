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
    document.querySelector("#result").textContent = "Congratulations, you won!";
    document.querySelector("body").classList.add("green");
  } else if (ranNum > conInput) {
    document.querySelector("#result").textContent = "The number is higher.. try again";
  } else {
    document.querySelector("#result").textContent = "The number is lower.. try again";
  }
}

// function randomNumber() {
//   ranNum = Math.floor(Math.random() * 101);
//   console.log(ranNum);
//   document.querySelector("#number").textContent = ranNum;
// }
