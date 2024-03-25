import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note"
import Test from "./Test";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="App">
            <Header />
            <Note />
            <Footer />
            {/* <Test /> */}
        </div>
    );
}

export default App;
