function wakeDog(dogName,dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName,dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName,dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName,dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName,dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName,dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function arrayso(dogName,dogBreed,routine = ['wakeDog','leashDog','walkToPark','throwFrisbee','walkHome','unleashDog']){
  let result=[]
  for(let i=0;i<Arrays.length; i++){
      Array[i](dogName,dogBreed);
      reult[i]= 
  }
}


function exerciseDog(dogName,dogBreed){
  arrayso(dogName,dogBreed,[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]);
}