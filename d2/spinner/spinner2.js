process.stdout.write('hello from spinner1.js... \rheyyy\n');

let motions = ['\r|','\r/','\r-','\r\\'];
let cycles = motions.length;
let milS = 0;

for (let stage = 0; stage < cycles; stage++, milS += 200){
  setTimeout(() => {
    process.stdout.write(motions[stage]);
  }, milS);
  
}


setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, milS);