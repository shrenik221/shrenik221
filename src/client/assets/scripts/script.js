var menu = document.getElementById('barIcon');
var nav = document.getElementById('nav-ul');
var exit = document.getElementById('exitMenu');

// console.log('This is loading')
// console.log(menu, nav, exit);

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hideMenu');
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.add('hideMenu');
    e.preventDefault();
});


let step_boxClass = document.getElementsByClassName("stepBox");

for(let i=0; i<step_boxClass.length; i++) {
    step_boxClass[i].addEventListener('click', function(e) {
        console.log(this)
        let step_contentClass = document.getElementsByClassName("stepContent");
        let currentActiveStepContent = document.getElementsByClassName("activeContent");
        let currentActiveStepBox = document.getElementsByClassName("currentBox");

        currentActiveStepContent[0].className = currentActiveStepContent[0].className.replace(" activeContent", "");
        currentActiveStepBox[0].className = currentActiveStepBox[0].className.replace(" currentBox", "");

        step_contentClass[i].className += " activeContent";
        step_boxClass[i].className += " currentBox";

        //this.classList.toggle('active-content');
        console.log(this.className);
        e.preventDefault();
    });
}

