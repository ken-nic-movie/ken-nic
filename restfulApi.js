const serverURL = "https://alluring-thunder-archaeology.glitch.me/movies";

fetch(serverURL)
    .then(res => res.json())
    .then(data => console.log(data))







// const reviewObj = {
//     restaurant_id: 1,
//     name: 'Codey',
//     rating: 5,
//     comments: "This is a really good place for coding and eating"
// };
// const url = 'https://codeup-restful-example.glitch.me/reviews';
// const options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
// fetch(serverURL, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */
//
// function AJAX(url, method = "GET", data) {
//     const options = {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     };
//     return fetch(url, options)
//         .then(res => res.json())
//         .then(responseData => responseData)
//         .catch(err => err)
// }

// AJAX(serverURL + "/3")
//     .then(data => console.log(data));