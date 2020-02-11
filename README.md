# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eric.lombardo/lotide`

**Require it:**

`const _ = require('@eric.lombardo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: It will return the first element of an input array.

* `tail(...)`: It will return all elements of an array EXCEPT for the first element of an input array.

* `middle(...)`: it will return an array with the middle value of a given input array. If array length is an even number it will return an array with 2 values representing the middle.

* `eqArrays(...)`: it will compare 2 arrays to verify if they are equal or not by returning a boolean.

* `countOnly(..)`: loops through input array tabulating all counts accoriding to the second parater object and then returns an object will all counts

* `eqObjects(...)`: it will compare 2 objects to verify if they are equal or not by returning a boolean.

* `findKeyByValue(...)`: it will search a given object with a given value and return the name of the key in the object that holds that value.

* `flatten(..)`: it will un-nest all nested arrays in a given array so that the returned array is 1 dimensional.

* `letterPositions(...)`: it will create an object where each key is a character in a given string whose value is an array that indicates at which index that specific character is located in the string. 

