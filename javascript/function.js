/**
 * Created by stagiaire on 06/09/2018.
 */







function hauteur() {
    var canvas = document.querySelector('#mon_canvas');
    if (canvas.style.height != "300px"){
        canvas.style.height = "110px";
    } else {
        canvas.style.height = "100px";
    }
}

function couleur() {
    var canvas = document.querySelector('#mon_canvas');
    canvas.style.backgroundColor = "green";
}

function couleur2() {
    var canvas = document.querySelector('#mon_canvas');
    canvas.style.backgroundColor = "blue";
}

function dispa() {
    var canvas = document.querySelector('#mon_canvas');
    canvas.style.visibility = "hidden";
}

function reapa() {
    var canvas = document.querySelector('#mon_canvas');
    canvas.style.visibility = "visible";
}
