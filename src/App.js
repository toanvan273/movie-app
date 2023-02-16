import React from 'react';
import Filter from './layout/filter';
import Header from './layout/header';

function App(props) {
  return (
    <div
    id="container"
    className="position-relative"
    // style={{
    //   minHeight: '100vh',
    // }}
  >
    <Header />
    <div
      id="content"
      className="position-relative p-x-12"
    >
      <section className="d-flex">
        <Filter />
        <div className="container-fluid px-0 overflow-hidden"> {props.children}</div>
      </section>
    </div>
    <footer
      className={`position-absolute bottom-0 start-0 end-0`}
      style={{
        zIndex: -1,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center f-12 mt-3 mb-3"
        style={{ color: '#676767' }}
      >
        <p className="mb-0 mt-1 ms-2">copyright - v1.0</p>
      </div>
    </footer>
  </div>
  );
}

export default App;
