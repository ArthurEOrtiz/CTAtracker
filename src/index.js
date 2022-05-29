import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TrainTrackerService from './js/train-tracker-service';

function getElements(response) {
  if (response.ctatt) {
    console.log("dude");
    $('.staNm').text(`${response.ctatt.eta[1].staNm}`);
    $('.rn').text(`${response.ctatt.eta[1].rn}`);
    $('.destNm').text(`${response.ctatt.eta[1].destNm}`);
    $('.arrT').text(`${response.ctatt.eta[1].arrT}`);
  } else {
    console.log(response.message);
  }
}

$(document).ready(function(){
  $("#loadTrains").click(function(event){
    event.preventDefault();
    let stopId = $('#stopId').val();
    console.log(stopId);
    (async function() {
      const response = await TrainTrackerService.getTrainSchedule(stopId);
      getElements(response);
    })();
  });
});
