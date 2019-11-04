import React from 'react';

export default props =>{
    const handleStatusChange = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const element = e.target;
        props.onCheckToggle({id: props.itemID,status: !props.checked ? props.checkedValue : props.uncheckedValue});
    }
    return (
        <input name={props.name} value={props.checkedValue} type="checkbox" onClick={(e)=>e.stopPropagation()} checked={props.checked?'checked':''} onChange={handleStatusChange}/>
    );
}