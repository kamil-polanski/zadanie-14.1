var flkty = new Flickity('.carousel', {
    hash: true,
    pageDots: false,
    cellAlign: 'left',
    lazyLoad: 2,




});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});