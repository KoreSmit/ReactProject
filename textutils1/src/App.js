
import './App.css';
import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
    <TextForm heading="Enter your text"/>
    </div>
    </>
  );
}

export default App;
