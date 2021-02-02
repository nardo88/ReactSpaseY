import React from 'react'
import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import FetchData from './service/fetchData';

class App extends React.Component {
  fetchData = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    companyData: {},
  }

  componentDidMount() {
    this.updateRocket();

    this.fetchData.getCompany()
      .then(companyData => this.setState({companyData}))

  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({rockets: data.map(item => item.name)});

        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures}))
  }



  changeRocket = (rocket) => {
    this.setState({ rocket }, this.updateRocket());
  }

  render () {
    return (
      <>
           
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Features rocket={this.state.rocket} rocketFeatures={this.state.rocketFeatures} />
        <Footer companyData={this.state.companyData} />
      </>
    );
  }
  
}

export default App;
