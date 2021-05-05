import './App.css';
import Client_Homepage from './components/Client_Homepage'

import Client_Job_Create from './components/Client_Job_Create'
import Client_Job_Details from './components/Client_Job_Details'
import Client_Job_Edit from './components/Client_Job_Edit'
import Client_Job_View_All from './components/Client_Job_View_All'
import Client_Job_View_Completed from './components/Client_Job_View_Completed'
import Client_Job_View_Ongoing from './components/Client_Job_View_Ongoing'

import Client_Event_Create from './components/Client_Event_Create'
import Client_Event_Details from './components/Client_Event_Details'
import Client_Event_Edit from './components/Client_Event_Edit'
import Client_Event_View_All from './components/Client_Event_View_All'
import Client_Event_View_Completed from './components/Client_Event_View_Completed'
import Client_Event_View_Ongoing from './components/Client_Event_View_Ongoing'

import ErrorPage from './components/ErrorPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

            <Route exact path="/client_homepage" component={Client_Homepage} />

            <Route exact path="/client_job_create" component={Client_Job_Create} />
            <Route exact path="/client_job_details/:id" component={Client_Job_Details} />
            <Route exact path="/client_job_edit/:id" component={Client_Job_Edit} />
            <Route exact path="/client_job_view_All" component={Client_Job_View_All} />
            <Route exact path="/client_job_view_completed" component={Client_Job_View_Completed} />
            <Route exact path="/client_job_view_ongoing" component={Client_Job_View_Ongoing} />

            <Route exact path="/client_event_create" component={Client_Event_Create} />
            <Route exact path="/client_event_details/:id" component={Client_Event_Details} />
            <Route exact path="/client_event_edit/:id" component={Client_Event_Edit} />
            <Route exact path="/client_event_view_All" component={Client_Event_View_All} />
            <Route exact path="/client_event_view_completed" component={Client_Event_View_Completed} />
            <Route exact path="/client_event_view_ongoing" component={Client_Event_View_Ongoing} />

            <Route component={ErrorPage} />

        </Switch>

      </Router>

    </div>
  );
}

export default App;
