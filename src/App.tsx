import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name: string;
// let age: number | string;

// age = "Thirty";
// age = 30;

// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name:string) => never;

// // type Person = {
// //   name: string;
// //   age?: number;
// // }

// // let person: Person = {
// //   name: "Kenny",
// // };

// // let lotsOfPeople: Person[] = [
// //   {
// //     name: "Kenny",
// //     age: 30
// //   },
// //   {
// //     name: "Alice",
// //     age: 25
// //   }
// // ];

// let personName: unknown;


// interface Person extends X{
//   name: string;
//   age?: number;
// };

// interface Guy extends Person {
//   profession: string;
// }

// // Example of type extension
// type X = {
//   a: string;
//   b: number;
// };

// type Y = X &{
//   c: string;
//   d: number;
// };

// let y: Y = {
//   a: "Hello",
//   b: 42,
//   c: "Hello",
//   d: 42
// }

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos,{id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
