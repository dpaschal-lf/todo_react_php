import React from 'react';
import './App.css';
import TodoItem from './components/todoitem/todoitem.jsx';
import TodoItemDetails from './components/todoitem/todoitemdetails.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.state = {
      view: 'list',
      data: [],
      viewID: null
    }
  }
  componentDidMount(){
    this.getCurrentList();
  }
  updateItem(data, reload=true){
    const processedData = new FormData();
    for( var key in data){
      processedData.append(key, data[key]);
    }
    fetch('http://localhost/lfz/_practice/todo_complete/public/api/server/todo_update.php', {
      'method': 'POST',
      'body': processedData
    }).then( ()=>  this.getCurrentList() );
  }
  getCurrentList(){
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
    const newViewState = { view: newView };
    if(id){
      newViewState.viewID = id;
    }
    this.setState(newViewState);
  }
  view_create(){
    return (
      <div className="todoForm">
        <div>
          <label> Title: 
            <input name="title" type="text" placeholder="please enter a title"/>
          </label>
        </div>
        <div>
          <label> Description: 
            <textarea name="title" type="text" placeholder="please enter a title"></textarea>
          </label>
        </div>
      </div>
    );
  }
  view_list(){
    return this.state.data.map( dataItem =>{
              return(
                <TodoItem key={dataItem.ID} {...dataItem} onClickHandler={()=>{
                  this.updateView('item',dataItem.ID)
                }} onCheckToggle={this.updateItem}/>
              );
            })

  }
  view_item(){
    return(
      <TodoItemDetails id={1} changeView={this.updateView}/>
    );
  }
  render(){
    const currentView = 'view_'+this.state.view;
    return(
      <div>
        <h3>Todo list</h3>
        <div className="createButton" onClick={()=>{
          this.updateView('create');
        }}>CREATE</div>
        { this[currentView]()}
      </div>
    )
  }
}

export default App;
