
    <script src="https://www.gstatic.com/firebasejs/3.6.5/firebase.js"></script>


        var config = {
            apiKey: "AIzaSyBFd4ZQpffzs-i9TIkm7Y4VXNojTEk1WPw",
    authDomain: "votecounter-c33c4.firebaseapp.com",
    projectId: "votecounter-c33c4",
    storageBucket: "votecounter-c33c4.appspot.com",
    messagingSenderId: "1035469983693",
    appId: "1:1035469983693:web:6b9fe647c7a1072c45be84",
    measurementId: "G-6ZDH6DT3HE"
        };
        firebase.initializeApp(config);

        var dCounters = document.querySelectorAll('.CountLike');
        [].forEach.call(dCounters, function(dCounter) {
            var el = dCounter.querySelector('button');
            var cId = dCounter.id;
            var dDatabase = firebase.database().ref('Like Number Counter').child(cId);

            // get firebase data
            dDatabase.on('value', function(snap) {
                var data = snap.val() || 0;
                dCounter.querySelector('span').innerHTML = data;
            });

            // set firebase data
            el.addEventListener('click', function() {
                dDatabase.transaction(function(dCount) {
                    return (dCount || 0) + 1;
                });
            });
        });