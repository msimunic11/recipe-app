
import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactTooltip from 'react-tooltip';


function App() {
  return (
    <div className="App">
      <TodoList />
      <ReactTooltip />
    </div>
  );
}

export default App;