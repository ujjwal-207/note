import React, { useState } from "react";

function NewNote(){
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
    function add(props){
        props.onadd(addNote);
        setAddNote({
            title:"",
            content:""
        })
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
                />
                <button onClick={add}>Add</button>
                    

                
            </form>
        </div>
    );



}
export default NewNote;