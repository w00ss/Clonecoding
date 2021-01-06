//Click animation
const clickElements = document.querySelectorAll('.click-animation');

clickElements.forEach(el => {
    el.addEventListener('mousedown', () => {
        el.style.transform = 'scale(0.9)';
    });
    
    el.addEventListener('mouseup', () => {
        el.removeAttribute('style');
    });
});

//Header shadow
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        header.removeAttribute('style');
    } else {
        header.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.1)';
    }
});

//Header dropdown toggle maker
function headerDrops(drops) {
    this.drop = drops;
    this.btn = drops.querySelector('.button');
    this.dropdown = drops.querySelector('.drop');
    this.icon = drops.querySelector('path');
}

//Navigaiton Dropdown
const shortNavDrops = new headerDrops(document.querySelector('.short-nav .drops'));

shortNavDrops.btn.addEventListener('click', () => {
    if(shortNavDrops.dropdown.classList.contains('d-hidden')) {
        closeIcons();
        closeDrops();
        shortNavDrops.dropdown.classList.remove('d-hidden');
        shortNavDrops.btn.classList.add('nav-active');
        shortNavDrops.icon.classList.remove('icon-black');
        shortNavDrops.icon.classList.add('icon-white');
    } else {
        closeIcons();
        closeDrops();
    }
});

//Notification Dropdown
const notificationDrops = new headerDrops(document.querySelector('.notification'));

notificationDrops.btn.addEventListener('click', () => {
    if(notificationDrops.dropdown.classList.contains('d-hidden')) {
        closeIcons();
        closeDrops();
        notificationDrops.icon.classList.add('icon-black');
        notificationDrops.dropdown.classList.remove('d-hidden');
        setTimeout(() => {
            notificationDrops.dropdown.style.opacity = '1';
            notificationDrops.dropdown.style.top = '72px';
        },100);
    } else {
        notificationDrops.dropdown.removeAttribute('style');
        setTimeout(() => {
            closeIcons();
            closeDrops();
        },100);
    }
});

//Message Dropdown
const messageDrops = new headerDrops(document.querySelector('.message'));

messageDrops.btn.addEventListener('click', () => {
    if(messageDrops.dropdown.classList.contains('d-hidden')) {
        closeIcons();
        closeDrops();
        messageDrops.icon.classList.add('icon-black');
        messageDrops.dropdown.classList.remove('d-hidden');
        setTimeout(() => {
            messageDrops.dropdown.style.right = '0';
        },100);
    } else {
        messageDrops.dropdown.removeAttribute('style');
        setTimeout(() => {
            closeIcons();
            closeDrops();
        },100);
    }
});

//Header-more Dropdown
const headerMoreDrops = new headerDrops(document.querySelector('.header-more'));

headerMoreDrops.btn.addEventListener('click', () => {
    toggleDrops(headerMoreDrops.dropdown,headerMoreDrops.icon);
});

//Dropdown checker
function toggleDrops(drop,icon) {
    if(drop.classList.contains('d-hidden')) {
        closeDrops();
        closeIcons();
        icon.classList.add('icon-black');
        drop.classList.remove('d-hidden');
    } else {
        closeDrops();
    }
}

function closeDrops() {
    const drops = document.querySelectorAll('.drop');
    
    drops.forEach(drop => {
        drop.removeAttribute('style');
        drop.classList.add('d-hidden');
    });
}

function closeIcons() {
    const drops = document.querySelectorAll('.drops');

    drops.forEach(drop => {
            const icon = drop.querySelector('path');
            icon.classList.remove('icon-black');
            icon.classList.add('icon-gray');

            shortNavDrops.icon.classList.add('icon-black');
            shortNavDrops.icon.classList.remove('icon-gray');
            shortNavDrops.btn.classList.remove('nav-active');
    });
}

function checkClickedDrops(e) {

    if(e.parentElement) {
        if(containDrops(e)) {
    
        } else {
            closeDrops();
            closeIcons();
        }
    } else {
        closeDrops();
        closeIcons();
    }

    function containDrops(el) {
        let a = false;

        for(let i = 0; i < 10; i++) {
            if(el === null) {
                a = false
                i = 100;
            } else {
                if(el.classList.contains('drops')) {
                    a = true;
                    i = 100;
                } else {
                    el = el.parentElement;
                    i++;
                }
            }
        }
        if(a) {
            return true;
        } else {
            return false;
        }
    }
}


window.addEventListener('click', e => {
    checkClickedDrops(e.target);
});


//Message-tab hover
const messageTabs = document.querySelectorAll('.message-recommand-tab');

messageTabs.forEach(tab => {
    const deleteIcon = tab.querySelector('.message-user-del');

    tab.addEventListener('mouseenter', () => {
        deleteIcon.style.display = 'flex';
    });

    tab.addEventListener('mouseleave', () => {
        deleteIcon.removeAttribute('style');
    });
});


//Items hover event
const items = document.querySelectorAll('.item');

items.forEach(item => {
    const itemType = item.querySelector('.item-type');
    const itemHover = item.querySelector('.item-hover');

    item.addEventListener('mouseenter', () => {
        itemType.classList.add('o-hidden');
        itemHover.classList.remove('o-hidden');
    });

    item.addEventListener('mouseleave', () => {
        itemType.classList.remove('o-hidden');
        itemHover.classList.add('o-hidden');
    });
});