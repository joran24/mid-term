// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(num1,num2){
	var product = num1 * num2
	return product
}

console.log('This function should multiply 2 and 3 and output:',multiply(2,3))

// whatForLunch
var whatForLunch = function(name,food){
	var outputString = name +' had ' + food + ' for lunch today'
	return outputString
}
console.log(whatForLunch('Joran','no food'))

// isLargerThan100
var isLargerThan100 = function(number){
	if(number > 100){
		return number + ' is greater than 100.'
	} else {
		return number + ' is not greater than 100.'
	}
}

console.log(isLargerThan100(24))
console.log(isLargerThan100(1989))

// anyEvens
var anyEvens = function(array){
	
	for (var i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0){
			console.log('It is '+true+' that '+array[i]+' is even.')
		} else if(array[i] % 2 === 1){
			console.log('It is '+false+' that '+array[i]+' is even.')
		}
	}
}

anyEvens([3,6,9,12])

// printDataType

//I got stuck on validating the function as a data type and ran out of time for this test and did not get to FizzBuzz beause of that

/*var printDataType = function(collection){
	if(Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++) {
			if(collection[i] === typeof object){
				console.log('I am an array')
			} else if (collection[i] === typeof function{
				console.log('I am a function')
			} else 
		}

	}
}
*/

// isDivisibleBy
var isDivisibleBy = function (num1, num2){
	if(num1%num2 === 0){
		return 'It is ' + true + ' that '+ num1 + ' is evenly divisible by ' + num2 + '.'
	}else {
		return 'It is ' + false + ' that '+ num1 + ' is evenly divisible by ' + num2 + '.'
	}
}

console.log(isDivisibleBy(10,2))
console.log(isDivisibleBy(7,2))


// fizzBuzz
