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
    function deleting(id){
      setNewNote(prevNotes => {
        return prevNotes.filter((noteItem ,index) => {
          return index!==id;
        })
      })


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
          title={noteItem.title}
          content={noteItem.content}
          ondelete={deleting}

        />
      )
     })}
      
     <Footer />
      
    </div>
  );
}

export default App;
