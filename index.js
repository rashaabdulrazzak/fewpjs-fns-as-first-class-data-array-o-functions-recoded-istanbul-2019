function wakeDog(dogName,dogBreed) {
  const string = `Wake ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}
function leashDog(dogName,dogBreed) {
  const string=`Leash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}
function walkToPark(dogName,dogBreed) {
       const string = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}
function throwFrisbee(dogName,dogBreed) {
  const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
   console.log(string);
  return string;
}
function walkHome(dogName,dogBreed) {
  const string
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