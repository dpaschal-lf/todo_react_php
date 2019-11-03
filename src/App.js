import React from 'react';
import './App.css';
import TodoItem from './components/todoitem/todoitem.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateView = this.updateView.bind(this);
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
          data: data,
          viewID: null
        })
      })
  }
  updateView(newView, id=null){
    const newViewState = {...this.state};
    if(id){
      newViewState.viewID = id;
    }
    this.setState(newViewState);
  }
  view_list(){
    return this.state.data.map( dataItem =>{
              return(
                <TodoItem key={dataItem.ID} {...dataItem} onClick={()=>{
                  this.updateView('item',dataItem.ID)
                }}/>
              );
            })

  }
  view_item(){
    const activeStateAttribute='';
    return(
      <div className="todoDetails">
        <div className="title">Title</div>
        <div className="Description">Description</div>
        <div className="added">added</div>
        <div className="updated">updated</div>
        <div className="controlDiv">
            <input type="checkbox" {...activeStateAttribute}/>
        </div>
      </div>
    );
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
