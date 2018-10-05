import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { backEnd } from './backEnd.js';
import $ from 'jquery';

$(document).ready(function(){
  let result = backEnd();
  $(".test").text(result);
})
