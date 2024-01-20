import React from 'react';

import Card from './components/Card';
import Collapse from './components/Collapse';


const App = () => {

  return (
    <>
      <div className="container">

        <div className="row">

          <div className="card-group w-100">

            <div className="col">
              <Card/>
              <hr />
              <Collapse/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
