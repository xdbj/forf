//resize box on fullscreen
window.addEventListener('resize', (evt) => { 
    if (window.innerHeight == screen.height) {
        document.getElementById("box").style.height = "1040px";

    } else {
        document.getElementById("box").style.height = "900px";
    }
});

