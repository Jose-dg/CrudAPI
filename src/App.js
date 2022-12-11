import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import CrudTable from './components/CrudTable';



function App() {
  return (
    <div>
      <h1>CRUD App</h1>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>

    </div>
  );
}

export default App;
