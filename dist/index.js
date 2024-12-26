"use strict";
let age = 25;
const isActive = true;
let names = ['Alice', 'Bob', 'Charlie'];
let user = ['Alice', 30];
const user1 = {
    name: 'John Doe',
    age: 28,
    isActive: true
};
function greetUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
const greetingMessage = greetUser(user1);
function add(x, y) {
    return x + y;
}
function greet(name, age) {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}.`;
    }
}
function greetWithDefault(name, age = 25) {
    return `Hello, ${name}. You are ${age} years old.`;
}
let id = 12345;
let someData = "This can be anything";
const point = { x: 10, y: 20 };
