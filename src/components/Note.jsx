

function Note(props) {
    return(
        <div className="noteCard">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}



export default Note;