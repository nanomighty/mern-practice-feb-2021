function tossCoin(){
    return Math.random() > 0.5 ? "heads" : "tails";
}

//create a function to see how long it will take to have a coin land on "heads" five times in a row

// function fiveHeadsSync(){
//     let headsCount = 0;
//     let attempts = 0;

//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`)
//         if (result === "heads"){
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     } 
//     return `It took ${attempts} to get 5 heads in a row`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads(){
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        
        while (headsCount < 5){
            attempts++;

            let result = tossCoin();
            console.log(`${result} was flipped`);
            
            if (result === "heads"){
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount == 5) {
            resolve(`It took ${attempts} attempts to get 5 heads in a row`);
        } 
        if (attempts > 100) {
            return reject("Coin has been flipped more than 100 times but has not gotten 5 heads in a row")
        }

    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");  //This runs right away!