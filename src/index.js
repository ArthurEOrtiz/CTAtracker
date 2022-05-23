import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $("#loadTrains").click(function(){

    let request = new XMLHttpRequest();
    const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=ac29a956585544ffac8892ff962934a7&mapid=41020&outputType=JSON`;

    request.onreadystatechange = function(){

      console.log(this.readyState);

    };
    request.open("GET", url, true);
    request.send();
  });
  
});