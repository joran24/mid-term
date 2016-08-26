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

var printDataType = function(collection){


	if(Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++) {
			if (typeof collection[i] === 'object'){
				console.log('I am an array.')
			} else if (typeof collection[i] === 'function'){
				console.log('I am a function.')
			}
		}

	} else if (typeof collection === 'object'){
		for (var key in collection){
			if (typeof collection[key] === 'string'){
				console.log('I am a string.')
			} else if (typeof collection[key] === 'number'){
				console.log('I am a number.')
			} else if (typeof collection[key] === 'boolean') {
				console.log('I am a boolean.')
			}
		}

	} else { 
		console.log('I do not know what you are! What are you?.')
	}
}

var testArray = [[1,2,3],function(){}]

var testObject = {
	string: 'string',
	number: 4,
	boolean: true
}

printDataType(testArray)
printDataType(testObject)

// isDivisibleBy
var isDivisibleBy = function (num1, num2){
	if(num1%num2 === 0){
		//return 'It is ' + true + ' that '+ num1 + ' is evenly divisible by ' + num2 + '.'
		return true
	}else {
		//return 'It is ' + false + ' that '+ num1 + ' is evenly divisible by ' + num2 + '.'
		return false
	}
}

console.log(isDivisibleBy(10,2))
console.log(isDivisibleBy(7,2))


// fizzBuzz
var fizzBuzz = function (array){
	
	for (var i = 0; i < array.length; i++) {
		
		if(isDivisibleBy(array[i],3) === true && isDivisibleBy(array[i],5) === true){
			console.log('FizzBuzz',array[i])
		} else if (isDivisibleBy(array[i],5) === true){
			console.log('Buzz',array[i])
		} else if (isDivisibleBy(array[i],3) === true){
			console.log('Fizz',array[i])
		} else {
			console.log(array[i])
		}
	}
}

fizzBuzz([10,9,15,7])