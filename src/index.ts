let age: number = 25;

const isActive: boolean = true;


let names: string[] = ['Alice', 'Bob', 'Charlie'];

let user: [string, number] = ['Alice', 30];

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user1: User = {
    name: 'John Doe',
    age: 28,
    isActive: true
};

function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const greetingMessage = greetUser(user1);

function add(x: number, y: number): number {
    return x + y;
}

function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    } else {
        return `Hello, ${name}.`;
    }
}

function greetWithDefault(name: string, age: number = 25): string {
    return `Hello, ${name}. You are ${age} years old.`;
}

let id: string | number = 12345;

let someData: any = "This can be anything";
type Coordinates = {
    x: number;
    y: number;
};

const point: Coordinates = { x: 10, y: 20 };