# Lab 1 - Test Driven Development

**Author**: Kris Sakarias

**Version**: 1.0.0

**Overview**
This lab's purpose is to create some simple modules, export them, and test them to get a broad overview about test-driven development

**Architecture**
* greet.js exports a single function that accepts a single parameter as a string (as a name), and returns 'hello' + string
* arithmetic.js exports an object that includeds two functions  
  1. the add function accepts two parameters that are both numbers and returns the sum of both numbers. If the parameters aren't numbers, undefined is returned.  
  2. the sub function accepts two parameters that are both numbers and returns the difference of both numbers. If the parameters aren't numbers, undefined is returned.