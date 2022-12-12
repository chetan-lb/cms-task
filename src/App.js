import './App.css';
import SignUp from './components/SignUp/SignUp'
import VerifyAcc from './components/VerifyAcc/VerifyAcc';
import Resetpass from './components/resetPass/Resetpass'
import {Routes, Route } from "react-router-dom";
import Signinform from './components/Signinform/Signinform';

function App() {
  return (
    <>
      {/* <SignUp/> */}
      {/* <Resetpass/> */}
      {/* <VerifyAcc/> */}
      <Routes>
          <Route exact path='/' component={SignUp}/>
          <Route exact path='/signinform' component={Signinform}/>
      </Routes>
    </>
  );
}

export default App;
