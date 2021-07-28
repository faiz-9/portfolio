function FrontPageMain() {
  let array = ["Full Stack Developer", "Designer", "Programmer"];
  const text = document.querySelector(".text");
  const cursor = document.querySelector(".cursor");
  const eraseDelay = 100;
  const typingDelay = 150;
  const wordDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < array[textArrayIndex].length) {
      if (!cursor.classList.contains("stop-blink")) {
        cursor.classList.add("stop-blink");
      }
      text.textContent += array[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, 1000);
      cursor.classList.remove("stop-blink");
      // erase()
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      if (!cursor.classList.contains("stop-blink")) {
        cursor.classList.add("stop-blink");
      }
      text.textContent = array[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseDelay);
    } else {
      cursor.classList.add("stop-blink");
      if (textArrayIndex < array.length - 1) {
        textArrayIndex++;
      } else {
        textArrayIndex = 0;
      }
      setTimeout(type, wordDelay);
    }
  };

  window.onload = function () {
    setTimeout(type, wordDelay + 200);
  };
}
export default FrontPageMain;
