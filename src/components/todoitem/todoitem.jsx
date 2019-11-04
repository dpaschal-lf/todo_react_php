import React from 'react';
import CheckBox from '../checkbox/checkbox.jsx';

export default props =>{
    // const activeStateAttribute = props.status==='complete' ? 'checked' : '';
    // const handleStatusChange = (e)=>{
    //     e.stopPropagation();
    //     const element = e.target;
    //     debugger;
    //     props.onChange({active: element.value==='complete' ? 'complete' : 'active'});
    // }
    //            <input name="active" value="complete" type="checkbox" checked={activeStateAttribute} onChange={handleStatusChange}/>
    return(
    <div className="todoItem" onClick={props.onClickHandler}>
        <div className="title">{props.title}</div>
        <div className="added">{props.added}</div>
        <div className="controlDiv">
            <CheckBox checkedValue="complete" itemID={props.ID} uncheckedValue="active" name="active" value="complete" checked={props.status==='complete'} onCheckToggle={props.onCheckToggle} />
        </div>
    </div>
    );
}