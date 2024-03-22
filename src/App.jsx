import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/step-2" component={Step2} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
