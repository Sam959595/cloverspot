document.addEventListener('DOMContentLoaded', function() {
    let q = $('main ul li:nth-child(2)'),
    o = $('.includes')[0],
    u = 'x';

    q.click(function() {
        o.load(u);
    });

    //

    let s = $('html'),
    d = $('body'),
    a = $('.attachment li:last-child'),
    b = $('aside'),
    e = $('aside input'),
    i = $('aside > div:first-child div:first-child'),
    c = $('aside > div:first-child div:first-child span'),
    r = $('aside > div:first-child div:last-child span'),
    p = 'no-scroll',
    v = 'visible',
    h = 'hide',
    x = 'disappear';

    a.click(function() {
        b[0].classList.add(v);
        s[0].classList.add(p);
        d[0].classList.add(p);
    });
    c.click(function() {
        b[0].classList.remove(v);
        s[0].classList.remove(p);
        d[0].classList.remove(p);
    });

    e.click(function() {
        r[0].classList.add(h);
        i[0].classList.add(x);
    });
    r.click(function() {
        r[0].classList.remove(h);
        i[0].classList.remove(x);
    });
});

//

$(window).ready(function() {
    async function mm() {
        let t = await fetch('json/nav.json'),
        i = await t.json(),
        r = null,
        e = $('aside > div:last-child ul:first-child')[0];
    
        for (r in i) {
    
            e.innerHTML +=
            `<li>
                <a href="${i[r].href}">
                    <p>${i[r].title}</p>
                </a>
            </li>`;
        };
    };
    mm();
    
    //
    
    async function tt() {
        let t = await fetch('json/general.json'),
        i = await t.json(),
        r = null,
        e = document.querySelector('aside > div:last-child ul:last-child');
    
        i = i.splice(0, 5);
    
        for (r in i) {
    
            e.innerHTML +=
            `<li>
                <a href="${i[r].href}">
                    <div>
                        <div style="background-image: url(${i[r].image_mini})"></div>
                    </div>
                    <div>
                        <time datetime="${i[r].date}"></time>
                        <h5>${i[r].title}</h5>
                    </div>
                </a>
            </li>`;
        };
    };
    tt();
});