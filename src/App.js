import './App.css';
import './css/style.css'
import React from 'react'
import store from "./redux/store"
import { Provider } from "react-redux"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Screen/login';
import IndexAfterLogin from './Screen/indexAfterLogin';
import Signup from './Screen/Signup';
import AllAction from './Screen/AllAction';
import CaseSummary from './Screen/CaseSummary';
import ForgotPassword from './Screen/ForgotPassword';
import MyProfile from './Screen/MyProfile';
import Change_pass from './Screen/Change_Pass';
import Notification from '../src/Screen/Notification'
import MySubcription from './Screen/MySubcription';
import EditProfile from './Screen/EditProfile';
import Subcription from './Screen/Subcription';
import Settings from './Screen/Settings';
import Feedback from './Screen/Feedback';
import SaveCases from './Screen/SaveCases';
import Home from './Screen/Home.js'
import About from './Screen/About';
import Contact from './Screen/Contact';
import Tnc from './Screen/Tnc';
import PrivacyPolicy from './Screen/PrivacyPolicy.js'
import ResultOfAction from './Screen/ResultOfActionLibrary';
import AllActionForActionSummary from './Screen/AllActionForActionSummary';
import ActionSummary from './Screen/ActionSummary';
import Favorites from './Screen/Favorites';
import Recent from './Screen/Recent';
import BurgerMenuScreen from './Screen/BurgerMenuScreen';
import CaseSummaryData from './Screen/CaseSummaryData';
import ActionSummaryData from './Screen/ActionSummaryData';
import Result from './Screen/Result';
import PreoperativeEvaluation from './Screen/PreoperativeEvaluation';
import RiskEvalution from './Screen/RiskEvalution';
import ApfelScore from './Screen/Rcri';
import Rcri from './Screen/Rcri';
import PhysicalExam from './Screen/PhysicalExam';
function App() {





  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/termsandconditions" component={Tnc} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />


          <Route exact path="/afterLogin" component={IndexAfterLogin} />
          <Route exact path="/favourite" component={Favorites} />
          <Route exact path="/allaction" component={AllAction} />
          <Route exact path="/casesummary" component={CaseSummary} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/changepassword" component={Change_pass} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/mysubcription" component={MySubcription} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/subcription" component={Subcription} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/savecases" component={SaveCases} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resultOfAction" component={ResultOfAction} />
          <Route exact path="/allactionforactionsummary" component={AllActionForActionSummary} />
          <Route exact path="/actionsummary" component={ActionSummary} />
          <Route exact path="/recent" component={Recent} />
          <Route exact path="/drawer" component={BurgerMenuScreen} />
          <Route exact path="/casesummarydata" component={CaseSummaryData} />
          <Route exact path="/actionummarydata" component={ActionSummaryData} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/preoperativeevaluation" component={PreoperativeEvaluation} />
          <Route exact path="/riskevalution" component={RiskEvalution} />
          <Route exact path="/rcri" component={Rcri} />
          <Route exact path="/physicalexam" component={PhysicalExam} />

        </Switch>


      </BrowserRouter>
    </Provider>

  );
}

export default App;
