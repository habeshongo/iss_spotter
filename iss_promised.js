const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};


const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip
  return request(`http://ipwho.is/${ip}`)
};


const fetchISSFlyOverTimes = function(body){
  let coords = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}


const nextISSTimesForMyLocation = function (){
  return fetchMyIP().then(fetchCoordsByIP).then(fetchISSFlyOverTimes).then((body)=>{
const response = JSON.parse(body);
return response;
  })

}


//module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };