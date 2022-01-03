// main nav links
const homelink = document.querySelector('#homelink');
const aboutlink = document.querySelector('#aboutlink');
const resumelink = document.querySelector('#resumelink');
const portfoliolink = document.querySelector('#portfoliolink');

function homeLinkOn() {
    if (homelink.classList.contains('shortened')){
        homelink.classList.add('extended');
        homelink.classList.remove('shortened');
    }
    if (aboutlink.classList.contains('extended')){
        aboutlink.classList.add('shortened');
        aboutlink.classList.remove('extended');
    }
    if (resumelink.classList.contains('extended')){
        resumelink.classList.add('shortened');
        resumelink.classList.remove('extended');
    }
    if (portfoliolink.classList.contains('extended')){
        portfoliolink.classList.add('shortened');
        portfoliolink.classList.remove('extended');
    }
}

function aboutLinkOn() {
    if (aboutlink.classList.contains('shortened')){
        aboutlink.classList.add('extended');
        aboutlink.classList.remove('shortened');
    }
    if (homelink.classList.contains('extended')){
        homelink.classList.add('shortened');
        homelink.classList.remove('extended');
    }
    if (resumelink.classList.contains('extended')){
        resumelink.classList.add('shortened');
        resumelink.classList.remove('extended');
    }
    if (portfoliolink.classList.contains('extended')){
        portfoliolink.classList.add('shortened');
        portfoliolink.classList.remove('extended');
    }
}

function resumeLinkOn() {
    if (resumelink.classList.contains('shortened')){
        resumelink.classList.add('extended');
        resumelink.classList.remove('shortened');
    }
    if (homelink.classList.contains('extended')){
        homelink.classList.add('shortened');
        homelink.classList.remove('extended');
    }
    if (aboutlink.classList.contains('extended')){
        aboutlink.classList.add('shortened');
        aboutlink.classList.remove('extended');
    }
    if (portfoliolink.classList.contains('extended')){
        portfoliolink.classList.add('shortened');
        portfoliolink.classList.remove('extended');
    }
}

function portfolioLinkOn() {
    if (portfoliolink.classList.contains('shortened')){
        portfoliolink.classList.add('extended');
        portfoliolink.classList.remove('shortened');
    }
    if (homelink.classList.contains('extended')){
        homelink.classList.add('shortened');
        homelink.classList.remove('extended');
    }
    if (aboutlink.classList.contains('extended')){
        aboutlink.classList.add('shortened');
        aboutlink.classList.remove('extended');
    }
    if (resumelink.classList.contains('extended')){
        resumelink.classList.add('shortened');
        resumelink.classList.remove('extended');
    }
}

homelink.addEventListener('click', homeLinkOn);

aboutlink.addEventListener('click', aboutLinkOn);

resumelink.addEventListener('click', resumeLinkOn);

portfoliolink.addEventListener('click', portfolioLinkOn);


//Intersection Observer
const home = document.querySelector('#home');
const message = document.querySelector('#message');
const resume = document.querySelector('#resume');
const portfolio = document.querySelector('#portfolio');

const homeOptions = {rootMargin: '300px 0px -45px 0px', threshold: '0.6'};
const Options = {rootMargin: '-45px 0px 0px 0px', threshold: '0.3'};

const homeObserver = new IntersectionObserver((entries, homeObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) homeLinkOn(); 
        else return;
    });
},
homeOptions);
homeObserver.observe(home);

const messageObserver = new IntersectionObserver((entries, messageObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) aboutLinkOn(); 
        else return;
    });
},
Options);
messageObserver.observe(message);

const resumeObserver = new IntersectionObserver((entries, resumeObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) resumeLinkOn(); 
        else return;
    });
},
Options);
resumeObserver.observe(resume);

const portfolioObserver = new IntersectionObserver((entries, portfolioObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) portfolioLinkOn(); 
        else return;
    });
},
Options);
portfolioObserver.observe(portfolio);



// Hamburger & Overlay
const homeButton = document.querySelector('#homebutton');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');
const overlayUl = document.querySelector('#overlayUl');
const overlaylinks = document.querySelectorAll('.overlaylinks');
const overlayform = document.querySelector('#overlayform');
const contactMail = document.querySelector('#contactbutton');
const mailOpen = document.querySelector('#Mailopen');
const mailClose = document.querySelector('#Mailclose');

