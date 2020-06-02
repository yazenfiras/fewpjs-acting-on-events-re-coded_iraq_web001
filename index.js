// Your code here

let dodger = document.getElementById("dodger");


function moveDodgerLeft() {
if (e.key === "ArrowLeft" && left>0) {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  dodger.style.left = `${left - 1}px`;
   
  }

}

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(rightNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", moveDodgerLeft);
 
   
  


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

