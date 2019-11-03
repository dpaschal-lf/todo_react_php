import React from 'react';
import './App.css';
import TodoItem from './components/todoitem/todoitem.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      view: 'list',
      data: []
    }
  }
  componentDidMount(){
    fetch('http://localhost/lfz/_practice/todo_complete/public/api/server/todo_get.php')
      .then( response => response.json())
      .then( data => {
        this.setState({
          data: data
        })
      })
  }
  view_list(){
    return this.state.data.map( dataItem =>{
              return(
                <TodoItem key={dataItem.ID} {...dataItem} />
              );
            })

  }
  render(){
    const currentView = 'view_'+this.state.view;
    return(
      <div>
        <h3>Todo list</h3>
        { this[currentView]()}
      </div>
    )
  }
}

export default App;
