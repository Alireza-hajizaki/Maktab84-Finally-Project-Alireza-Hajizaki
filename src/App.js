import './App.css';
import {useRoutes} from "react-router-dom";
import routes from './router';
import { useSelector} from 'react-redux'

function App() {

  const router = useRoutes(routes)

  const courses = useSelector((store) => store.courseInfo)
  console.log(courses)

  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
