const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (song) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (favSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              console.log(`${name} likes to ${activity} while listening to ${song}. They love to eat ${favFood} at ${favMeal} while watching or playing ${favSport}. Finally they extenguish their foes with the use of ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


//rl.close();

