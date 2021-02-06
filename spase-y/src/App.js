import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Calendar from './components/Сalendar/Сalendar';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import FetchData from './service/FetchData';

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
    this.updateCompany();
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

  updateCompany = () => {
    this.fetchData.getCompany()
      .then(companyData => this.setState({companyData}))
  }


  changeRocket = rocket => {
    this.setState({ rocket }, this.updateRocket());
  }

  render () {
    return (
      <BrowserRouter >
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />

        <Route exact path="/">
          {this.state.companyData && <Home company={this.state.companyData} />}
        </Route>

        <Route path="/rocket">
          <Main rocket={this.state.rocket} />
          <Features rocket={this.state.rocket} rocketFeatures={this.state.rocketFeatures} />
        </Route>

        <Route path="/calendar" >
          <Calendar />
        </Route>

        <Route path="/details" >
          <Details />
        </Route>

        <Footer companyData={this.state.companyData} />
      </BrowserRouter >
    );
  }
  
}

export default App;
