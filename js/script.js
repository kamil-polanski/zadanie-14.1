const data = [{
        title: `Odcinek AMC`,
        img: `images/DSC_0137.JPG`,
        desciption: `linii DISAMATIC`,
        id: `1`,
        cords: {
            lat: 50.137508,
            lng: 19.445713
        }
    },
    {
        title: `OTTO Junker`,
        img: `images/DSC_0257.JPG`,
        desciption: `zalewarka`,
        id: `2`,
        cords: {
            lat: 50.164369,
            lng: 19.462261
        }
    },
    {
        title: `Formierka HWS`,
        img: `images/DSC_0262.JPG`,
        desciption: ``,
        id: `3`,
        cords: {
            lat: 50.076869,
            lng: 19.444664
        }
    },
    {
        title: `Linia HWS`,
        img: `images/DSC_0268.JPG`,
        desciption: `składarka`,
        id: `4`,
        cords: {
            lat: 50.102355,
            lng: 19.581575
        }
    },
    {
        title: `ABB OCC40`,
        img: `images/DSC_0273.JPG`,
        desciption: `zalewarka`,
        id: `5`,
        cords: {
            lat: 50.343392,
            lng: 19.544064
        }
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

(function() {
    window.initMap = function() {
        const map = new google.maps.Map(document.querySelector('#map'), {
            zoom: 8.5,
            center: { lat: 50.343392, lng: 19.544064 },
        });
        data.forEach(function(ele, index) {
            console.log(ele.cords);
            const marker = new google.maps.Marker({
                position: ele.cords,
                map: map
            });
        });
    }
})();