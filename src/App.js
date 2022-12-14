import './App.css';
import {Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp'
import Signinform from './components/Signinform/Signinform';

function App() {
  return (
    <>
      {/* <SignUp/> */}
      {/* <Resetpass/> */}
      {/* <VerifyAcc/> */}
      <Routes>
          <Route exact path='/' element={<SignUp/>}/>
          <Route exact path='/signinform' element={<Signinform/>}/>
      </Routes>
    </>
  );
}

export default App;
