import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import GalacticTraveler from './backEnd.js';
import $ from 'jquery';

$(document).ready(function(){
  let trav = new GalacticTraveler("15", "1", "1984", "male", "healthy");
  let test = trav.calcAge();
  console.log(test);
})
