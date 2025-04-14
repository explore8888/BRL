const image = document.querySelector('.image');

document.querySelector('.image-3deffect').addEventListener('mousemove', (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 10; // Increased effect by changing divisor from 25 to 10
  const yAxis = (window.innerHeight / 2 - event.pageY) / 10; // Increased effect by changing divisor from 25 to 10
  image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.image-3deffect').addEventListener('mouseleave', () => {
  image.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
