const typingText = [
  "Web Developer",
  "JavaScript Developer",
  "Frontend Engineer",
  "Creative Programmer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === typingText.length){
    count = 0;
  }

  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

    setTimeout(type, 1200);

  }else{

    setTimeout(type, 100);

  }

})();

/* REVEAL ANIMATION */

window.addEventListener("scroll", reveal);

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }

  }

}

reveal();