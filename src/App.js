import React from 'react';
import Footer from './layout/footer';
import Header from './layout/header';

function App(props) {
  return (
    <div id="container" className="position-relative" >
    <Header />
    <div id="content" className="position-relative p-x-12" >
      <section className="d-flex">
        <div className="container-fluid px-0 overflow-hidden">{props.children}</div>
      </section>
    </div>
    <Footer />
  </div>
  );
}

export default App;
