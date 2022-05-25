import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TrainTrackerService from './js/train-tracker-service';

/*function clearFields() {
  $('#stopId').val();
  $('.staNm').text('');
  $('.rn').text('');
  $('.destNm').text('');
  $('.arrT').text('');
} */

$(document).ready(function(){
  $("#loadTrains").click(function(){
    event.preventDefault();
    let stopId = $('#stopId').val();
    console.log(stopId);
    //clearFields();
    let promise = TrainTrackerService.getTrainSchedule(stopId);
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.staNm').text(`${body.ctatt.eta[1].staNm}`);
      $('.rn').text(`${body.ctatt.eta[1].rn}`);
      $('.destNm').text(`${body.ctatt.eta[1].destNm}`);
      $('.arrT').text(`${body.ctatt.eta[1].arrT}`);
      console.log(body);
    }, function(error) {
      console.log(`${error}`); 
    });

  });
  
});