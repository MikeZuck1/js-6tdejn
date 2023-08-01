// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

console.log("5. Decline Accept Everything");

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

console.log("5a: declineEverything");

const declineEverything = arr => {
  arr.forEach(el => {
    politelyDecline(el);
  });
};

console.log(declineEverything(veggies));


console.log("5b: acceptEverything");

const acceptEverything = arr => {
  arr.forEach(el => { 
    console.log(`Ok, I guess I will eat some ${el}.`);
  });
};

console.log(acceptEverything(veggies));