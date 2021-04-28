//console.log('Hello world!');

// TODO - write your code here.


/* Functions */

    // declare and arrow function that makes random damage. Returns a random integer between 1 and 10
    const randomDamage = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
    
    // test log
    // console.log(randomDamage());

    // declare an arrow function named chooseOption. Two parameters named opt1 and opt 2.
    // chooseOption does two things.
        //declares and initializes a variable named randNum to either a 0 or 1, randomly
        // returns opt1 if rnadNum is equal to 0 otherwise return opt 2 (note: use a ternary operator)
        // the ? states "if the condition previous to the ? is true, then value ' ' otherwise (using ':') value 2; "

    // no return on the if statement as this would return and never check option 2 against the random number. THis creates a loop
    // where it breaks out of the loop and only logs when it lines up with 0 (option1) instead of checking against both.

    function chooseOption(opt1,opt2) {
        randNum = Math.floor(Math.random() * 2);
        if (randNum === 0) {
            opt1;
        } else {
            return opt2;
        }
    }
    // test log
    // console.log(chooseOption());

    function attackPlayer (health) {
        return health - randomDamage();
    }

    // test log
    //console.log(attackPlayer(50));

    // arrow function for players health
    function logHealth(player,health){
        console.log( player,health);
    }
    
    // test call
    // logHealth('Austin', 100);

    // logDeath function documents when a player dies
    const logDeath = (winner,loser) => {
        console.log(`${winner} defeated ${loser}`);
    }

    //test call
    // logDeath('austin','morgan');

    const isDead = (health) => {
        return health <= 0 ? true : false;
    }

    // test log
    // console.log(isDead(-1));

    // fight functions with four paramaters.
    // player1, player2, player1Health, player2Health

    function fight (player1, player2, player1Health, player2Health) {
     
    // while neither player is at or below 0, continue to run the loop
        while(player1Health > 0 && player2Health > 0){

            let attacker = chooseOption(player2, player1);

        // while the attacker is player 1, attack player 2, then log player2's health.
            if (attacker === player1) {
                player2Health = attackPlayer(player2Health);
                logHealth(player2, player2Health);
                if (isDead(player2Health) == true) {
                        logDeath(player1, player2);
                        break;
                    }
            } else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health) == true) {
                    logDeath(player2, player1);
                        break;
                    }
                }
            }
        }  
    

// call the fight, see if it works!
fight('Lula','Finn', 50, 50,);