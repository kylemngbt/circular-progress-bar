const number = document.querySelector("#number");
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    number.textContent = `${counter}%`;
  }
}, 16);