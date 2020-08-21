import React from 'react';
import 'styles/Home.scss';
import RightColumn from 'components/right-column';
import LeftColumn from 'components/left-column';

function Home() {
  return (
    <div className="App">
      <div className="Main"> 
          <LeftColumn />
          <RightColumn />
      </div>
    </div>
  );
}

export default Home;
