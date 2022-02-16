let times = [3000, 5000, 9000, 10000, 15000];



const beeper = (times) => {
  for (let count = 0; count < times.length; count++){
    if (times[count] !== NaN || times[count] >= 0) {
    setTimeout( () => {
      process.stdout.write('.');
      console.log('beep');
    }, times[count]); 
    }
  };
}

beeper(times);