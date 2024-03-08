import notes from "../notes";
import Note from "./Note";

// function createNote1 (noteItem) {
//     return(
//         <Note
//             key={noteItem.key}
//             title={noteItem.title}
//             content={noteItem.content}
//         />
//     );

// }

const Notes = () => {
    return (  
        <div className="Notes">
            {notes.map((noteItem) => {
                return (
                    <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                    />
                );
                
            })}
        </div>
    );
}

export default Notes;