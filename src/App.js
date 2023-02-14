import './App.css';
import {useRoutes} from "react-router-dom";
import routes from './router';

function App() {

  const router = useRoutes(routes)

  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
