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
    const dDatabase = firebase.database().ref('VotesCounter').child(cId);
    
    // get firebase data
    dDatabase.on('value', function(snap) {
        let data = snap.val() || 0;
        dCounter.querySelector('span').innerHTML = data;
    });
    
    // set firebase data
    el.addEventListener('click', function(e) {

          if (userHasVoted) {
            let message = document.createElement('div');
            message.innerHTML = "You've already voted.";
            message.className = "redalert";
            document.body.append(message);
            setTimeout ( function () {
                message.classList.add("invisible");
                }, 1800);  
            el.disabled = true;

         } else {
             dDatabase.transaction(function(dCount) {
                return (dCount || 0) + 1;
            });
            el.style.color = 'red'
            localStorage.setItem('iHaveVoted', 'yes');
            window.location.reload()
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = "Thank you for voting!";
            document.body.append(div);
         }
        
    });
});


document.addEventListener('click', function(e) {
    console.log(e.target.dataset.share)
})


