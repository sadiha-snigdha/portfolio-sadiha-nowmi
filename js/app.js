var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Graphics Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (cursor) => {
    cursor1.style.top = cursor.pageY + 'px';
    cursor1.style.left = cursor.pageX + 'px';

    cursor2.style.top = cursor.pageY + 'px';
    cursor2.style.left = cursor.pageX + 'px';
}