import './style.css'
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

const main = document.querySelector("main");
main.innerHTML = Main();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const buttons = document.querySelector('.botones');
const btn = buttons.querySelectorAll('span');
const value = document.getElementById('valor');

buttons.addEventListener('click', function(event) {
    const clickedButton = event.target;

    if (!clickedButton.matches('span')) {
        return;
    }

    const buttonText = clickedButton.innerHTML;

    if (buttonText === "=") {
        try {
            value.innerHTML = eval(value.innerHTML);
        } catch (error) {
            value.innerHTML = 'Error';
        }
    } else if (buttonText === 'Clear') {
        value.innerHTML = "";
    } else {
        value.innerHTML += buttonText;
    }
});