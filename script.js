"use strict";

const dynamicYear = new Date().getFullYear();
document.querySelector(".year").textContent = String(dynamicYear);

if (window.innerWidth <= 768) {
  document.querySelector("#codingVideo").remove();
}
