import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


function App() {
    return (
        <div className="App">
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
            
        </div>
    );
}

export default App;
