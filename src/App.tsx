import React from 'react';
import './App.css';
import {SignUpForm} from "./authentication/components/forms/SignUpForm";
import {SignUpExtendedForm} from "./authentication/components/forms/SignUpExtendedForm";

function App() {
  return (
    <div className="App">
      <SignUpForm/>
      <SignUpExtendedForm/>
    </div>
  );
}

export default App;
