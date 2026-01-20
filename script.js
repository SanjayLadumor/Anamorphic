// This is for Mouse hover Effect 

// const reveal = document.querySelector('.reveal-image');
// let targetX = 50, targetY = 50;
// let currentX = 50, currentY = 50;

// window.addEventListener('mousemove', (e) => {
//   targetX = e.clientX;
//   targetY = e.clientY;
// });

// function animate() {
//   // Linear interpolation (lerp) for smooth "watery" lag
//   currentX += (targetX - currentX) * 0.08;
//   currentY += (targetY - currentY) * 0.08;
  
//   reveal.style.setProperty('--mouse-x', `${currentX}px`);
//   reveal.style.setProperty('--mouse-y', `${currentY}px`);
  
//   requestAnimationFrame(animate);
// }

// animate();

const containers = document.querySelectorAll('.image-container');

containers.forEach((container) => {
  const reveal = container.querySelector('.reveal-image');
  let targetX = 50, targetY = 50;
  let currentX = 50, currentY = 50;

  window.addEventListener('mousemove', (e) => {
    // Get the position of the container relative to the viewport
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to THIS container
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
  });

  function animate() {
    // Smooth lerp
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    
    reveal.style.setProperty('--mouse-x', `${currentX}px`);
    reveal.style.setProperty('--mouse-y', `${currentY}px`);
    
    requestAnimationFrame(animate);
  }

  animate();
});