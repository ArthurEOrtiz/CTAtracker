import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $("#loadTrains").click(function(){

    let request = new XMLHttpRequest();
    const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=ac29a956585544ffac8892ff962934a7&mapid=41020&outputType=JSON`;

    request.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response){
      $('.staNm').text(`${response.ctatt.eta[1].staNm}`);
      $('.rn').text(`${response.ctatt.eta[1].rn}`);

      const now = new Date();
      const arrival = parseInt(response.ctatt.eta[1].arrT[14] + response.ctatt.eta[1].arrT[15]);
      
      console.log(typeof arrival);
      console.log(now);

      //$('.arrT').text(`${}`);
      
    }
  });
  
});