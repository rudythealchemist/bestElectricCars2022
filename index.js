//Local Electric cars data
const cars = [
    {
        id: 0,
        award: 'Winner: 2022 Tesla Model Y',
        img: 'https://cdn.motor1.com/images/mgl/QeWXzN/s4/tesla-model-y-performance-mic-in-china---november-2021.webp',
        model: 'Tesla Model Y',
        info: 'Cars.com’s inaugural Best Electric Vehicle award comes at a time when the availability of mass-market EVs is closer than ever to a tipping point. General adoption is still distant because the challenges that limit accessibility — such as affordability, truly fast public charging, education about range and more — haven’t been solved, but new EVs are popping up left and right, including several late additions that weren’t available for this year’s voting (Hyundai Ioniq 5, Kia EV6, Lucid Air and Rivian R1T among them). Dozens more models are waiting in the wings.',
    },
    {
        id: 1,
        award: 'Award: Second Place - Mustang Mach-E',
        img: 'https://images.cars.com/cldstatic/wp-content/uploads/ford-mustang-mach-e-2022-12-blue-exterior-front-scaled.jpg',
        model: 'Mustang Mach-E',
        info: 'he Ford Mustang Mach-E uses inspiration from one of the most iconic nameplates in automotive history to imbue a sense of excitement into the EV, even if it’s mostly skin deep apart from new GT versions. Being a five-seat, four-door SUV with ample occupant and cargo room strikes at the heart of the booming EV SUV market, and it’s available in multiple price, range and power configurations. ',
    },
    {
        id: 2,
        award: 'Award: Most Imporved - 2022 Volvo XC40 Recharge',
        img: 'https://images.cars.com/cldstatic/wp-content/uploads/volvo-xc40-recharge-twin-2022-05-exterior-profile-suv-white-scaled.jpg',
        model: '2022 Volvo XC40 Recharge twin: Nominee',
        info: 'When the original gas-only Volvo XC40 debuted for the 2019 model year, it was an instant favorite and a nominee for our Best of 2019 award thanks to its space efficiency, spunkiness and thoughtful features like an available integrated trash can in the center storage console. The substitution of an overly powerful, twin-motor electric powertrain has only strengthened our attachment to the little Volvo SUV.',
    },
    {
        id: 3,
        award: 'Award: Best Concept - Hyundai E concept',
        model: 'Hyundai E concept',
        img: 'https://cdn.vox-cdn.com/thumbor/k_jn_ipkOusA-ge4c_xdHBiHtLM=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23022367/48643_HyundaiMotorUnveilsSEVENConceptSegment_bustingSUEVfortheIONIQBrand.jpg',
        info: 'Hyundai revealed a new electric vehicle concept at the 2021 Los Angeles Auto Show, showing how its scalable EV platform can be stretched to accommodate extra-large SUVs. The Hyundai Seven is built on the automaker’s Electric-Global Modular Platform (E-GMP), which also underpins the upcoming Ioniq 5, Kia EV6, and Genesis GV60',
    },
];

// Buttons nav + sidebar nav+ overlay
const closeOverlayBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const burgerBtn = document.querySelector('.burger-icon');//burger menu
const sideNav = document.querySelector('.sidenav');//sidenav
const closeBtn = document.querySelectorAll('.menu');//close menu
const logo = document.querySelector('.fa-solid');//nav logo



//Scroll btns
const prevBtn = document.querySelector('.fa-square-caret-left');
const randBtn = document.getElementById('random');
const nextBtn = document.querySelector('.fa-square-caret-right');

//select items
const img = document.getElementById('e-car');
const award = document.getElementById('award');
const info = document.getElementById('info');

// burger meu button
burgerBtn.addEventListener('click', () => {
    // if sidenav does NOT contain class, then add, else remove.
    if (!sideNav.classList.contains('showSidenav')) {
        // console.log(sidenav.classList.contains('sidenav'));
        sideNav.classList.toggle('showSidenav');
        burgerBtn.classList.toggle('open');
        logo.style.color = '#ffffff';//toggle logo color when clicked
        // if sidenav contains class, then remove.
    } else {
        sideNav.classList.toggle('showSidenav');
        logo.style.color = '#295ab4';
        burgerBtn.classList.toggle('open');
    }
    // close sidenav when menu items are clicked
    sideNav.addEventListener('click', function () {
        sideNav.classList.toggle('showSidenav');
        burgerBtn.classList.toggle('open');
        logo.style.color = '#295ab4';
    });
});


// Modal on timer + close btn
function timer() {
    overlay.classList.add('show-overlay');
}
setTimeout(timer, 10000);
// close modal btn
closeOverlayBtn.addEventListener('click', () => {
    // overlay.classList.contains('show-overlay');
    overlay.classList.remove('overlay');
    overlay.classList.add('hide-modal');
    // modal.classList.toggle('overlay');
});


// set starting point for array, i is iterator,can be any name e.g currentItem
let currentCar = 0;//Global variable
//load initial item, page won't reload, how awesome is that!//
window.addEventListener('DOMContentLoaded', function () {
    // console.log('has loaded ');
    showCar();
});
// Call back function
// show cars based on img
function showCar() {
    const item = cars[currentCar];//currentItem var itterates through array.
    img.src = item.img;
    award.textContent = item.award;
    info.textContent = item.info;
}
// show next car
nextBtn.addEventListener('click', () => {
    currentCar++;
    if (currentCar > cars.length - 1) {
        currentCar = 0;
    }
    showCar();
});
// show previous car
prevBtn.addEventListener('click', () => {
    currentCar--;
    if (currentCar < 0) {
        currentCar = cars.length - 1;
    }
    showCar();
});
// //Show random car and info
randBtn.addEventListener('click', () => {
    currentCar = Math.floor(Math.random() * cars.length);
    // console.log(currentCar);
    showCar();
});
// // Random Btn
