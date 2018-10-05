import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import GalacticTraveler from './backEnd.js';
import $ from 'jquery';

$(document).ready(function(){
  $(".infoForm").submit(function(){

  });
  let trav = new GalacticTraveler("15", "1", "1984", "male", "healthy");
  let trav2 = trav.calcAge().calcExpectancy().calcYearsLeft();
  console.log(trav2);
});
