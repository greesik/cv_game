let Silnik = {
    ini: () => {
        let skyCanvas = document.querySelector("#sky-canvas");
        let bgCanvas = document.querySelector("#bg-canvas");
        let fgCanvas = document.querySelector("#fg-canvas");

        let canvas = {
            skyCanvas: skyCanvas,
            bgCanvas: bgCanvas,
            fgCanvas: fgCanvas,
            skyCtx: skyCanvas.getContext("2d"),
            bgCtx: bgCanvas.getContext("2d"),
            fgCtx: fgCanvas.getContext("2d"),
        };

        let grafika = new Image();
        grafika.src = "img/stylesheet.png";

        grafika.addEventListener("load", function(){
            let grafika = this;
        });

        let dane = {
            nrKlatki: 0,
            canvas: canvas,
            grafika: grafika,
        };

        Obiekty.ini(dane);
        Silnik.start(dane);

    },
    start: (dane) => {
        let petla = () => {
            Silnik.wejscie(dane);
            Silnik.aktualizacje(dane);
            Silnik.render(dane);

            dane.nrKlatki++;

            window.requestAnimationFrame(petla)
        };

        petla();
    },

    wejscie: function(dane) {

    },

    aktualizacje: function(dane) {
        Animacje.aktualizacja(dane);
    },

    render: function(dane) {
        Render.aktualizacja(dane);
    },
};

window.onload = Silnik.ini();