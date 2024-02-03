//To ToggleTheme from day to night or night to day
function ToggleTheme(){
    var body = document.querySelector('body');
    var theme = document.getElementById("")
    var theme = document.getElementById("theme");
    if (body.classList.contains('day')) {
        // If it is, remove "day" class and add "night" class
        body.classList.remove('day');
        body.classList.add('night');
        theme.src="img/night.png"
    } else {
        // If it's not, remove "night" class and add "day" class
        body.classList.remove('night');
        body.classList.add('day');
        theme.src="img/day.png"
    }

}