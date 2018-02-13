//require('!style-loader!css-loader!./css/style.css');
require('./css/style.scss');
let people = require('./people.js'),
$ = require('jquery');

$('body').append('<h1>'+ people[0].name +'</h1>');
console.log('output ', people);
