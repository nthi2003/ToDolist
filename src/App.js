import React, {Fragment} from 'react';
import './App.css';
import Header from './Header.js';
import Todos from './Todos';

function App() {
  return (
    <Fragment>
        <Header />
        <Todos />
    </Fragment>
  );
}

export default App;
