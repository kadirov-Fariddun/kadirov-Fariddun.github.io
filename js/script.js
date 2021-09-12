window.onload = function () {
    let preloader = document.getElementById('preloader-page')
    preloader.classList.contains('done')
    setTimeout(() => {
        preloader.classList.add('done')
    }, 1500);
}

let header = document.querySelector('.header');
let headerFixed1 = document.querySelector('.header__fixed-1');
let headerTwo = document.querySelector('.header__two');
let static = document.querySelector('.static');
let l1 = document.querySelector('.l1');
let v2 = document.querySelector('.v2');
let v3 = document.querySelector('.v3');
let vv = document.querySelector('.vv');
let stop1 = document.querySelector('.stop');
let uli = document.querySelector('.uli');
let mediaMenu = document.querySelector('.media__menu');
let skill = document.querySelector('.skill');
let headFixed = document.querySelector('.header__top');
let hov1 = document.querySelector('.hov1');
let dal = document.querySelector('.dal');
let body = document.querySelector('body');
let plus = document.querySelector('.plus');
let plusEmail = document.querySelector('.plus__email');
//2
let hov2 = document.querySelector('.hov2');
let dal2 = document.querySelector('.dal2');
//3
let hov3 = document.querySelector('.hov3');
let dal3 = document.querySelector('.dal3');
//4
let hov4 = document.querySelector('.hov4');
let dal4 = document.querySelector('.dal4');
//5
let hov5 = document.querySelector('.hov5');
let dal5 = document.querySelector('.dal5');
//6
let hov6 = document.querySelector('.hov6');
let dal6 = document.querySelector('.dal6');

$(function () {
    $('.about__item-slider').slick({
        slidesToshow: 1,
        speed: 500,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.skill__slider').slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToscroll: 2,
        autoplay: true,
        dost: false,
        arrows: false,
        autoplaySpeed: 800,
        speed: 500,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    })
});



let q = 0;
let runq = setInterval(framesq, 50);
function framesq() {
    q = q + 1;
    if (q == 106) {
        clearInterval(runq);
    } else {
        let staticitemnumber = document.querySelectorAll(".static__item-number");
        staticitemnumber[0].textContent = q;
    }
};

let as = 0;
let runas = setInterval(frameas, 50);
function frameas() {
    as = as + 1;
    if (as == 432) {
        clearInterval(runas);
    } else {
        let staticitemnumber = document.querySelectorAll(".static__item-number");
        staticitemnumber[1].textContent = as;
    }
};

let ab = 0;
let runab = setInterval(frameab, 50);
function frameab() {
    ab = ab + 1;
    if (ab == 232) {
        clearInterval(runab);
    } else {
        let staticitemnumber = document.querySelectorAll(".static__item-number");
        staticitemnumber[2].textContent = ab;
    }
};

let ac = 0;
let runac = setInterval(frameac, 50);
function frameac() {
    ac = ac + 1;
    if (ac == 832) {
        clearInterval(runac);
    } else {
        let staticitemnumber = document.querySelectorAll(".static__item-number");
        staticitemnumber[3].textContent = ac;
    }
};



new WOW().init();

stop1.addEventListener('click', () => {
    mediaMenu.classList.toggle('heg')
})

l1.addEventListener('click', () => {
    v2.classList.toggle("v4");
})


let a = 0;
let run = setInterval(frames, 50);
function frames() {
    a = a + 1;
    if (a == 101) {
        clearInterval(run);
    } else {
        let counter = document.querySelector(".counter");
        counter.textContent = a + "%";
    }
};

let j = 0;
let runJ = setInterval(framesJ, 50);
function framesJ() {
    j = j + 1;
    if (a == 71) {
        clearInterval(runJ);
    } else {
        let counterJ = document.querySelector(".counterJ");
        counterJ.textContent = j + "%";
    }
};

let D = 0;
let runD = setInterval(framesD, 50);
function framesD() {
    D = D + 1;
    if (D == 83) {
        clearInterval(runD);
    } else {
        let counterD = document.querySelector(".counterD");
        counterD.textContent = D + "%";
    }
};


let W = 0;
let runW = setInterval(framesW, 50);
function framesW() {
    W = W + 1;
    if (W == 81) {
        clearInterval(runW);
    } else {
        let counterW = document.querySelector(".counterW");
        counterW.textContent = W + "%";
    }
};


let P = 0;
let runP = setInterval(framesP, 50);
function framesP() {
    P = P + 1;
    if (P == 61) {
        clearInterval(runP);
    } else {
        let counterP = document.querySelector(".counterP");
        counterP.textContent = P + "%";
    }
};
let bl = document.querySelector('.counter')
window.addEventListener('scroll', () => {
    let scrolldistance = window.scrollY
    let circlee = document.querySelectorAll('circle');
    if (scrolldistance > 4150) {
        circlee[0].classList.add('animates');
        circlee[1].classList.add('animates');
        circlee[2].classList.add('animates');
        circlee[3].classList.add('animates');
        circlee[4].classList.add('animates');
    }
})

window.addEventListener('scroll', () => {
    let scrolldistanc = window.scrollY
    if (scrolldistanc >= 680) {
        headFixed.classList.add('header__fixed')
    } else {
        headFixed.classList.remove('header__fixed')
    }
})

hov1.addEventListener('click', () => {
    dal.classList.toggle('dalb')
    hov1.classList.toggle('hovt')
})

hov2.addEventListener('click', () => {
    dal2.classList.toggle('dalb2')
    hov2.classList.toggle('hovt2')
})

hov3.addEventListener('click', () => {
    dal3.classList.toggle('dalb3')
    hov3.classList.toggle('hovt3')
})

hov4.addEventListener('click', () => {
    dal4.classList.toggle('dalb4')
    hov4.classList.toggle('hovt4')
})

hov5.addEventListener('click', () => {
    dal5.classList.toggle('dalb5')
    hov5.classList.toggle('hovt5')
})

hov6.addEventListener('click', () => {
    dal6.classList.toggle('dalb6')
    hov6.classList.toggle('hovt6')
})


headerFixed1.addEventListener('click', () => {
    header.classList.toggle('header__block')
    headerTwo.classList.toggle('header__two-block')
    headerFixed1.classList.toggle('header__fixed-11')
    static.classList.toggle('-static')
})


plus.addEventListener('click', () => {
    plusEmail.classList.toggle('plus__email-right')
    plus.classList.toggle('_plus')
})




/*
"use strict"

document.addEventListener('DOMcontentLoaded', function () {
    let form = document.getElementById('form');
    form.addEventListener('submit', formsend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input)

            if (input.classList.contains('._email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === "") {
                        formAddError(input);
                        error++;
                    }
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }
    // function email 
    function emailTest(input) {
        return !/^\w+([\.=]?\w+)*@\w+([\.=]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
})

*/