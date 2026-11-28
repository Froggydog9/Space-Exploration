let cameraDistance = 10;
const planetName = "Earth";
const rotationSpeed = 0.01;
let earthRotation = 0;
let isHovering = true;
let isDragging = false;
function checkRotation() {
  if (isDragging && isHovering === true) {
    console.log("planet rotating");
  } else {
    console.log("not rotating");
  }
}

function moveCamera(amount) {
  cameraDistance += amount;
}
moveCamera(3);
moveCamera(5);
checkRotation();
isDragging = true;
checkRotation();
