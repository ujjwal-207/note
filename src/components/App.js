import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import NewNote from "./newnote";

function App() {
  const[newNote , setNewNote] = useState([]);


    function addingNote(addNote){
      setNewNote( prevNotes => {
        return[...prevNotes , addNote];
      });
    }
  


  

  return (
    <div >
     <Header />
     <NewNote onadd={addingNote} />
     {newNote.map((noteItem , index) =>{
      return(
        <Note 
          key={index}
          id={index}
          tile={noteItem.tile}
          content={noteItem.content}
          
        />
      )
     })}
      
     <Footer />
      
    </div>
  );
}

export default App;
