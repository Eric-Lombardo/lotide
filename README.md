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