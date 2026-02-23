import React from 'react';
import './App.css';

let name: string;
let age: number | string;

age = "Thirty";
age = 30;

let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name:string) => never;

printName("Kenny");

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Kenny",
// };

// let lotsOfPeople: Person[] = [
//   {
//     name: "Kenny",
//     age: 30
//   },
//   {
//     name: "Alice",
//     age: 25
//   }
// ];

let personName: unknown;

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
