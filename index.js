"use strict";

fetch("https://alluring-thunder-archaeology.glitch.me/movies").then(response => {
    response.json().then(movies => {
        console.log(movies)
    });
});

