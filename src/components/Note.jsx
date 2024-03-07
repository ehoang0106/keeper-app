
function NoteCard(props) {
    return(
        <div className="noteCard">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
        </div>
    );
}

const Note = () => {
    return (  
        <div className="Note">
            
            
            <NoteCard 
                noteTitle="This is the note title"
                noteContent="This is a note content"
            
            />
            
            
            
        </div>
    );
}

export default Note;