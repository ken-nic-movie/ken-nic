"use strict";
function fetchData() {
    fetch("https://alluring-thunder-archaeology.glitch.me/movies").then(response => {
        console.log(response);
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(movies => {
        console.log(movies);
        const html = movies.map(movie => {
            $("#movieResult").append(

                //const card =
                `<div class="card">
            <div id="movie" class="card-header">${movie.title}</div>
            <div class="card-body">
                <div class="text-center">
                    <img src="${movie.poster}" class="card-img-top" id="Image" alt="movie poster here">
                </div>
                <ul class="list-group">
                    <li class="list-item" id="plot">${movie.plot}</li>
                    <li class="list-item" id="director">${movie.director}</li>
                    <li class="list-item" id="actors">${movie.actors}</li>
                    <li class="list-item" id="genre">${movie.genre}</li>
                    <li class="list-item" id="rating">${movie.rating}</li>
                    <li class="list-item" id="year">${movie.year}</li>
                </ul>
            </div>
        </div>`)
        })
        console.log(html);
    }).catch(error => {
        console.log(error);
    })
}
fetchData();