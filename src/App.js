import {store} from "./app/store";
import {Provider} from "react-redux";
import NavBar from './components/Navbar';
import CreateForm from "./components/CreateForm";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<CreateForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
