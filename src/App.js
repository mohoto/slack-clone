import './App.css';
import Header from './Components/interface/Header';
import Sidebar from './Components/interface/Sidebar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Components/channels/Chat';
import Login from './Components/interface/Login';
import {useStateValue} from './context/StateProvider';

function App() {

  const [{user}] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app_body">
                <div className="app_bodyLeft">
                    <Sidebar />
                </div>
                <div className="app_bodyRight">
                  <Header />
                  <Switch>
                    <Route path="/chaine/:channelId" component={Chat}></Route>
                    <Route path="/">
                      <h1>Bienvenue</h1>
                    </Route>
                  </Switch>
                </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
