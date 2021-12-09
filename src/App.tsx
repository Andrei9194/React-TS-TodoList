import { NavBar } from './components/NavBar';
import {Routes,  Route} from 'react-router-dom'
import { TodoPages } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';
function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<TodoPages/>}/>
            <Route path='about/*' element={<AboutPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
