import React, { useState } from "react";

function NewNote(props){
    const[addNote, setAddNote] =useState({
        title:"",
        content:"",
    });
    function handelChange(event){
        const{name , value} = event.target;
        setAddNote( prevNote => {
            return{
                ...prevNote,
                [name]:value
            };
        });
    }
    function add(event){
        props.onadd(addNote);
        setAddNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input 
                name ="title"
                 placeholder="title" 
                 onChange={handelChange} 
                 value={addNote.title} 
                />
                <textarea 
                name="content" 
                placeholder="Takenote"
                value={addNote.content}
                onChange={handelChange}
                />
                <button onClick={add}>Add</button>
                    

                
            </form>
        </div>
    );



}
export default NewNote;