"use strict";

const ul = document.querySelector('#list-group');

function fetchData() {
    fetch("https://alluring-thunder-archaeology.glitch.me/movies").then(response => {
        console.log(response);
        if (!response.ok) {
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
                <div style="width: 350px; height: 450px;">
                    <img src="${movie.poster}"  class="card-img-top" id="Image" width="100%" height="100%"  alt="movie poster here">
                </div>
                </div>
                <ul class="list-group">
                    <li class="list-item" id="plot">${movie.plot}</li>
                    <li class="list-item" id="director">${movie.director}</li>
                    <li class="list-item" id="actors">${movie.actors}</li>
                    <li class="list-item" id="genre">${movie.genre}</li>
                    <li class="list-item" id="rating">${movie.rating}</li>
                    <li class="list-item" id="year">${movie.year}</li>
                </ul>
                <div>
                <button id="editBtn">Edit</button>
                <button id="deleteBtn">Delete</button>
                </div>
            </div>
        </div>`)
        })
        console.log(html);
    }).catch(error => {
        console.log(error);
    })
}


// ul.addEventListener('click', (event) => {
//     if(event.target.tagName === 'BUTTON') {
//         const button = event.target;
//         const li = button.parentNode;
//         const ul = li.parentNode;
//         if(button.textContent === 'remove') {
//             ul.removeChild(li);
//         } else if(button.textContent === 'edit') {
//             const span = li.firstElementChild;
//             const input = document.createElement('input');
//             input.type = 'text';
//             input.value = span.textContent;
//             li.insertBefore(input, span);
//             li.removeChild(span);
//             button.textContent = 'save';
//         } else if(button.textContent === 'save') {
//             const input = li.firstElementChild;
//             const span = document.createElement('span');
//             span.textContent = input.value;
//             li.insertBefore(span, input);
//             li.removeChild(input);
//             button.textContent = 'edit';
//         }
//     }
// });

fetchData();