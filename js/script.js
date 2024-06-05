// function startLoader(){
//     let counterElement = document.querySelector('.count');
//     let curentValue = 0;
     
//     function updateCounter( ){
//         if(curentValue === 100){
//             return;
//         }
//         curentValue += Math.floor(Math.random() * 10) + 1;

//         if(curentValue > 100){
//             curentValue = 100;
//         }
//         counterElement.textContent = curentValue;

//         let delay = Math.floor(Math.random() * 200) + 50;
//         setTimeout(updateCounter, delay);
//     }
//     updateCounter();
// }
// startLoader();

gsap.to('.count',0.25,{
    delay:0.2,
    opacity:0,
});
gsap.to('.bar',1.5,{
     delay:0.2,
     height:0,
     stagger:{
          amount:0.5
     },
     ease:'power4.inOut',
});
gsap.to('.count', 0.25, {
    delay: 1,
    opacity: 0,
    className: 'animate-bar-out'
});

gsap.to('.bar', 1, {
    delay: 1.5,
    height: 0,
    stagger: {
        amount: 0.5
    },
    ease: 'power4.inOut',
    // className: 'animate-bar-out'
});

// more.index

//scroll animation
//scroll animation


const header = document.querySelector('.header');
const letters = document.querySelectorAll('.letter ');
const logo = document.querySelector('.logo a'); // Changed selector to target the logo element directly
const websiteContent = document.querySelector('.website-content');

let lastScroll = 0;
const sectionHeight = 150;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    
    if (scrollY < 900) {
        websiteContent.style.position = "fixed";
        websiteContent.style.top = "0px";
    } else {
        websiteContent.style.position = "absolute";
        websiteContent.style.top = "900px";
    }
    const orderPairs = [
        [4, 5],
        [3, 6],
        [2, 7],
        [1, 8],
        [0, 9]
    ];
    orderPairs.forEach((pair, orderIndex) => {
        const startScroll = sectionHeight * orderIndex;

        if (scrollY >= startScroll) {
            const moveFactor = Math.min(
                1,
                (scrollY - startScroll) / sectionHeight
            );
            const translateY = -moveFactor * header.offsetHeight;
            pair.forEach((idx) => {
                const letter = letters[idx];
                gsap.to(letter, {
                    y: translateY,
                    zIndex: 1 - moveFactor,
                });
            });
        } else {
            pair.forEach((idx) => {
                const letter = letters[idx];
                gsap.to(letter, {
                    y: 0,
                    zIndex: 1,
                });
            });
        }
    });
    const buffer = 50;

    if (scrollY >= orderPairs.length * sectionHeight + buffer && !gsap.isTweening(logo)) {
       
        gsap.to(logo, {
            top: "0px",
            ease: "power1.out",
            overwrite: true,
          

        });
        gsap.to(".logo-revealer", {
            scaleY: 0,
            overwrite: true,
        });
    } else if (scrollY <= orderPairs.length * sectionHeight - 1 && !gsap.isTweening(logo)) {
        gsap.to(logo, {
            top: "20px",
            ease: "power1.out",
            overwrite: true,
        });
        gsap.to(".logo-revealer", {
            scaleY: 1,
            overwrite: true,
        });
    }
    lastScroll += scrollY; // Corrected the concatenation to addition
});

// marque
const marqueeElement = document.getElementById('marquee');
const surah = [
 'JOIN US!  · JOIN US!  · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US!  · JOIN US!  · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US! · JOIN US!   '
];

// Generate HTML for the marquee
const marqueeContent = surah.map(verse => `<span>${verse}</span>`).join('');
marqueeElement.innerHTML = marqueeContent;

