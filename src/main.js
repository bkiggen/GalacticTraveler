import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import GalacticTraveler from './backEnd.js';
import $ from 'jquery';

$(document).ready(function(){
  $(".infoForm").submit(function(event){
    event.preventDefault();
    let userDay = $(".day").val();
    let userMonth = $(".month").val();
    let userYear = $(".year").val();
    let userGender = $(".gender").val();
    let userLifestyle = $(".lifestyle").val();
    let trav = new GalacticTraveler(userDay, userMonth, userYear, userGender, userLifestyle);
    let trav2 = trav.calcAge().calcExpectancy().calcYearsLeft();
    console.log(trav2);
  });


});
