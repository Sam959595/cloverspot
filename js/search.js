document.addEventListener('DOMContentLoaded', function() {
    let d = $('body'),
    a = $('nav li:last-child'),
    b = $('aside'),
    e = $('aside input'),
    i = $('aside main:first-child div:first-child'),
    c = $('aside main:first-child div:first-child span'),
    r = $('aside main:first-child div:last-child span'),
    p = $('aside main:last-child ul'),
    v = 'visible',
    y = 'disguise',
    h = 'hide',
    x = 'disappear';

    a.click(function() {
        
        b[0].classList.add(v);
        d[0].classList.add(y);
    });
    c.click(function() {

        b[0].classList.remove(v);
        d[0].classList.remove(y);
    });

    e.click(function() {

        r[0].classList.add(h);
        i[0].classList.add(x);

        p[0].innerHTML = "";
    });
    r.click(function() {

        r[0].classList.remove(h);
        i[0].classList.remove(x);
    });
});

//

async function categories() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/nav.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('aside main:last-child ul');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}">${i[r].title}</a></li>`;
    };
};
categories();