const circleBtn = document.querySelectorAll('.circle');

circleBtn.forEach(btn => {
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
});

function checkCircle(button) {
    if(button.clientWidth >= 40) {
        return '48';
    } else {
        return '36';
    }
}

const headerDrops = document.querySelectorAll('header .drop');

headerDrops.forEach(drop => {
    const button = drop.querySelector('.button');
    const dropdown = drop.querySelector('.drop-box');

    button.addEventListener('click', () => {
        if(dropdown.classList.contains('d-hidden')){
            closeDrops();
            dropdown.classList.remove('d-hidden');
        } else {
            closeDrops();
        }
    });
});

const postDrops = document.querySelectorAll('.post .drop');

postDrops.forEach(drop => {
    const button = drop.querySelector('.button');
    const dropdown = drop.querySelector('.drop-box');

    button.addEventListener('click', () => {
        if(dropdown.classList.contains('d-hidden')){
            closeDrops();
            dropdown.classList.remove('d-hidden');
        } else {
            closeDrops();
        }
    });
});


function closeDrops() {
    const drops = document.querySelectorAll('.drop-box');

    drops.forEach(drop => {
        drop.classList.add('d-hidden');
    });
}


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

const items = document.querySelectorAll('.item');

items.forEach(item => {
    const dots = item.querySelector('.more-dots');
    const tools = item.querySelector('.mouseover');
    const dropdown = item.querySelector('.drop-box');
    
    item.addEventListener('mouseover', () => {
        dots.classList.remove('o-hidden');
        tools.classList.toggle('d-hidden');
    });

    item.addEventListener('mouseout', () => {
        checkDots(dots, dropdown)
        tools.classList.toggle('d-hidden');
    });

    const toolBox = tools.querySelectorAll('.box');
    toolBox.forEach(box => {
        const boxMore = box.querySelector('.box-more');

        box.addEventListener('mouseover', () => {
            boxMore.style.transform = 'scaleX(1)';
            box.style.borderRadius = '0 2px 2px 0';
        });

        box.addEventListener('mouseout', () => {
            boxMore.removeAttribute('style');
            box.removeAttribute('style');
        });
    });

    dots.addEventListener('click', () => {
        if(dropdown.classList.contains('d-hidden')){
            hiddenDots();
            closeDrops();
            dropdown.classList.remove('d-hidden');
            dots.classList.remove('o-hidden');
        } else {
            hiddenDots();
            closeDrops();
        }
    });
});

function checkDots(btn, box) {
    if(box.classList.contains('d-hidden')) {
        btn.classList.add('o-hidden');
    } else {
        btn.classList.remove('o-hidden');
    }
}

function hiddenDots() {
    const dots = document.querySelectorAll('.more-dots');

    dots.forEach(dot => {
        dot.classList.add('o-hidden');
    });
}

const notiTabs = document.querySelectorAll('.notification .tab');

notiTabs.forEach(tab => {
    const dots = tab.querySelector('.more-dots');
    
    tab.addEventListener('mouseover', () => {
        dots.classList.toggle('o-hidden');
    });

    tab.addEventListener('mouseout', () => {
        dots.classList.toggle('o-hidden');
    });
});

document.addEventListener('click', (e) => {
    const drops = document.querySelectorAll('.drop');

    drops.forEach(drop => {
        const dropbox = drop.querySelector('.drop-box');

        if(!dropbox.classList.contains('d-hidden')) {
            if(e.target.offsetParent === drop|| e.target.offsetParent === dropbox || e.target.offsetParent === undefined || e.target.offsetParent === null) {
                return false;
            } else {
                closeDrops();
            }
        }
    });
});