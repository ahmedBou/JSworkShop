// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await


console.log(`chop carrot`);
boilWater();
// for(let i=0; i <10000; i++){
//   console.log("still buzy...");
// }

function boilWater() {
  console.log('boiling water...');
  setTimeout(() => {
    console.log('done boiling water.');
    console.log("add carots");
    setTimeout(()=>{
      console.log('carrot are done');
      setTimeout(()=>{
        console.log("onion done");
      })
    }, 5000)
    console.log("chop onion");
  }, 10000);
}
