'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const centerX = (wallWidth - spiderWidth) / 2;
  const centerY = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  centerSpider();
});
