import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ChatPage from "./pages/Chatpage";



function App() {
  return (
    <div className="App">
    <Route path= "/" component={HomePage} exact />
    <Route path= "/chats" component={ChatPage}/>

    </div>
  );
}

export default App;
