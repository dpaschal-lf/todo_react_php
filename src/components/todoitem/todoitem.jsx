import React from 'react';

export default props =>{
    const activeStateAttribute = props.status==='active' ? 'checked' : '';
    return(
    <div className="todoItem">
        <div className="title">{props.title}</div>
        <div className="added">{props.added}</div>
        <div className="controlDiv">
            <input type="checkbox" {...activeStateAttribute}/>
        </div>
    </div>
    );
}