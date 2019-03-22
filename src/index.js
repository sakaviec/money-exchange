// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let amount = currency;
    
    let invL = ["H", "Q", "D", "N", "P"];
let invC = [50, 25, 10, 5, 1];
let result = {};
    
    if (amount == 0) {
    	return {}
    }
    else if (amount > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else {
    	for (let i = 0; i < invL.length; i++) {
    			let times = Math.floor(amount / invC[i]);
    			//console.log(invL[i]+": "+times);

    			let remainder = amount - invC[i] * times;
    			//console.log("Remainder: "+ remainder)
    			if (times > 0) {
    				amount = remainder;
    				result[invL[i]] = times;
    			}
    			//console.log(invL[i]+" — "+times+"; subtracted: "+remainder);
    			
    	}
    }

    //console.log(result);
    return result;
}

