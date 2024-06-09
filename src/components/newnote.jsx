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
    function add(event){

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
                />
                <textarea 
                name="content" 
                placeholder="Takenote"
                />
                <button onClick={add}>Add</button>
                    

                
            </form>
        </div>
    );



}
export default NewNote;