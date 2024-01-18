import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/Card';
import Collapse from './components/Collapse';


const App = () => {

  console.log("app");
  console.log(this);

  return (
    <>
    {console.log("qqwww")}
    {console.log(this)}
    <div className="container">

      <div className="row">

        <div className="card-group w-100">

          <div className="col">

            <Collapse href="collapseExample1">
              <Card
                cardText="Lorem Ipsum Text I"
                updatedTime="Last Updated 1 min ago"
                image="https://picsum.photos/id/237/200/300"
              />
            </Collapse>

          </div>

          <div className="col">

            <Collapse href="collapseExample2">
              <Card
                cardTitle="TEST TITLEX"
                cardText="Lorem Ipsum Text II"
                updatedTime="Last Updated 2 min ago"
                image="https://picsum.photos/seed/picsum/200/300"
              />
            </Collapse>

          </div>

          <div className="col">

            <Collapse href="collapseExample3">
              <Card

                cardText="Lorem Ipsum Text III"
                updatedTime="Last Updated 3 min ago"
                image="https://picsum.photos/200/300?grayscale"
              />
            </Collapse>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
