'use strict';

function getListOfRepos () { 
  let userInput= $('#gitUserName').val();
  let baseUrl = 'https://api.github.com/users/';
  let gitListReposApi = `${baseUrl}${userInput}/repos`;
  console.log(gitListReposApi);
  fetch (gitListReposApi)
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    displayListofRepos(responseJson)
  })
}

function watchForm() {
  $('.js-repoSelectForm').on('submit', event => {
    event.preventDefault();
    $('.js-listOfRepos').empty();
    getListOfRepos();
   $('#gitUserName').val("");
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

function displayListofRepos(responseJson) {
  $('.js-listOfReposContainer').removeClass('hidden');
  // for (let i = 0; i < responseJson.length; i++) {
    // Object.keys(responseJson);
  //   // $('.js-listOfRepos').append(`${responseJson[i]}`);
  // }
  responseJson.forEach(function(element) {
    Object.keys(element).forEach(function (key) {
     $('.js-listOfRepos').append(`${key}, ${element[key]} </br>`);
    });
 
});

// products2.forEach(function (o) {
//     Object.keys(o).forEach(function (k) {
//         console.log(k, o[k]); // show key and value
//     });
// });
  
}