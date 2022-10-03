// const dodger = document.getElementById("dodger") // Grabbing the "dodger" (box on the botttom)


// dodger.style.backgroundColor = "#FF69B4" // Now changing the color of the "dodger"

// dodger.style.bottom = "100px" // Now this will move our "dodger" element up

// dodger.style.bottom = "0px" // Nwo we are returning our "dodger" element back down


// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });  // This will move dodger to the left when left arrow clicked 






//   // These will confirm our "dodger" elements current position when we put it into our console
// dodger.style.left //or..
// dodger.style.bottom


const dodger = document.getElementById("dodger"); // Grabbing the "dodger" (box on the botttom)

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "") // Here we store dodger.style.left.replace("px", "") into "leftNumbers"
    const left = parseInt(leftNumbers, 10) // 
 
    if (left > 0) {
      dodger.style.left = `${left - 1}px`; // Over here we say that if left reaches 0 (the end of the page) it should not continue 
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); // Over here we create the event listener that moves the dodger left when left key is pressed



  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
      }
    }
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
          moveDodgerRight();
        }
      });
    
  