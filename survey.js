const readline = require('readline');


let profile = {};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  profile.name = answer;


  //1

  rl.question(`What's an activity you like doing?`, (answer) => {
    profile.activity = answer;

    //2

    rl.question(`What do you listen to while doing that?`, (answer) => {
      profile.music = answer;
    
      //3

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        profile.whichMeal = answer;

        //4

        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          profile.favoriteMeal = answer;
        
          //5

          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            profile.sport = answer;
          
            //6

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              profile.superpower = answer;
            
              rl.close();
              console.log(profile);
            });
          });
        });
      });
    });
  });
});

