window.googletag = window.googletag || { cmd: [] }
googletag.cmd.push(() => {
    googletag.pubads().addEventListener('impressionViewable', (event) => {
    if (event.slot.getAdUnitPath().includes('formoney_mob_leaderboard') || event.slot.getAdUnitPath().includes('formoney_desk_leaderboard')) {
        document.getElementById('preloader').style.display = 'none';
        window.scrollTo(0, 0);
        document.body.classList.add('canScroll')
    }
    })
})

// animation.addEventListener('complete', function() {
//     document.getElementById('preloader').style.display = 'none';
//     window.scrollTo(0, 0);
//     document.body.classList.add('canScroll');
// });


if (!document.body.classList.contains('canScroll')) {
    window.googletag = window.googletag || { cmd: [] }
    googletag.cmd.push(() => {
    googletag.pubads().addEventListener('impressionViewable', (event) => {
        if (event.slot.getAdUnitPath().includes('formoney_mob_leaderboard') || event.slot.getAdUnitPath().includes('formoney_desk_leaderboard')) {
        document.getElementById('preloader').style.display = 'none';
        window.scrollTo(0, 0);
        document.body.classList.add('canScroll')
        }
    })
    })

    setTimeout(() => {
    if (!document.body.classList.contains('canScroll')) {
        document.getElementById('preloader').style.display = 'none';
        window.scrollTo(0, 0);
        document.body.classList.add('canScroll')
        }
    }, 2500)
}