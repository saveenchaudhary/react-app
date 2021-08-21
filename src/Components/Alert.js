import React from "react";



// Capitalise first word of type
function firstWordCapitalize(word){
    let firstCharcter = word[0].toUpperCase();
    return firstCharcter + word.slice(1);
    
}
firstWordCapitalize('saveen');

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
     {firstWordCapitalize(props.alert.typ)} - {props.alert.msg}
    </div>
  );
}

export default Alert;
