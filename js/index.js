/* **************************************STARTS TOGGLE MENU************************************* */
let toggleNavStatus = false;
let toggleNavBtn = document.querySelector('.btn-toggle-nav');


let toggleNav = function(){
    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUL = document.querySelector('.nav-sidebar ul');
    let getSidebarTitle = document.querySelector('.nav-sidebar span');
    let getSidebarLinks = document.querySelectorAll(".nav-items");

    if (toggleNavStatus === false){
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebarTitle.style.opacity = "0.5";
        
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true){
        getSidebarUL.style.visibility = "hidden";
        getSidebar.style.width = "0px";
        // getSidebarTitle.style.opacity = "0";
       
        
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        
        toggleNavStatus = false;
    }
}

toggleNavBtn.addEventListener('click', toggleNav);

/* **************************************ENDS TOGGLE MENU************************************* */
/* ***************************************************************************************** */
/* ************************************* STARTS ACCORDION******************************* */
let questions = document.querySelectorAll('.faq-question');
let answers = document.querySelectorAll('.faq-answer');



for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block'){
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
};

