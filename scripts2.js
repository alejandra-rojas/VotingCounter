'use strict';

const config = {
    apiKey: "AIzaSyBFd4ZQpffzs-i9TIkm7Y4VXNojTEk1WPw",
    authDomain: "votecounter-c33c4.firebaseapp.com",
    databaseURL: "https://votecounter-c33c4-default-rtdb.firebaseio.com",
    storageBucket: "votecounter-c33c4.appspot.com",
    messagingSenderId: "1035469983693"
};

firebase.initializeApp(config);

const dCounters = document.querySelectorAll('.CountLike');
const userHasVoted = localStorage.getItem('iHaveVoted', 'yes');


[].forEach.call(dCounters, function(dCounter) {
    const el = dCounter.querySelector('button');
    const cId = dCounter.id;
    const dDatabase = firebase.database().ref('Like Number Counter').child(cId);
    
    // get firebase data
    dDatabase.on('value', function(snap) {
        let data = snap.val() || 0;
        dCounter.querySelector('span').innerHTML = data;
    });
    
    // set firebase data
    el.addEventListener('click', function() {
        // if (userHasVoted === 'yes') {
        //     alert("you already voted")
        // } else {
            dDatabase.transaction(function(dCount) {
                return (dCount || 0) + 1;
            });
            document.getElementById("plusOne").disabled = true
        //     localStorage.setItem('iHaveVoted', 'yes');
        // }
        
    });
});
