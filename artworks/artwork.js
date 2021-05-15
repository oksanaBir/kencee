const blocks = () => [...document.querySelectorAll('.blocks')];
const layout = () => document.querySelector('.layout');

document.addEventListener('DOMContentLoaded', () => {
  isOpenImage = false;

  const zoomImage = () => {
    blocks.map(block => {
      block.style.width = '300px';
      block.style.height = '300px';
      block.style.zIndex = 100;
    });
    layout.style.display = 'block';
  }

  blocks.onclick = zoomImage;
});