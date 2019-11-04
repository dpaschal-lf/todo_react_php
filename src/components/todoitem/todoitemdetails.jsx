import React from 'react';

class TodoItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        fetch('http://localhost/lfz/_practice/todo_complete/public/api/server/todo_get.php?id='+this.props.id)
          .then( response => response.json())
          .then( data => {
            this.setState({
              data: data[0],
            })
          })  
    }
    render(){
        if(!this.state.data){
            return <div>loading data...</div>
        }
        const activeStateAttribute=this.state.data.title==='complete'?'checked': '';
        return(
            <div className="todoDetails">
                <div onClick={()=> this.props.changeView('list')}>BACK</div>
                <div className="title">{this.state.data.title}</div>
                <div className="Description">{this.state.data.description}</div>
                <div className="added">{this.state.data.added}</div>
                <div className="updated">{this.state.data.updated}</div>
                <div className="controlDiv">
                    <input type="checkbox" {...activeStateAttribute}/>
                </div>
            </div>
        );
    }
}

export default TodoItemDetails;
