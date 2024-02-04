function ToggleTheme(){
    var body = document.querySelector('body');
    var theme = document.getElementById("")
    var theme = document.getElementById("theme");
    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
        theme.src="img/night.png"
    } else {
        body.classList.remove('night');
        body.classList.add('day');
        theme.src="img/day.png"
    }

}