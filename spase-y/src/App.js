import React from 'react'
import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    rocket: 'Falcon 1',
  }

  render () {
    return (
      <>
           
        <Header />
        <Main rocket={this.state.rocket} />
        <Features />
        <Footer />
      </>
    );
  }
  
}

export default App;