function toggleOverlayWithMenu() {
    
    btnHamburger.classList.toggle('open'); 

    if (overlay.classList.contains('fadeout')){
        overlay.classList.add('fadein');
        overlay.classList.remove('fadeout');
    }
    else if (overlay.classList.contains('fadein')){
        overlay.classList.add('fadeout');
        overlay.classList.remove('fadein');
    }
    else{
        overlay.classList.add('fadein');
    }



    if (overlayUl.classList.contains('hide')){
        overlayUl.classList.add('show');
        overlayUl.classList.remove('hide');
    }
    else if (overlayUl.classList.contains('show')){
        overlayUl.classList.add('hide');
        overlayUl.classList.remove('show');
    }
    else{
        overlayUl.classList.add('show');
    }

    if (overlayform.classList.contains('fadein')){
        overlayform.classList.add('fadeout');
        overlayform.classList.remove('fadein');
    }
}

function toggleOverlayForm() {
    if (overlayform.classList.contains('fadeout')){
        overlayform.classList.add('fadein');
        overlayform.classList.remove('fadeout');
    }
    else if (overlayform.classList.contains('fadein')){
        overlayform.classList.add('fadeout');
        overlayform.classList.remove('fadein');
    }
    else{
        overlayform.classList.add('fadein');
    }
}

function toggleMailButton(){
    mailOpen.classList.toggle('show');
    mailClose.classList.toggle('show');
}

function toggleOverlayWithHomeButton() {
    if (btnHamburger.classList.contains('open')) toggleOverlayWithMenu();
    if (overlayform.classList.contains('fadein')) toggleOverlayForm();
}


// Hamburger menu
btnHamburger.addEventListener('click', toggleOverlayWithMenu);


overlaylinks.forEach(overlaylinks => {
    overlaylinks.addEventListener('click', toggleOverlayWithMenu);
});

overlaylinks[3].addEventListener('click', toggleOverlayForm);

contactMail.addEventListener('click', () => {
    toggleOverlayForm();
    toggleMailButton();
});

homeButton.addEventListener('click', toggleOverlayWithHomeButton);

// Portfolio 
const grid = document.querySelector('#grid');
const projectImg1 = document.querySelector('#project1img');
const project1button = document.querySelector('#project1');
const project1buttonX = document.querySelector('#project1x');
const project1Text = document.querySelector('#project1text');
const projectImg2 = document.querySelector('#project2img');
const project2button = document.querySelector('#project2');
const project2buttonX = document.querySelector('#project2x');
const project2Text = document.querySelector('#project2text');
const dorito1 = document.querySelector('#dorito1');
const dorito2 = document.querySelector('#dorito2');

function toggleGridLine(){
    grid.classList.toggle('expand');
}

function toggleText1(){
    project1button.classList.toggle('show' && 'hide');
    project1buttonX.classList.toggle('hide');
    dorito2.classList.toggle('left');
}

function toggleText2(){
    project2button.classList.toggle('show' && 'hide');
    project2buttonX.classList.toggle('hide');
}


function toggleProject_1Info() {
    project1Text.classList.toggle('showMore');
    projectImg1.classList.toggle('zoom');
}

function toggleProject_2Info() {
    project2Text.classList.toggle('showMore');
    projectImg2.classList.toggle('zoom');
}

//Portfolio buttons

project1button.addEventListener('click', () => {
    toggleText1();
    toggleProject_1Info();
    project1Text.scrollIntoView({block: 'center'});
});


project2button.addEventListener('click', () => {
    toggleGridLine();
    toggleText2();
    toggleProject_2Info();
    project2Text.scrollIntoView();
});


dorito1.addEventListener('click', () => {
    toggleText1();
    toggleProject_1Info();
});

project1buttonX.addEventListener('click', () => {
    toggleText1();
    toggleProject_1Info();
});

dorito2.addEventListener('click', () => {
    toggleGridLine();
    toggleText2();
    toggleProject_2Info();
});

project2buttonX.addEventListener('click', () => {
    toggleGridLine();
    toggleText2();
    toggleProject_2Info();
});


// Form
const nameInput = document.querySelector('#nameInput');
const companyInput = document.querySelector('#companyInput');
const mailTo = document.querySelector('#mailto');
const submit = document.querySelector('#submit');
const exit = document.querySelector('#exit');
const notice = document.querySelector('#notice');

function nameInputLength(){
    return nameInput.value.length;
}

function companyInputLength(){
    return companyInput.value.length;
}

function showLine(){
    notice.classList.add('alert');
}

function addSubjectAfterClick(){
    if (nameInputLength() > 0 && companyInputLength() > 0) {
        mailTo.action = `mailto:Mohamedh.aly@hotmail.com?subject=Hi,%20I'm%20${nameInput.value}%20from%20${companyInput.value}`;
        return true;
    }
    else {
        return false;
    }
}

submit.addEventListener('click', () => {
        if (addSubjectAfterClick()) showLine();
    });

exit.addEventListener('click', () => {
    toggleOverlayForm();
    toggleMailButton();
});


