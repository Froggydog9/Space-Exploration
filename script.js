let cameraDistance = 10;
const planetName = "Earth";
let isDragging = false;
const rotationSpeed = 0.01;
let earthRotation = 0;
cameraDistance += 5;
cameraDistance -= 3;
earthRotation += 0.01;
earthRotation += 0.01;
function moveCamera(amount) {
  cameraDistance += amount;
}
moveCamera(3);
moveCamera(5);
