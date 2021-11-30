# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @snoopy55619819/lotide`

**Require it:**

`const _ = require('@snoopy55619819/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Function takes in 2 arrays and uses framework to output assertion based on comparison result.
  => input: (array, array)
  => return: string
* `assertEqual(actual, expected)`: Function takes in 2 values and uses framework to output assertion based on comparison result.
  => input: (primativeType, primativeType)
  => return: string
* `assertObjectsEqual(actual, expected)`: Function takes in 2 objects and uses framework to output assertion based on comparison result.
  => input: (object, object)
  => return: string
* `countLetters(sentence)`: Function takes in a sentence string and returns an object containing letters and their frequency within string.
  => input: (string)
  => return: object {string: number}
* `countOnly(allItems, itemsToCount)`: Function takes in a list of items and items to count to counts the frequency of certain items.
  => input: (array, array)
  => return: object {string: number}
* `eqArrays(array1, array2)`: Function takes in 2 arrays and returns true if they are equal.
  => input: (array, array)
  => return: boolean 
* `eqObjects(object1, object2)`: FUnction takes in 2 onbjects and returns true if they are equal.
  => input: (object, object)
  => return: boolean
* `findKey(object, callback)`: Function looks for a value that makes the callback function truthy and returns its key, else undefined.
  => input: (object, callbackFunction)
  => return: string
* `findKeyByValue(object, desiredValue)`: Iterate through inputObject and look for desiredValue and return the key.
  => input: (object, string)
  => return: string
* `flatten(array)`: Function takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
  => input: (array)
  => return: array
* `head(array)`: Function returns first element of array.
  => input: (array)
  => return: value
* `letterPositions(sentence): Function takes in a sentence and returns letters and all their corresponding indices.
  => input: (string)
  => return: object {string: array}
* `map(array, callbackFunction)`: Function takes in an array and applies it callbackFunction to all elements.
  => input: (array, function())
  => return: array
* `middle(array)`: Function returs middle element of an array.
  => input: (array)
  => return: value/array
* `tail(array): Function returns index 1 onwards of given array
  => input: (array)
  => return: array
* `takeUntil(array, callbackFunction)`: Iterate through a list and return a new list of values until the condition of callback() is met.
  => input: (array, function())
  => return: array
* `without(array, itemsToRemove)`: Take in an array and remove all instances of items in itemsToRemove.
  => input: (array, array)
  => return: array
