function ToggleTheme(){
    var body = document.querySelector('body');
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

function ToggleMenu() {
    if(isMobileView()){
        var toggleElements = document.querySelector('.menu');
        var adjustElement = document.querySelector('.nav');
        if (toggleElements.style.visibility === 'hidden') {
            adjustElement.style.display = 'block';
            toggleElements.style.visibility = 'visible';
            adjustElement.style.height = '50rem';
            adjustElement.style.padding="5rem 5rem";
        } else {
            adjustElement.style.display = 'flex';
            toggleElements.style.visibility = 'hidden';
            adjustElement.style.height = '7rem';
            adjustElement.style.padding="0";
        }
    }
}

window.addEventListener('resize', function() {
    if (isMobileView()) {
        adjustForMobileView();
    } else {
        adjustForDesktopView();
    }
});

function test(){
    if (isMobileView()) {
        adjustForMobileView();
    } else {
        adjustForDesktopView();
    }
}

function isMobileView() {
    return window.innerWidth <= 866;
}

function adjustForDesktopView() {
    var onclicks = document.querySelector('.menu-items');
    var menuButton = document.querySelector('.menu');
    var navElement = document.querySelector('.nav');
    menuButton.removeAttribute("style")
    navElement.removeAttribute("style")
    onclicks.onclick = null;
}


function adjustForMobileView() {
    var onclicks = document.querySelector('.menu-items');
    var menuButton = document.querySelector('.menu');
    var navElement = document.querySelector('.nav');
    onclicks.onclick=ToggleMenu();
    navElement.style.display = 'flex';
    menuButton.style.visibility = 'hidden';
    navElement.style.height = '7rem';
    navElement.style.padding="0";
}