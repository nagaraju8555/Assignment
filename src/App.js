
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navigation from './Navigation';
import Overview from './Components/Overview';
import Calendar from './Components/Calendar';
import Patientlist from './Components/Patientlist';
import Messages from "./Components/Messages";
import Payment  from './Components/Payment';
import Settings from './Components/Settings';
function App() {
  return (
    <div className="App">
       <Router>
       <div className="row mx-0">
         <div style={{ width: "20%" }}>
          <Navigation />
         </div>
          
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/patientlist" component={Patientlist} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
       </Router>
     
    </div>
  );
}

export default App;
