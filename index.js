// // index.js
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

// fetchCoordsByIP(ip, (error, data )=>{
// if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
// console.log(data)

// fetchISSFlyOverTimes(data, (error, arr)=>{
// if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(arr)
// } );
//  });




// });


const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.map(((obj)=>{
    let dateTime = new Date();
    dateTime.setUTCSeconds(obj.risetime)
    console.log(`Next pass at ${dateTime} for ${obj.duration} seconds!`)
  }))

  
});