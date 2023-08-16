import React from 'react';
import './App.css'; 
import 'office-ui-fabric-react/dist/css/fabric.css';

import Navigation from './Navigation';
import CardsSection from './CardsSection';
import OperationsTable from './OperationsTable';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm1 ms-xl1">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
          <div className="ms-row-row">
            <CardsSection />
          </div>
          <div className="ms-Grid-row">
            <OperationsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;