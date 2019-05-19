const data = [{
        title: `Zalew Chechło`,
        img: `images/chechlo.jpg`,
        desciption: `Trzebinia`,
        id: `1`,
        cords: {
            lat: 50.137508,
            lng: 19.445713
        }
    },
    {
        title: `Zalew Balaton`,
        img: `images/balaton.jpg`,
        desciption: `Trzebinia`,
        id: `2`,
        cords: {
            lat: 50.164369,
            lng: 19.462261
        }
    },
    {
        title: `Zamek Lipowiec`,
        img: `images/babice14.jpg`,
        desciption: ``,
        id: `3`,
        cords: {
            lat: 50.076869,
            lng: 19.444664
        }
    },
    {
        title: `Zamek Tenczyn`,
        img: `images/tenczyn.jpg`,
        desciption: `Rudno`,
        id: `4`,
        cords: {
            lat: 50.102355,
            lng: 19.581575
        }
    },
    {
        title: `Pustynia Błędowska`,
        img: `images/pustynia.jpg`,
        desciption: `Klucze`,
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
    data.forEach(function(ele) {
        generated += Mustache.render(output, ele);
        console.log(generated);
    });
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
            center: data[0].cords,
        });
        data.forEach(function(ele, index) {
            console.log(ele.cords);
            const marker = new google.maps.Marker({
                position: ele.cords,
                map: map
            });
            marker.addListener('click', function() {
                flkty.select(index);
            });
        });
        flkty.on('change', function(index) {
            map.panTo(data[index].cords);
            map.setZoom(10);
        });
    }
})();