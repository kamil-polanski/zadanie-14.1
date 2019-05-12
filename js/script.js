(function() {
    window.initMap = function() {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
})();

const data = [{
        title: `Odcinek AMC`,
        img: `images/DSC_0137.JPG`,
        desciption: `linii DISAMATIC`,
        id: `1`
    },
    {
        title: `OTTO Junker`,
        img: `images/DSC_0257.JPG`,
        desciption: `zalewarka`,
        id: `2`
    },
    {
        title: `Formierka HWS`,
        img: `images/DSC_0262.JPG`,
        desciption: ``,
        id: `3`
    },
    {
        title: `Linia HWS`,
        img: `images/DSC_0268.JPG`,
        desciption: `składarka`,
        id: `4`
    },
    {
        title: `ABB OCC40`,
        img: `images/DSC_0273.JPG`,
        desciption: `zalewarka`,
        id: `5`
    },

];

(function() {
    const output = document.querySelector(`#template`).innerHTML;
    Mustache.parse(output);
    let generated = ``;
    for (var i = 0; i < data.length; i++) {
        generated += Mustache.render(output, data[i]);
        console.log(generated);
    }
    const results = document.querySelector(`#results`);
    results.insertAdjacentHTML(`beforeend`, generated);
})();

const flkty = new Flickity(`.carousel`, {
    hash: true,
    pageDots: false,
    cellAlign: `left`,
    lazyLoad: 2
});

const progressBar = document.querySelector(`.progress-bar`);

flkty.on(`scroll`, function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + `%`;
});

const button = document.querySelectorAll(`.reset`);

for (ele of button) {
    ele.addEventListener(`click`, function() {
        flkty.select(0);
    });
}