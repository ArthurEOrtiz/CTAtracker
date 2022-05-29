export default class TrainTrackerService {
  static getTrainSchedule(stopId) {
    return fetch(`http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY}&mapid=${stopId}&outputType=JSON`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } 
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

/*
    return new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY}&mapid=${stopId}&outputType=JSON`;
      request.onload = function () {
        if (this.status === 200 && JSON.parse(request.response).ctatt.errCd === "0") {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    }); 
  }
} */
