//-----------easter egg----------
const egg = document.getElementById(`egg`);
const eggPopup = document.getElementById(`egg-popup`);
const closeEgg = document.getElementById(`close-egg`)

egg.onclick = () => eggPopup.style.display = `block`;

closeEgg.onclick = () =>
    document.getElementById(`egg-popup`).style.display= `none`;


//---------------code------------
const hiddenInput = document.getElementById(`hidden-input`);
const codePopup = document.getElementById(`1337`);
const closeCode = document.getElementById(`close-code`);

const secretCode = `1337`;

window.onload = () => hiddenInput.focus();

let userInput = ``;

hiddenInput.addEventListener('keyup', function(event) {
    userInput += event.key;

    if (userInput === secretCode){
        codePopup.style.display= `block`;
        userInput = ``;
    }

    if (userInput.length > 4 && userInput !== secretCode){
        userInput=``;
    }
});

closeCode.onclick = ()=> codePopup.style.display =`none`;
