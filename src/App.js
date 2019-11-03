import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    fetch('http://localhost/lfz/_practice/todo_complete/public/api/server/todo_get.php')
      .then( response => response.json())
      .then( data => {
        console.log(data);
      })
  }
  render(){
    return(
      <div>app</div>
    );
  }
}

export default App;
