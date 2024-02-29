import './App.css';

import Dashboard  from './Dashboard';
import AddProducts from './AddProducts';
import EmailNoti from './EmailNoti';
import Landingpage from './Landingpage';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import PassChange from './PassChange';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import EditUser from './EditUser';
import PreviewProfile from './PreviewProfile';
import Account from './Account';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Landingpage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/add-product" element={<AddProducts/>}/>
      <Route path="/pass-change" element={<PassChange/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/email-notification" element={<EmailNoti/>}/>
      <Route path="/edit-profile" element={<EditUser/>}/>
      <Route path="/view-profile" element={<PreviewProfile/>}/>
      <Route path="/account" element={<Account/>}/>

    </Routes>
  </Router>
  
  );
}

export default App;
