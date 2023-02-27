// const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised');
// fetchMyIP().then((obj)=>{
// return  fetchCoordsByIP(obj);
// }).then((coords)=>{
//  const body = JSON.parse(coords)
// return fetchISSFlyOverTimes(body)
// }).then((data)=>{
// const passes = JSON.parse(data).response;
// console.log(passes)
// })


const {nextISSTimesForMyLocation} = require('./iss_promised');

nextISSTimesForMyLocation().then((passTime)=>{
  // const pass = JSON.parse(passTime).response;
const pass = passTime.response;

pass.map(((obj)=>{
    let dateTime = new Date();
    dateTime.setUTCSeconds(obj.risetime)
    console.log(`Next pass at ${dateTime} for ${obj.duration} seconds!`)
  }))
}).catch((error)=>{
  console.log("not success", error)
})