import "bootstrap";
import "./style.css";

window.onload = function() {
  const btn = document.querySelector("button");
  const tenSecondsbtn = document.querySelector(".button2");

  //// ADD EVENT LISTENER TO THE BUTTON WITH THE TIMER

  tenSecondsbtn.addEventListener("click", () => {
    setTimeout(cardGenerator, 3000);
  });

  // ADD EVENT LISTENER TO THE BUTTON

  btn.addEventListener("click", cardGenerator);

  //FUNCTION THAT GENERATE THE RANDOM CARD

  function cardGenerator() {
    const suitSelector = Math.floor(Math.random() * 4);
    const cardNumberSelector = Math.floor(Math.random() * 14);

    //SUIT:

    switch (suitSelector) {
      case 0: {
        const suit = document.getElementsByClassName("suit");
        suit[0].innerHTML = "♦";
        suit[1].innerHTML = "♦";
        suit[0].style.color = "red";
        suit[1].style.color = "red";
        break;
      }
      case 1: {
        const suit = document.getElementsByClassName("suit");
        suit[0].innerHTML = "♥";
        suit[1].innerHTML = "♥";
        suit[0].style.color = "red";
        suit[1].style.color = "red";
        break;
      }
      case 2: {
        const suit = document.getElementsByClassName("suit");
        suit[0].innerHTML = "♠";
        suit[1].innerHTML = "♠";
        suit[0].style.color = "black";
        suit[1].style.color = "black";
        break;
      }
      case 3: {
        const suit = document.getElementsByClassName("suit");
        suit[0].innerHTML = "♣";
        suit[1].innerHTML = "♣";
        suit[0].style.color = "black";
        suit[1].style.color = "black";
        break;
      }
    }

    //NUMBER CARD:
    if (cardNumberSelector === 0) {
      const cardNumber = document.querySelector("#contentNum");
      cardNumber.innerHTML = "A";
    } else if (cardNumberSelector === 11) {
      const cardNumber = document.querySelector("#contentNum");
      cardNumber.innerHTML = "J";
    } else if (cardNumberSelector === 12) {
      const cardNumber = document.querySelector("#contentNum");
      cardNumber.innerHTML = "Q";
    } else if (cardNumberSelector === 13) {
      const cardNumber = document.querySelector("#contentNum");
      cardNumber.innerHTML = "K";
    } else {
      const cardNumber = document.querySelector("#contentNum");
      cardNumber.innerHTML = `${cardNumberSelector}`;
    }
  }
};
