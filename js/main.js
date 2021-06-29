const fa = document.getElementById('fa');

fa.addEventListener('input', function (evt) {
    let fav = fa.value;
    let grounds = fav * 21 / 12;
    let wa = fav * 340 / 12;
    let pu = wa / 3;

    say(grounds, wa, pu);
});

function say(grounds, wa, pu) {
    const groundsparagraph = document.getElementById('grounds');
    groundsparagraph.innerText = grounds.toFixed(0);

    const water = document.getElementById('water');
    water.innerText = Math.round(wa / 10) * 10;

    const pulses = document.getElementById('pulses');
    let pu1 = Math.round(pu / 10) * 10;
    pulses.innerHTML = "<span>" + pu1 + "<br>" + pu1 * 2 + "<br>" + pu1 * 3; 

}

/* notes for what to do next 
    Simple styling with neumorhpic border => https://themesberg.com/blog/tutorial/neomorphic-elements-css-html-tutorial
*/