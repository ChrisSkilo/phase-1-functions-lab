// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  //returns the number of blocks from pickUpLocation to Hq
  const hq = 42; // Scuber headquarters
     return Math.abs(pickUpLocation - hq); // return non-negative distances



}
function distanceFromHqInFeet(pickUpLocation) {
  const blocks = distanceFromHqInBlocks(pickUpLocation); //call distanceFromHqInBlocks to get the number of blocks
    return blocks * 264; //translates number of blocks in feet
}

function distanceTravelledInFeet(start, destination) {
  const distanceTravelled = Math.abs(start - destination); // Number of blocks travelled
  return blocks * 264; //number of feet travelled
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); // get the distance traveled in feet
  let fare;
  if (distance <= 400) {
    fare = 0;// first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400 * 0.02); // 2 cents per foot for distance between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    fare = 50; // flat fare for distance between 2000 and 2500 feet
  } else {
    fare = 'cannot travel that far'; // over 2500 distance not applicable
  }
  return fare;
}