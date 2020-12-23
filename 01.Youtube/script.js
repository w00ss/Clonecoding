//check window width
let navChanged = false;

const longNav = document.querySelector('.long-nav');
const shortNav = document.querySelector('.short-nav');

function checkWindow() {
    if(navChanged) {
        if(window.innerWidth > 1300) {
            longNav.classList.add('d-hidden');
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 1150) {
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 900) {
            longNav.classList.add('d-hidden');
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 800) {
            longNav.classList.add('d-hidden');
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 500) {
            longNav.classList.add('d-hidden');
            shortNav.classList.add('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        }
    } else {
        if(window.innerWidth > 1300) {
            longNav.classList.remove('d-hidden');
            shortNav.classList.add('d-hidden');
            main.classList.remove('short-margin');
            mainContainer.classList.remove('short-main');
        } else if(window.innerWidth > 1150) {
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 900) {
            longNav.classList.add('d-hidden');
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 800) {
            longNav.classList.add('d-hidden');
            shortNav.classList.remove('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        } else if(window.innerWidth > 500) {
            longNav.classList.add('d-hidden');
            shortNav.classList.add('d-hidden');
            main.classList.add('short-margin');
            mainContainer.classList.add('short-main');
        }
    }
}

window.addEventListener('resize', () => {
    checkWindow();
});


//navigation toggle
const navBtn = document.getElementById('menu');
const main = document.querySelector('main');
const mainContainer = document.querySelector('.main-container');
const posts = document.querySelectorAll('.post');

navBtn.addEventListener('click', () => {
    if(window.innerWidth > 1150) {
        navToggle();

        if(navChanged) {
            navChanged = false;
        } else {
            navChanged = true;
        }
    }
});

function navToggle() {
    const navs = document.querySelectorAll('nav');

    navs.forEach(nav => {
        nav.classList.toggle('d-hidden');
    });
    items.forEach(item => {
        item.classList.toggle('short-item');
    });
    posts.forEach(post => {
        post.classList.toggle('short-item');
    });
    main.classList.toggle('short-margin');
    mainContainer.classList.toggle('short-main');
}

//in navigation, more/less btn
const navMoreBtn = document.querySelector('.more');
const navLessBtn = document.querySelector('.less');
const moreTabs = document.querySelector('.tab-more');

navMoreBtn.addEventListener('click', () => {
    moreTabs.classList.toggle('d-hidden');
    navMoreBtn.classList.toggle('d-hidden');
});

navLessBtn.addEventListener('click', () => {
    moreTabs.classList.toggle('d-hidden');
    navMoreBtn.classList.toggle('d-hidden');
});


//itemBox
const items = document.querySelectorAll('.item');

items.forEach(item => {
    const dots = item.querySelector('.more-dots');
    const tools = item.querySelector('.mouseover');
    const dropdown = item.querySelector('.drop-box');
    
    item.addEventListener('mouseenter', () => {
        dots.classList.remove('o-hidden');
        tools.classList.remove('d-hidden');
    });

    item.addEventListener('mouseleave', () => {
        dots.classList.add('o-hidden');
        tools.classList.add('d-hidden');
    });

    const toolBox = tools.querySelectorAll('.box');
    toolBox.forEach(box => {
        const boxMore = box.querySelector('.box-more');

        box.addEventListener('mouseenter', () => {
            boxMore.style.transform = 'scaleX(1)';
            box.style.borderRadius = '0 2px 2px 0';
        });

        box.addEventListener('mouseleave', () => {
            boxMore.removeAttribute('style');
            box.removeAttribute('style');
        });
    });

    dots.addEventListener('click', () => {
        const currentWidth = document.body.getBoundingClientRect().width;

        if(!dropdown.classList.contains('d-hidden')){
            const dropWidth = dots.getBoundingClientRect().x + dropdown.getBoundingClientRect().width;
            
            if(dropWidth > currentWidth) {
                dropdown.classList.add('right-box');
            } else {
                dropdown.classList.remove('right-box');
            }

        }
    });
});


//button ripple effect
const circleBtn = document.querySelectorAll('.circle');

circleBtn.forEach(btn => {
    rippleEffect(btn);
});

function rippleEffect(btn) {
    btn.addEventListener('mousedown', () => {
        const circle = document.createElement('span');

        btn.appendChild(circle);
        setTimeout(() => {
            circle.style.width = checkCircle(btn) + 'px';
            circle.style.height = checkCircle(btn) + 'px';
            circle.style.opacity = '0.2';
        },50);

        btn.addEventListener('mouseup', () => {
            if(circle.offsetWidth >= checkCircle(btn)) {
                circle.style.opacity = '0';
                setTimeout(() => {
                    circle.removeAttribute('style');
                    circle.remove();
                },250);
            } else {
                setTimeout(() => {
                    circle.style.opacity = '0';
                    setTimeout(() => {
                        circle.removeAttribute('style');
                        circle.remove();
                    },250);
                },250);
            }
        });
    });
}

function checkCircle(button) {
    //check button width
    if(button.clientWidth >= 40) {
        return '48';
    } else {
        return '36';
    }
}


//drops
const drops = document.querySelectorAll('.drop');

drops.forEach(drop => {
    toggleDrops(drop);
});

function toggleDrops(drops) {
    const button = drops.querySelector('.button');
    const dropdown = drops.querySelector('.drop-box');

    button.addEventListener('click', () => {
        if(dropdown.classList.contains('d-hidden')){
            closeDrops();
            dropdown.classList.remove('d-hidden');
        } else {
            closeDrops();
        }
    });
}

function closeDrops() {
    const dropBoxes = document.querySelectorAll('.drop-box');

    dropBoxes.forEach(box => {
        box.classList.add('d-hidden');
    });
}

document.addEventListener('click', (e) => {
    drops.forEach(drop => {
        const dropbox = drop.querySelector('.drop-box');

        if(!dropbox.classList.contains('d-hidden')) {
            if(e.target.offsetParent === drop || e.target.offsetParent === dropbox || e.target.offsetParent === undefined || e.target.offsetParent === null) {
                return false;
            } else {
                closeDrops();
            }
        }
    });
});


//tooltip
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
    const box = tooltip.querySelector('.tooltip-box');

    tooltip.addEventListener('mouseenter', (e) => {

        box.classList.remove('d-hidden');
        
        setTimeout(() => {
            box.style.opacity = '0.95';
        },10);
    });

    tooltip.addEventListener('mouseleave', () => {
        box.removeAttribute('style');

        setTimeout(() => {
            box.classList.add('d-hidden');;
        },100);
    });

    tooltip.addEventListener('click', () => {
        box.removeAttribute('style');

        setTimeout(() => {
            box.classList.add('d-hidden');;
        },100);
    });
});


//notification dots
const notiTabs = document.querySelectorAll('.notification .tab');

notiTabs.forEach(tab => {
    const dots = tab.querySelector('.more-dots');
    
    tab.addEventListener('mouseenter', () => {
        dots.classList.remove('o-hidden');
    });

    tab.addEventListener('mouseleave', () => {
        dots.classList.add('o-hidden');
    });
});


//script load
