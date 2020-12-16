import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import TriggerListContainer from '../containers/TriggerListContainer'
import JobListContainer from '../containers/JobListContainer'
import TriggerDetailsContainer from '../containers/TriggerDetailsContainer'
import JobDetailsContainer from '../containers/JobDetailsContainer'

const Root = ({ store, props }) => (
  <Provider store={store}>
    <Router > 
      <Switch>
        <Route exact path="/"> 
          <Redirect to="/ui/triggers"/>
        </Route>
        <Route exact path="/ui/triggers" >
          <TriggerListContainer />
        </Route>
        <Route path="/ui/triggers/:id" >
          <TriggerDetailsContainer />
        </Route>
        <Route exact path="/ui/jobs">
            <JobListContainer/>
        </Route>
        <Route path="/ui/jobs/:id">
          <JobDetailsContainer />
        </Route>
      </Switch>
    </Router > 
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
/* 
//basename={'ui'}
    <Router > 
      <Switch>
        <Route exact path="/"> 
          <Redirect to="/triggers"/>
        </Route>
        <Route exact path="/triggers" >
          <TriggerListContainer />
        </Route>
        <Route path="/triggers/:id" >
          <TriggerDetailsContainer />
        </Route>
        <Route exact path="/jobs">
            <JobListContainer/>
        </Route>
        <Route path="/jobs/:id">
          <JobDetailsContainer />
        </Route>
      </Switch>
    </Router>

function TDC() {
  let { id } = useParams();
  return (
    <TriggerDetailsContainer triggerName={id} name={id}/>
  );
}

function JDC() {
  let { id } = useParams();
  return (
    <JobDetailsContainer jobName={id} name={id}/>
  );
}

import WrapperMain from '../components/WrapperMain'
import RunButton from '../components/RunButtons'
          <WrapperMain>
            <RunButton>
            <JDC/>
            </RunButton>
          </WrapperMain>
 <TriggerDetailsContainer triggerName={id}/>
          <WrapperMain>
            <TriggerListContainer/>
          </WrapperMain>
          <WrapperMain>
          </WrapperMain>
*/
//import IntegratedWrapContainer from '../containers/IntegratedWrapContainer'
//import IntegratedTable from './IntegratedTable'