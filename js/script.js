const flkty = new Flickity('.carousel', {
    hash: true,
    pageDots: false,
    cellAlign: 'left',
    lazyLoad: 2,
});

const progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

const button = document.querySelectorAll('.reset');

for (ele of button) {
    ele.addEventListener('click', function() {
        flkty.select(0);
    });
}