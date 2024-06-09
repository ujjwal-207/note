import React from "react";



function Note(props){
    function handeldelete(){
        props.ondelete(props.id);
        
    }

    return(
        <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handeldelete}>Delete</button>
        </div>
        
    );

}
export default Note;