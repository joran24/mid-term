// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18
console.log('This is the current Twitter stockprice:',twitter.stockPrice)

// 2. Bracket notation:
twitter['ceo'] = 'Jack Dorsey'
console.log('This is the current CEO of Twitter:',twitter['ceo'])

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";

twitter['address'] = twittersAddress
console.log('This is Twitter\'s address:',twitter['address'])
//I used bracket notation to add the variable twittersAddress to the object "twitter."

// 4. Array:
var twitterArray = ['aplusk was a big deal','Ellen has millions of followers','Katy Perry has the most followers']
twitter['array'] = twitterArray

// 5. Loop through array:
for (var i = 0; i < twitterArray.length; i++) {
	console.log('This is one of the values I get from looping through my "twitterArray":',twitterArray[i])
}

// 6. Invoke countCharacters:
twitter.countCharacters(twitterArray[1])
//The function should return the length of the string at Index 1 in the array
console.log('The length of the tweet: "Ellen has millions of followers" is:',twitter.countCharacters(twitterArray[1]))

// 7. Loop through twitter object:

for (var key in twitter){
	console.log('This is one of the key\'s on my "twitter" object:',key)
}
