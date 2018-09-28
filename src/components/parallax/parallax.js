"use strict";

export default function parallax() {
  const parallaxLayer = document.querySelectorAll(".parallax__layer");

  return {
    parallaxMouse(e) {
      let posX = 0;
      let posY = 0;
      let speed = 150;

      for (let i = 0; i < parallaxLayer.length; i++) {
        posX = e.pageX / -speed + "px";
        posY = e.pageY / -speed + "px";
        parallaxLayer[i].style.transform = `translate3d(${posX}, ${posY}, 0)`;
        speed -= 15;
      }
    }
  };
}
