import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';
import Field from './components/Field/Field';
import Sapper from "./components/sapper/Sapper";
import { Cell } from './types';

function App() {

  return (
    <div className="App">
      <Field/>
    </div>
  );
}

export default App