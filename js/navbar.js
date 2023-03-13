const toggle = $('#menu-toggle');
const slide = $('.slide')[0];
const header = $('.header')[0];

toggle.click(function () {
    if (!slide.classList.contains('active')) {
        $(slide).animate({'marginLeft': '0px'}, 500);
    } else {
        $(slide).animate({'marginLeft': '-1000px'}, 500);
    }
    slide.classList.toggle('active');
});

function handleScrollBar() {
    if ($(document).scrollTop() > window.innerHeight) {
        header.classList.add('active');
        return;
    }
    header.classList.remove('active');
}

$(document).ready(function () {
    handleScrollBar();
});

$(document).scroll(function () {
    handleScrollBar();
});

function closeNav() {
    if (slide.classList.contains('active')) {
        slide.classList.remove('active');
        $(slide).animate({'marginLeft': '-1000px'}, 500);
    }
}
