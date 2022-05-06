import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <ul>
      <li>{value}</li>
    </ul>
  );
}

const modulos = ['Fundamentos', 'Front-End', 'Back-End', 'Ciencia da Computação']

// const textJSX = <h1>Hello JSX!</h1>

class App extends React.Component {
  render() {
    return (
      modulos.map(conteudos => Task(conteudos)))
  }
};
export default App;
