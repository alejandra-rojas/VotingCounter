'use strict';

const firebaseConfig = {
    apiKey: "AIzaSyBFd4ZQpffzs-i9TIkm7Y4VXNojTEk1WPw",
    authDomain: "votecounter-c33c4.firebaseapp.com",
    projectId: "votecounter-c33c4",
    storageBucket: "votecounter-c33c4.appspot.com",
    messagingSenderId: "1035469983693",
    appId: "1:1035469983693:web:6b9fe647c7a1072c45be84",
    measurementId: "G-6ZDH6DT3HE"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();



const subEl1 = document.getElementById('submission1');
const subEl2 = document.getElementById('submission2');
const add1 = document.getElementById('single');
const add1a = document.getElementById('singleA');

// state that we need to store over the course of our program
let el1Votes = 0;
let el2Votes = 0;


// HOME FUNCTIONS
// function that can be used in the two events to update value.
// removing the step of having to update html
function updateCounter (value) {
    el1Votes = value
    subEl1.innerHTML = el1Votes;
    if (el1Votes > el2Votes){
        subEl1.style.backgroundColor = 'black';
    } 
};

// event listeners on functions
add1.onclick = function (){
    updateCounter(el1Votes + 1);
};

// AWAY FUNCTIONS
  function updateCounterA (value) {
    el2Votes = value
    subEl2.innerHTML = el2Votes;
    if (el1Votes < el2Votes){
        subEl1.style.backgroundColor = 'black';
    } 
};

// event listeners on functions
add1a.onclick = function (){
    updateCounterA(el2Votes + 1);
};



