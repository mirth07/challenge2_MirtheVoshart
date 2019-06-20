(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var currentTime     = document.getElementById('current-time'),
        currentDate     = document.getElementById('current-date'),
        welcomeText     = document.getElementById('welcome-text'),
        backgroundImage = document.getElementById('background-image');

    setInterval(function() {
        var d = new Date();

        var hours   = d.getHours(),
            minutes = d.getMinutes(),
            day     = formatDay(d.getDay()),
            month   = formatMonth(d.getMonth()),
            date    = d.getDate(),
            text    = "";

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // welcome text and image
        if (hours == 8) {
            text = "Gooodmorning! Time to wake up.";   
        } 
        else if (hours == 9) {
            text = "Aaaah, take a good and strong cup of coffee!";
        }
        else if (hours == 10 && hours < 13) {
            text = "Let's get some work done!";
        }
        else if (hours >= 13 && hours < 14) {
            text = "Let's have a well deserved break.";
        }
         else if (hours >= 14 && hours < 17) {
            text = "And get tons of more work done! Yeeey!";
        }
         else if (hours == 17 && hours < 19) {
            text = "Some running to get delicious food in town!";
        }
        else if (hours >= 19 && hours < 22) {
            text = "Alright, time to get some deserved beers.";
        }
        else if (hours == 22 && hours < 23) {
            text = "Get some sleep now. Tommorrow fresh and fruity!";
        }
        else {
            text = "Get some sleep now. Tommorrow fresh and fruity!";
            document.getElementById("background-image").src = "sleep.jpg";
        }


        // background image
        if (hours == 7) {
            document.getElementById('background-image').src = "morning.jpg";
        }
        else if (hours == 8) {
            document.getElementById('background-image').src = "morning.jpg";
        }
        else if (hours == 9) {
            document.getElementById('background-image').src = "coffee.jpg";
        }
        else if (hours >= 10 && hours < 13) {
            document.getElementById('background-image').src = "work.jpg";
        }
        else if (hours >= 13 && hours < 14) {
            document.getElementById('background-image').src = "break.jpg";
        }
        else if (hours >= 14 && hours < 17) {
            document.getElementById('background-image').src = "afternoon.jpg";
        }
        else if (hours >= 17 && hours < 19) {
            document.getElementById('background-image').src = "dinner.jpg";
        }
        else if (hours >= 19 && hours < 22) {
            document.getElementById('background-image').src = "beers.jpg";
        }
        else if (hours >= 22 && hours < 23) {
            document.getElementById('background-image').src = "sleep.jpg";
        }
        else { 
            document.body.style.backgroundImage = "linear-gradient(#00081C, #001954)";
            document.body.style.color = "white";
        }

        currentTime.innerHTML = hours + ':' + minutes;
        currentDate.textContent = day + ' ' + date + ' ' + month;
        welcomeText.textContent = text;
    }, 1000);
        
    function formatDay(w) {
        w = parseInt(w, 7);

        if (w < 0) {
            w = 0;
        } else if (w > 6) {
            w = 6;
        }

        var dayNames = [
            'Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
            'Donderdag', 'Vrijdag', 'Zaterdag'
        ];

        return dayNames[w];
    }

    function formatMonth(m) {
        m = parseInt(m, 10);

        if (m < 0) {
            m = 0;
        } else if (m > 11) {
            m = 11;
        }

        var monthNames = [
            'januari', 'februari', 'maart',
            'april', 'mei', 'juni',
            'juli', 'augustus', 'september',
            'oktober', 'november', 'december'
        ];

        return monthNames[m];
    }

    // animation clock: "tik-tak"
    var tl1 = new TimelineMax();
    tl1.to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 20, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 0, ease: Sine.easeInOut});

});

})();
