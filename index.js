"use strict";

const url = "https://alluring-thunder-archaeology.glitch.me/movies";
function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    }
};
function fetchData() {
    fetch("https://alluring-thunder-archaeology.glitch.me/movies").then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(sleeper(500))
        .then(movies => {
        console.log(movies);
        $("#movieResult").empty();
        const html = movies.map(movie => {
            $("#movieResult").append(
                //const card =

                `<div class="card" id="full-card" xmlns="http://www.w3.org/1999/html">
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
                <button type="button" value="Edit">Edit</button>
                <button type="button" class="Delete" data-id=${movie.id}>Delete</button>
                <button type="button" value="submit">Save</button>
                </div>
            </div>
        </div>`)
        })
        console.log(html);
        addEventListeners();
    }).catch(error => {
        console.log(error);
    })
}


fetchData();

function AJAX(url, method = "GET", data) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    return fetch(url, options)
        .then(res => res.json())
        .then(responseData => responseData)
        .catch(err => err)
}

function deleteText(id){
    AJAX(url + "/" + id, "DELETE")
        .then(responseData => responseData)
}
    // deleteText(5)


function addEventListeners() {
    $('.Delete').click(function () {
        const id = $(this).attr("data-id")
        deleteText(id);
        fetchData();
    })
}

function addMovie() {
    AJAX(url, "POST", {
        title:"Batman",
        rating:"5"
    })
        .then(responseData => responseData)

}
     //   addMovie();

function editMovies () {
    AJAX(url).then(function (data) {
        let formHTML = `<select id="movieEdit" disable selected value>`
        data.map(function(movie) {
            formHTML += `<option value="${movie.id}">${movie.title}</option>`
        })
        formHTML += `<option hidden disabled selected value> Select a title </option>`
        formHTML += `</select>`
        $('#moviesToEdit').html(formHTML)
    })
}
editMovies();

$("#editBtn").on("click", function () {
    let movieEdits = {};
    movieEdits.id = editedMovieID,
        movieEdits.title = $("#movieEdit option:selected").text(),
        movieEdits.year = $(".yearEdit").val(),
        movieEdits.rating = $(".ratingEdit").val(),
        movieEdits.plot = $(".plotEdit").val()

    fetch(url + "/" + editedMovieID, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieEdits)
    }).then(fetchData).then(editMovies)
})
let editedMovieID = 0



// function deleteCard() {
//     let d = document.getElementById('full-card');
//     d.parentNode.removeChild(d);
//     return false;
// }

//
//     const editButton = document.getElementById('edit-button');
//     const saveEdit = document.getElementById('save-edits');
//     const listGroup = document.getElementById('list-group')
//
//
// editButton.addEventListener("click", function() {
//     listGroup.contentEditable = true;
//
// } );
//
// saveEdit.addEventListener("click", function() {
//     listGroup.contentEditable = false;
//
// } );





